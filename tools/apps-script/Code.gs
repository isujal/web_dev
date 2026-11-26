/**
 * The Ducktators · FRC 11745 · website form receiver
 *
 * Runs as a Google Apps Script web app inside the team's Google Sheet
 * (owned by ducktator.frc@gmail.com). Every "Join the team" application from the
 * website becomes a new row in the "Applications" tab, and the team inbox gets an
 * email about it. Set-up steps: tools/apps-script/README.md
 */

const TEAM_EMAIL = 'ducktator.frc@gmail.com';
const SHEET_NAME = 'Applications';
const HEADERS = ['Received (IST)', 'Name', 'Grade', 'Email', 'Domains', 'Note', 'Status', 'Mentor notes', 'Page'];
const SEND_CONFIRMATION = true; // also send the applicant a short "we got it" email

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (d._honey) return json({ ok: true }); // bot filled the hidden field: pretend success, store nothing

    // Basic checks so random traffic cannot fill the sheet
    const name = clean(d.name, 80), grade = clean(d.grade, 20), email = clean(d.email, 120);
    if (!name || !grade || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json({ ok: false, error: 'missing fields' });
    if (d.type && d.type !== 'join') return json({ ok: false, error: 'unknown form' });

    const sheet = getSheet();
    const when = Utilities.formatDate(new Date(), 'Asia/Kolkata', 'yyyy-MM-dd HH:mm');
    sheet.appendRow([when, name, grade, email, clean(d.domains, 200) || 'Not sure yet', clean(d.note, 1000), 'New', '', clean(d.page, 200)]);

    MailApp.sendEmail({
      to: TEAM_EMAIL,
      replyTo: email,
      subject: `New application: ${name} (${grade})`,
      body: `A new application came in from the website.\n\nName: ${name}\nGrade: ${grade}\nEmail: ${email}\nDomains: ${clean(d.domains, 200) || 'Not sure yet'}\n\nNote:\n${clean(d.note, 1000) || '(none)'}\n\nAll applications: ${SpreadsheetApp.getActive().getUrl()}\n\nReply to this email to answer the applicant directly.`,
    });

    // one confirmation per address every 10 minutes, so the form cannot be used to flood someone's inbox
    const cache = CacheService.getScriptCache(), key = 'sent:' + email.toLowerCase();
    if (SEND_CONFIRMATION && !cache.get(key)) {
      cache.put(key, '1', 600);
      MailApp.sendEmail({
        to: email,
        replyTo: TEAM_EMAIL,
        name: 'The Ducktators · FRC 11745',
        subject: 'We got your application · The Ducktators',
        body: `Hi ${name.split(' ')[0]},\n\nThanks for applying to join The Ducktators, FRC team 11745. A mentor will get back to you soon.\n\nIf you have questions, just reply to this email.\n\nThe Ducktators\nCathedral & John Connon School, Mumbai`,
      });
    }
    return json({ ok: true });
  } catch (err) {
    console.error(err); // details stay in the Apps Script logs, not in the browser
    return json({ ok: false, error: 'server error' });
  } finally {
    lock.releaseLock();
  }
}

// Visiting the web-app URL in a browser shows this, which is a quick way to check it is deployed.
function doGet() {
  return json({ ok: true, service: 'Ducktators website forms' });
}

function getSheet() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#5E2A84').setFontColor('#FFFFFF');
    sheet.getRange('G2:G').setDataValidation(SpreadsheetApp.newDataValidation()
      .requireValueInList(['New', 'Contacted', 'Interview', 'Joined', 'Not this intake'], true).build());
  }
  return sheet;
}

function clean(v, max) {
  // Trim and cap first, then make anything a spreadsheet would run as a formula plain text
  // (a leading ' tells Sheets "this is text"; checking after the trim stops " =FORMULA" slipping through)
  let s = String(v == null ? '' : v).trim().slice(0, max);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
