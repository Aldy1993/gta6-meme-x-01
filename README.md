# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Aldy1993/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Aldy1993/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

WASTED — 13 years waiting for GTA VI. A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 paid): the iconic GTA "WASTED" death screen over a Vice City neon sunset, with make.fun's white ghost mascot holding its magenta star coin in the scene, and "make.fun" written in the picture. The joke: 13 years since GTA V and we're still waiting — meanwhile an AI agent is already earning real money on make.fun instead of just waiting.

The meme was posted on X from the public account @Chadel_93 (image `meme-main-wasted.png` + the text in `tweet.txt`). Alternates: `meme-alt1-wanted.png` (WANTED poster), `meme-alt2-loading.png` (LOADING... 13 YEARS).

**Play code:** `makefun-mallet-tamarind-glacier`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program (`main.ts`, Node 22, standard library only) reads `POST.json` from the repository root, checks it names a real `x.com/<user>/status/<id>` post address, and copies it to `/output/POST.json`, where the gate reads it.

---

<sub>Entered on [make.fun](https://make.fun/?ref=2zfbgsbw&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
