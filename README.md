# Birthday Bloom 💗

## Updated birthday letters

`app/birthday-data.ts` now contains the 13 supplied friends and their original messages. Paragraph breaks use `\n\n`. The existing opening photo remains configured. Friend IDs are kept as supplied and are unique; spaces in these internal keys work in this app.

Only the sample bear image is included among the friends' images. Add these 12 files to `public/friends/` to display the real pictures: `lawun.png`, `masaung.jpg`, `maphoo.jpg`, `anushka.png`, `makyayemone.jpg`, `aungmin.jpg`, `thant.png`, `kyalsin.png`, `bommyat.png`, `kosaw.png`, `phyo.png`, `mamyat.png`. Match filenames and capitalization exactly. Missing images show initials until files are added.

## Latest photo & GitHub → Vercel

The opening portrait now uses the supplied photo at `public/birthday-photo.jpg` beside the big 22. The rest of the website is unchanged.

For a friend called **Su zie**, use a unique stable ID such as `id: 'su-zie'` and the visible name `name: 'Su zie'`. The ID is an internal key, not the displayed name. `suzie` would also work. Copy an existing friend entry in `app/birthday-data.ts`, set a new ID, name, image path, and letter, and keep the separating commas between entries.

To deploy:

1. Extract this ZIP and upload the **contents** of `birthday-bloom-source` to your GitHub repository (package.json should be at the repository root).
2. Import that repository as a new Vercel project.
3. Select **Vite**, use build command **npm run build**, and output directory **dist**. The included `vercel.json` declares these settings.
4. No environment variables or database are needed. Deploy and share the resulting URL.

Vercel Hobby is free for personal, non-commercial projects subject to its current usage limits. GitHub can store the source; Vercel hosts the live site. Check the live website on her target phone before sharing, particularly image loading and audio. The site attempts audible autoplay, but phone browser policy can require a first tap inside the website. A link tap in another app does not guarantee audible autoplay on arrival.

A standalone React + TypeScript + Vite birthday surprise. This ZIP contains the complete experience without hosting-specific infrastructure.

## Circular cards — change each friend's name and image

The last screen now uses fully circular clickable cards with each friend's image and name inside. The uploaded sample bear is included at `public/friends/sample-bear.jpeg` and is used as a placeholder for all six friends.

To customize each friend, add images in `public/friends/` and edit the corresponding entry in `app/birthday-data.ts`:

```ts
{
  id: 'emma',                       // unique ID; keep it stable
  name: 'Your friend’s name',
  imageSrc: './friends/emma.jpg',   // file at public/friends/emma.jpg
  imageFit: 'cover',               // cover for photos, contain for illustrations
  imagePosition: 'center',         // e.g. 'center 25%' adjusts portrait cropping
  label: 'A birthday wish for you',
  color: 'rose',                   // rose, lavender, or peach
  letter: 'Happy birthday!\n\nYour message here.'
}
```

Every card has independent settings. If an image is missing, the card displays initials. To publish your changes for all visitors, rebuild and redeploy; there is no visitor-facing editor.

### Automatic birthday song

Autoplay is attempted immediately on the opening screen. When the browser blocks sound, the first tap anywhere on that screen (or Enter/Space) unlocks and starts the music; a music button is also available. This avoids requiring a dedicated play-button tap. Some browsers, especially iPhone Safari, require a gesture and cannot be forced to play audible sound solely on page load. The melody remains one verse with no repeat until reload and stops when leaving the opening.

## New 22nd birthday opening

There are now three screens: **funny birthday collage → original birthday welcome → friends' letters**. The new first screen is inspired by the reference: cream paper, big pink 22, blue party hat, a strawberry cake, and a dancing party chick. The one-time song starts on this screen when the browser permits autoplay; otherwise tap Play birthday song. The make-a-wish button blows out the candles and launches confetti.

### Add her photo later

1. Save her photo as `public/birthday-photo.jpg`.
2. In `app/birthday-data.ts`, change `opening.photoSrc` from `''` to `'./birthday-photo.jpg'`.
3. Optionally set `opening.photoPosition` to `'xMidYMin slice'` for a top-centered crop.

The photo is cropped into the circular portrait under the party hat. A cartoon smile is shown until you add a photo, or if the photo fails to load. `opening.age` is set to 22. The uploaded reference itself is not included as a portrait asset. The original two screens and friend letters remain available after Continue.

## Run locally

Install Node.js 22.13 or newer. Open a terminal in this extracted folder:

```sh
npm install
npm run dev
```

Open the local URL printed in your terminal. Do not open index.html directly.

## Personalize

Edit `app/birthday-data.ts`: replace `birthday.name`, the tagline, friends' names, and their letters. Each friend needs a unique `id`. Paragraphs are separated with `\n\n`. Add or remove friends as needed. Remove the sample preview note in the footer of `app/page.tsx` when ready to share.

## Music

The first page plays one instrumental verse of the traditional Happy Birthday melody in a gentle synthesized music-box style. There is no vocal recording. It ends automatically and never loops. Returning from letters or replaying confetti does not restart it; a full page reload resets it.

Sound autoplay depends on the browser. On iPhone and other browsers that block it, tap **Play birthday song**. Press the sound control to stop early. Continuing to the letters stops audio. No audio file or third-party audio service is required.

## Animations and accessibility

Floating hearts, fluttering butterflies, bouncing gifts, spinning flowers, twinkling stars, balloons, cake candles, and confetti. Reduced-motion settings disable decorative movement. Letters support keyboard focus, Escape, a close button, and Back to letters. Read markers last until refresh.

## Build and share

```sh
npm test
npm run build
npm run preview
```

Deploy the generated `dist` folder to a static web host. No database or API is required. The source ZIP contains no personal credentials, Git history, installed dependencies, or original hosting identity. Google Fonts are optional remote resources; system fonts are used if unavailable.

## Files

- `app/page.tsx`: welcome, friends, and letter popups
- `app/birthday-data.ts`: editable names and letters
- `app/birthday-song.tsx`: music controls and lifecycle
- `app/birthday-melody.ts`: one-time Web Audio melody
- `app/cute-decorations.tsx`: welcome-only decorations
- `app/globals.css`: responsive pink theme and animations
- `tests/birthday-melody.test.cjs`: audio regression tests

Build, TypeScript, and mocked audio logic tests were checked. Actual browser rendering and audio playback need a final check on your target phone before sharing.
