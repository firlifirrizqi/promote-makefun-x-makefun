// Entry program for post-x-promote-make-your-own-bounty-01 (Node 22, standard
// library only). The entry itself is Firli's own post on X quoting
// make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646); this program only
// hands the post's address to the house by copying POST.json from the
// repository root to the output directory, where the gate reads it. The
// house reads the post's replies, reposts and quotes from X itself, so
// nothing this program writes about the post is scored. It takes no
// environment secrets and makes no network requests: everything it needs
// is the POST.json file shipped in this repository.
//
// POST.json still holds the placeholder address until Firli posts on X and
// the real address is written in; the gate refuses the placeholder on
// purpose, so the entry must not be submitted before that.
//
// Local run, the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader's sandbox the repository sits at /bot and the output
// goes to /output; the two environment variables stand in for those paths
// when the program is run locally.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
