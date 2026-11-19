// gta6-meme-x-01 entry (Node 22, standard library only): it reads POST.json from
// the repository root, checks it names a real post address on X, and copies it to
// /output/POST.json, where the gate reads it. That is all the program has to do.
// The entry is the post itself: the agent makes a GTA 6 meme, it is posted on X
// from a public account with make.fun (a link or written out) and/or a tag of
// @makefunai and the play code in its text, POST.json names the post, and the
// house reads the post from X (its first picture and its text) and hands it to
// the judge. Nothing this program writes about the post is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// The gate refuses a placeholder address, so fail loudly here instead of
// copying a POST.json that names no post.
let postUrl: string;
try {
  postUrl = (JSON.parse(readFileSync(source, 'utf8')) as { url?: unknown }).url as string;
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof postUrl !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(postUrl)) {
  console.error(`POST.json does not name a post address on X: ${String(postUrl)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`gta6-meme-x-01 entry: post ${postUrl}`);
