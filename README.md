# Jihani & Pasindu — Invitation Studio

A working, dependency-free first version. It includes the animation created for your invitation: a closed scroll with gold finials and a ribbon, ribbon release, rotation, unrolling, and the personalized wedding card. The wedding artwork is kept as a single image; the guest name is overlaid above its dotted line.

## Included

- Add, edit, remove, search and filter guests.
- A personal invitation link for each name, supporting Sinhala and other Unicode text.
- CSV import, duplicate-row detection, and guest-list CSV export with public invitation links.
- Preview and replay the animated scroll; a reduced-motion mode follows the device's accessibility setting.
- Manual WhatsApp, email and SMS sharing with the guest's own name and link.
- An explicit checkbox to mark a guest as sent. Opening a sharing app does **not** mark delivery.
- Responsive desktop and mobile layouts, local artwork and no third-party runtime dependencies.

## How to use

1. Open the studio and add a guest with an international phone number, an email, or both.
2. Click the guest's eye icon to see their invitation animation.
3. Deploy the project to a public Vercel website (instructions below).
4. In Link settings, enter the permanent public website address.
5. Open WhatsApp, email or SMS from that guest's row. Review the prepared message and press Send in your app.
6. Mark the guest as sent after sending.
7. Export the CSV regularly as a backup.

No WhatsApp API, access token, payment setup or message template is needed for this manual sharing version. Your regular internet connection or SMS carrier charges can still apply. WhatsApp Web/app, a configured email app, or an SMS-capable device is needed for the corresponding button. A desktop computer without an SMS handler cannot send SMS through this version. A mailto link opens the configured email handler; it does not send email itself.

Bulk preparation creates individual links for all guests. **Manual sharing still requires a separate send action for each guest.** Automatic bulk sending, delivery receipts, background SMS/email, RSVP, a shared database and organizer login are not implemented in this version.

## Vercel deployment

This is a plain static website. It does not require Next.js or an API server.

1. Extract this folder and open it in Cursor, or push it into a Git repository you control.
2. Import that repository into Vercel as a new project.
3. Select Framework Preset **Other**. Use build command `npm run build` and output directory `dist`. The included `vercel.json` sets these values.
4. Deploy. No environment variables, services or API credentials are needed.
5. Ensure the production deployment is public and does not require Vercel authentication. Test an invitation link on another phone or in a signed-out browser.
6. Use that stable public address in the studio's Link settings before sharing real invitations. Keep the domain and the invitation asset in place after sending.

The ChatGPT-hosted studio is a private review copy; guest links should use your public Vercel deployment. Do not use a localhost or a private preview address for guests. This package can be deployed directly; Cursor is optional.

## Guest list CSV

Required headers: `name` and at least one of `phone` or `email`.
Optional: `channel`, `sent`. Exports also contain `invitation_url` (ignored on import).
Channels: `whatsapp`, `email`, `sms`.

```csv
name,phone,email,channel,sent
"Mr. & Mrs. Perera",+94771234567,,whatsapp,false
"Nimal and Family",,guest@example.com,email,false
```

Use country codes, for example `+94771234567`, not `0771234567`. The sample names and contacts are placeholders, not a real guest list. Standard CSV escaping supports commas and quotation marks in names. The import validates every row before adding any guests and skips exact name/phone/email duplicates. Up to 2,000 rows or 2 MB per import. CSV export prefixes spreadsheet-formula characters with an apostrophe; reimport removes this protective prefix.

## Storage and privacy

Guest contact records stay in localStorage in the current browser profile and website origin. They are not uploaded or shared between devices. Clearing browser storage, switching browser/device/domain, or using private browsing may lose access to the list. Use CSV export/import to transfer or back up records. CSV files contain personal contact information; keep them private.

Invitation links contain the invitation name in a URL fragment (after `#invite=`), but never the phone or email. This is personalization, not authentication. Anyone with a link can view, alter, or forward it. Removing a guest or changing a guest name does not revoke previously sent links. Because no centralized guest database exists, a guest does not need your browser's stored guest list to open their invitation.

The studio is not password-protected on Vercel. Other visitors see only their own browser's guest list, never yours; if they remove the invitation fragment they can use a separate empty studio. For a private shared organizer dashboard, add real server-side authentication and storage in a later phase.

## Source and animation

- `dist/index.html`: organizer studio, dialogs and guest invitation view.
- `dist/styles.css`: interface, responsive layout and custom scroll/ribbon/roller animation.
- `dist/app.js`: guest validation, local storage, CSV handling, personal link routing and sharing.
- `dist/assets/invitation.png`: enhanced invitation from this conversation, used without further alteration.
- `tests/core.test.cjs`: name/number pairing, international phones, Unicode links, safe CSV round-trip and import validation.

Replace the card image with an approved final image if needed. Its current size is 981 × 1602. The name sits at 28.3% from the top; adjust `.card-guest` only if you change the card layout. The full-open aspect ratio in `.scroll-assembly.open .scroll-paper` should match the replacement image. `fitGuestName` reduces long names to fit the designated line.

Animation timing: ribbon release immediately; rotation starts at 650 ms; unrolling starts at 1,600 ms and lasts 2,200 ms; replay appears at 3,900 ms. These can be adjusted without changing the wedding card. This is a CSS recreation inspired by your physical scroll photos, not a video made from those photos.

## Checks

Run `npm run build` and `npm test` using Node.js. No npm installation is required. Syntax, asset/DOM references and six behavior tests passed. Visual browser QA was not available in the creation environment; please review the animation on your phone after deployment, especially SMS behavior on iOS and Android.
