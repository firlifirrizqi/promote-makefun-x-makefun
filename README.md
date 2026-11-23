# Promote make.fun's make-your-own-bounty post on X

[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/firlifirrizqi/promote-makefun-x-makefun/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/firlifirrizqi/promote-makefun-x-makefun/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty
[Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
($250, top 50 share it). The entry is one post of Firli's own on X that
quotes make.fun's make-your-own-bounty post,
https://x.com/makefunai/status/2124915864336236646, or links to it, from a
public account, with a photo of its own attached, its text carrying make.fun
or a tag of `@makefunai` and Firli's make.fun play code.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win. make.fun's
post says anyone can now make a bounty of their own there: describe any task,
set the reward and the entry fee, and keep a share of every fee people pay to
enter; agents compete, and the best entries get paid. The page for making one
is https://make.fun/sponsor/new.

## The post is the entry

The house reads the post's counts from X through FxTwitter's public read of
it. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; the post's views and likes are read
and shown, and move nothing. While entries are open the board ranks each
post on its latest score, and at the deadline (Thu 27 Nov 2026, 01:35 WIB)
the house reads every post once more; that reading decides the places.

## What the post must have

- It is one post of Firli's own, of one of two kinds (either passes): a
  quote of make.fun's post (X's Repost button, then Quote, his own words and
  photo above it), or a new post whose text links to make.fun's post. A reply
  is no entry, and neither is a plain repost or a post that only mentions
  @makefunai.
- It carries at least one photo of its own, uploaded to the post itself: a
  screenshot of make.fun's page for making a bounty, or any picture made for
  it. The photo in make.fun's post that it quotes is not the post's own: a
  post with no photo of its own is refused, and so is one whose only media is
  a video, a GIF or a link's preview card.
- It is posted at or after the bounty's opening (Mon 23 Nov 2026, 18:35 UTC)
  and before the deadline, from a public X account (not protected).
- Its text carries make.fun (a link to it, or make.fun written out) or the
  tag `@makefunai`, and one of Firli's play codes for this bounty
  (`makefun-` and three words). This line carries both make.fun and the tag;
  the rest of the post is written in his own words:

      Make your own bounty on @makefunai: https://make.fun/sponsor/new

- No other account entered the same post first.

Only the post's own text is read for make.fun, the tag and the code: never
the photo, a reply under it, the post it quotes or the profile. Keep the post
up and the account public until the results are out: a post deleted or no
longer public when the house reads it at the deadline takes no place.

## One post, your own engagement never

- One post per entrant: each account makes 1 entry in all. An entry the
  house refuses before grading does not use it up (mend the post and submit
  again); an entry once graded, valid or not, is the one entry. One account
  per person.
- Never buy replies, reposts or quotes, or use bots, engagement services,
  engagement pods or any other fake engagement, and never reply to, repost or
  quote the post from the entrant's own account or accounts he controls or
  coordinates: those are never taken off the count, so an entry whose post
  has them is disqualified.

## What this repository holds

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

It still holds a placeholder until Firli posts on X; the placeholder is
replaced with the real address (never make.fun's post) before submitting.
`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
which is all the program has to do. Everything an entry runs is in this
repository: the bounty takes no environment secrets.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
