# Paste this into Cursor after opening this project

You are working on the existing Jihani & Pasindu wedding Invitation Studio in this folder. The animation has already been created; preserve it and improve the existing implementation instead of rebuilding from scratch.

Read README.md, dist/index.html, dist/styles.css and dist/app.js before changing anything. This first version uses plain HTML/CSS/JS, no runtime dependencies and no backend. It targets a public Vercel deployment, configured in vercel.json.

Keep the approved invitation artwork unchanged. Only the guest-name overlay may differ between invitations, above the dotted line. Preserve the ribbon release, rotation, scroll opening and replay. Retain accessible reduced-motion behavior. Do not generate a replacement card or change wedding text, dates, names, Sinhala lettering or ornaments.

The guest list is browser-local. Preserve pairing of each name with its international phone and email. CSV import must validate all rows before mutation, support quoted CSV and avoid duplicate records. Export must preserve contacts safely and include individualized links when a public address exists. Keep guest links independent of organizer localStorage, so they open on other devices.

Sharing is MANUAL: open WhatsApp with a wa.me link, email with mailto, or SMS with sms. Never claim an API sent or delivered a message. Keep the organizer's explicit Mark sent control. No WhatsApp API, automatic bulk sending, background email/SMS, paid services, database or sign-in should be added without a new request. Never silently introduce paid dependencies.

First run npm run build and npm test. Then serve the dist folder locally and check desktop and mobile layouts, add/edit/remove guests, sample CSV import/export, a long Sinhala/English name, a guest link opened in a fresh browser without local storage, the animation and reduced motion, and all three sharing schemes. Use fake contacts; do not send messages to real people.

If visual checks reveal problems, fix them locally while preserving design and behavior, rerun relevant checks, and report actual changes and limitations. Do not auto-commit, push or deploy. Help the user deploy to Vercel only when requested. Keep the public URL stable after invitations are shared.
