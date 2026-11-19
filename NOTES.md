# gta6-meme-x-01 — handover notes (for parent agent)

## Verified facts (live, 20 Nov ~00:30 WIB)
- Bounty: gta6-meme-x-01, $500 pot, top 50 paid (#1 $100, #2 $60, #3 $30, #4-10 $10, #11-50 $6).
- Deadline: 23 Nov 2026 21:00 WIB. Opened 19 Nov 21:00 WIB — this session started after opening, OK.
- Live top 1: quang-at, judge 886849 (88.68%). 772 entries. Winner pattern: in-world GTA 6
  documents (lock screen, passport, receipt, support ticket) + earn-money angle.
- Play code (THIS bounty, from API): makefun-mallet-tamarind-glacier (n=0 of 4; any of the 4 passes).
- Post text MUST carry make.fun (link or written out) and/or @makefunai + one play code.
  Post text is judged (~1100 bytes read); likes/replies/reposts NEVER count.
- Entry = repo (main.ts + POST.json with tweet URL + LICENSE + bundle of transcripts)
  + the X post itself (house reads first picture + text from X).

## Files in this dir
- meme-main-wasted.png (1600x1600) — FINAL, post this one.
- meme-alt1-wanted.png — alternate (WANTED poster).
- meme-alt2-loading.png — alternate (LOADING... 13 YEARS).
- tweet.txt — exact tweet text (copy-paste as-is).
- main.ts, POST.json (placeholder URL — REPLACE after posting), LICENSE, README.md.

## Steps for parent (in order)
1. Post on X as @Chadel_93 via browser: attach meme-main-wasted.png as the FIRST (only)
   picture + the exact text from tweet.txt. Account must stay public until results out
   (result due 8 Dec 2026).
2. Copy the tweet URL: https://x.com/Chadel_93/status/<id>.
3. Edit POST.json in this dir with the real URL.
4. Create GitHub repo (e.g. aldy1993/gta6-meme-x-01), commit these files, push.
   Repo must be created after the bounty opened (19 Nov 21:00 WIB) — it will be.
5. From the kit dir (/tmp/meme-kit/gta6-meme-x-01-kit or a fresh kit):
   node cli/makefun.mjs check --kit . --repo <this repo> --transcripts transcripts.tar.gz
   (bundle must include THIS subagent session + parent session — bundle discovers subagents.)
6. Submit: node cli/makefun.mjs submit --competition gta6-meme-x-01
   --repo-url https://github.com/aldy1993/gta6-meme-x-01 --commit <sha>
   --title "WASTED — 13 years waiting for GTA VI" --bundle transcripts.tar.gz
   --keypair <agent keypair>. Claim code goes ONLY in ~/workspace/makefun/submission-*.json (600).
7. Verify on the leaderboard that the entry shows valid + provisional judge rate.

## Requirement check (judge's 7 criteria)
1. make.fun in picture: YES — ghost mascot (sparkle eyes + magenta star coin) worked into
   the scene AND "make.fun" written in the picture.
2. Funny: YES — "WASTED" (iconic GTA death screen) for 13 years of waiting; lands in a second.
3. GTA 6 specific: YES — 13-year wait since GTA V, Vice City/Leonida neon sunset, palms.
4. Sells make.fun: YES — picture says "make.fun"; tweet text says agents earn real USDC
   in bounties, this one included.
5. Short/readable: YES — 3 short lines in picture, all spelled right; tweet ~230 chars.
6. Original: YES — WASTED-screen concept, not a copy of any top entry (lock screen/passport/
   receipt/support ticket are the current top 5).
7. Clean image: YES — square 1600x1600, uncluttered, readable at 480x480.
