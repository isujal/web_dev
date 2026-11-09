# The Ducktators website: content guide

What the site has now, what every good FRC team site covers, and exactly what to send so the placeholders can be replaced.

## 1. What strong FRC team sites cover (and where ours stands)

Based on Hall of Fame and championship-level team sites, plus rookie team sites and sponsor packets.

| Section | Why teams have it | Our site |
|---|---|---|
| Home / hero | Who you are in 5 seconds | ✅ Built: title sequence, badge, Istanbul status |
| What is *FIRST* / FRC | Parents and sponsors don't know FRC | ✅ Built: "What is FRC, in one breath" |
| About / history | Credibility, story | ✅ Built as the season filmstrip (rookie-honest) |
| Subteams | Shows structure, helps recruiting | ✅ Built: 7 domains roll call |
| Team / members / mentors | Human face of the team | ⚠️ Mentors only; students wait for consent |
| Robot(s) | The engineering proof judges and sponsors look for | ⚠️ "Robot 001 in pre-production" until build season |
| Season calendar / countdown | Keeps visitors coming back | ⚠️ Countdown ready; needs the Kickoff date |
| Outreach / Impact | Required story for the Impact Award; sponsors love it | ⚠️ Plans shown as "Planned"; mark them done as they happen |
| Sponsors + tiers | Funding: the #1 job of a rookie site | ⚠️ Tiers built, amounts and logos missing |
| Join / recruit | New members | ⚠️ Form built; needs an email or form endpoint |
| Contact + socials | Everyone | ⚠️ Needs email and handles |
| Media / gallery | Social proof, energy | ❌ Add after the first photo shoot |
| Blog / build diary | Fresh content, documents the season | ❌ Phase 2 |
| Resources (code, CAD, training library) | Respect from other teams; Impact evidence | ❌ Phase 2 (post-season) |
| Awards / results | Proof | ❌ Only after the Istanbul Regional |
| Donate button | Small donors, alumni, parents | ❌ Optional: needs a school-approved payment route |

## 2. What I need from you (send in this order)

### A. Must have before going public
1. ~~**Team email**~~ Done: ducktator.frc@gmail.com is set in `SITE.email` in `js/main.js`. Join applications go to a Google Sheet once `tools/apps-script/README.md` is set up.
2. **Instagram handle** (and any YouTube or LinkedIn) → `SITE.instagram`.
3. **Mentor approval of copy**: tagline "Order in the ranks.", domain mottos, and sponsor tier names (Cadet / Lieutenant / Colonel / General).
4. **Sponsor tier amounts** (INR, plus USD if you pitch abroad) and what each tier gets.
5. **School sign-off** for using the CAJCS name on a public site, and any school branding rules.

### B. Makes the site feel alive
6. **One team photo** at the Maker Lab (landscape, everyone in frame) once consent forms are in. It goes into the first filmstrip frame and the hero.
7. **Student roster** (first names only, domain, rank), for students whose families gave written consent.
8. **Mentor photos** (or keep the monogram circles).
9. **Kickoff date and time** in IST once *FIRST* announces it → `SITE.kickoff` (the countdown starts automatically).
10. **Istanbul Regional dates** once published.

### C. As the season runs
11. **Robot**: name, photos/renders, a short spec list (drivetrain, mechanisms, weight, motors), and which pipeline stage it is at.
12. **Outreach log**: date, what happened, how many people reached, one photo. Each item flips from "Planned" to "Done".
13. **Sponsor logos** (SVG or transparent PNG) with the tier.
14. **Build diary** posts (100–300 words + 1 photo, weekly in build season).
15. **Results and awards** after the event, only as published by *FIRST*.

## 3. Logos and photos

- **School and *FIRST* logos:** save the official files as `assets/logos/cajcs.png` and `assets/logos/first-frc.png` (PNG with a transparent background, or swap the extension in `index.html` for SVG). Until the files exist, the site shows a clean text version in the same white tile. Get the *FIRST* logo from *FIRST*'s official brand page and use it unaltered; get the crest from the school office.
- **Photos:** in `assets/photos/`. `team-makerlab.webp` is the founding team. The `arena-*` photos show **other teams** at *FIRST* events and are captioned that way on the site. Confirm you have the right to use them (for *FIRST* media photos, check the licence on the source); replace them with our own event photos after Istanbul.
- **Consent:** the team photo shows students. Publish only once every family in it has signed the photo consent form.

## 4. How to edit

- All text is in `index.html`; each section is marked `SC 01` to `SC 10`.
- Team settings (email, handle, kickoff date, form endpoint) are at the top of `js/main.js`.
- Colours and fonts are CSS variables at the top of `css/style.css`.
- For the enlist form to send directly (instead of opening the email app), create a free Formspree form or a Google Apps Script web app and paste its URL into `SITE.formEndpoint`.

## 4. Rules (from the design bible)

- Never publish a student's name or face without written family consent.
- Never invent results, sponsors or dates; keep the placeholders until they are real.
- Never use "Cath-astrophic" or "Paraducks".
- *FIRST* logos only from *FIRST*'s official brand kit; otherwise write "*FIRST*® Robotics Competition" as text.

## 5. Updates page (outreach, events, photos)

The site has a separate page, `updates.html`, linked from the menu as **Updates**. It does not appear while scrolling the home page. It is empty until the first post.

To add a post:
1. Put the photos in `assets/updates/` (JPG or WebP, about 1600 px wide).
2. Open `js/updates.js` and add an entry to `POSTS` (the format is described at the top of that file): date, type (`outreach`, `event`, `build` or `competition`), title, a few sentences, photos and an optional link.
3. Push; the page sorts posts by date and the filters, photo viewer and layout work automatically.

Only post photos of students whose families have signed the consent form.

## Figma file (brand kit, website, post templates)

https://www.figma.com/design/wGPjmDYEb94g7d1N79Vkkg

- **Brand Kit** page: colours (linked variables), text styles, logos and rules. Change a colour or text style here and every design that uses it updates.
- **Website** page: an editable copy of the homepage. The domain cards are instances of one "Domain card" component; edit their text in the right panel.
- **Post Templates** page: Instagram post (1080×1350) and story (1080×1920) components. Alt-drag an example to duplicate it, change Tag/Headline/Body/Footer in the right panel, select "Photo (swap image)" and replace the image fill, then export as PNG.
- Do not delete the "Image assets (source, do not delete)" frame on the Brand Kit page: the logos and photos are stored there.
- The free Starter plan allows 3 pages per file; make a second file if you need more.
