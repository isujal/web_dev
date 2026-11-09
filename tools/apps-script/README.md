# Website form → team Google Sheet

Every "Join the team" application on the website is saved as a row in a Google Sheet owned by the team account, and the team inbox gets an email for each one. It's free and needs no server.

## One-time set-up (about 10 minutes)

Do all of this while signed in to **ducktator.frc@gmail.com**.

1. Go to https://sheets.new and name the sheet **Ducktators · Website applications**.
2. In the sheet: **Extensions → Apps Script**.
3. Delete what is in `Code.gs`, paste in the contents of `tools/apps-script/Code.gs` from this repo, and click **Save**.
4. Click **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
   - Description: `Website forms`
   - Execute as: **Me (ducktator.frc@gmail.com)**
   - Who has access: **Anyone**
5. Click **Deploy**, then **Authorize access**, and allow the permissions. Google warns that the app is unverified: click **Advanced → Go to … (unsafe)**. It is the team's own script.
6. Copy the **Web app URL**. It ends in `/exec`.
7. Paste it into `js/main.js`, in `SITE.formEndpoint`, or send it to Claude to do it.

## Checking it works

- Open the web-app URL in a browser. You should see `{"ok":true,"service":"Ducktators website forms"}`.
- Submit the form on the website with a dummy name and an email you can read. You should get:
  - a new row in the **Applications** tab, with Status **New**
  - an email to ducktator.frc@gmail.com saying "New application: …"
  - a "We got your application" email at the dummy address
- Delete the test rows afterwards.

## Day-to-day

- **Status** column: New → Contacted → Interview → Joined / Not this intake (drop-down).
- **Mentor notes** column: anything you want to remember.
- To give another mentor access, use the sheet's **Share** button. Don't make the sheet public: it contains students' contact details.
- If you change the script later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
