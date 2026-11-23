import { mkdir, writeFile } from 'node:fs/promises';

// The guard measures Unicode code points, so the joke's length reflects
// characters as a reader encounters them. Bytes can count an emoji several
// times, and UTF-16 can count some emoji as two units despite their single appearance.
const JOKE = "My AI coding partner says 'I found the issue' like it didn't just write the issue five minutes ago.";
if (Array.from(JOKE).length === 0 || Array.from(JOKE).length > 280) {
  throw new Error('JOKE must contain between 1 and 280 Unicode code points');
}
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

await mkdir(outputDir, { recursive: true });
await writeFile(`${outputDir}/entry.txt`, JOKE, 'utf8');
