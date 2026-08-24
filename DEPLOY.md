# Deploying to Cloudflare Pages

You have no domain yet, so this covers buying one too. Total time ~30 minutes,
most of it waiting for DNS.

**Cost:** a `.dev` domain is about $12–15/year at Cloudflare Registrar (they sell
at wholesale cost, no markup, no first-year-cheap-then-triple renewal trick).
Pages hosting is free at this scale — unlimited bandwidth, 500 builds/month.

---

## Step 0 — Push the code to GitHub

Pages can deploy from a Git repo (rebuilds on every push) or from a direct
upload. Git is worth the five minutes; you get automatic deploys and preview
URLs for branches.

```bash
cd portfolio
git init                      # already initialised by create-next-app
git add -A
git commit -m "Portfolio site from design handoff"
gh repo create abhinavtyagi08/portfolio --private --source=. --push
```

If you'd rather not use Git, skip to the "Direct upload" note in Step 2.

---

## Step 1 — Buy the domain

1. Sign in at <https://dash.cloudflare.com> (create a free account if needed).
2. **Domain Registration → Register Domain**.
3. Search for your name. Reasonable candidates, in the order I'd rank them:
   - `abhinavtyagi.dev` — `.dev` is on the HSTS preload list, so it is
     HTTPS-only by browser enforcement. Suits an engineer's site and matches
     the mono/serif wordmark.
   - `abhinavtyagi.com` — more universally recognised, likelier to be taken.
   - `abhinav.engineer`, `abhinavtyagi.io` — fine, `.io` is pricier (~$40+).
4. Complete checkout.

Buying at Cloudflare Registrar means the domain lands in your Cloudflare
account already on Cloudflare DNS — no nameserver migration, no propagation
wait. That's the main reason to buy it here rather than at Namecheap/GoDaddy.

> **If you buy elsewhere instead:** add the site in Cloudflare (Add a Site →
> Free plan), then change the nameservers at your registrar to the two
> Cloudflare gives you. Propagation is usually under an hour but the official
> window is 24h. Everything after this point is identical.

---

## Step 2 — Create the Pages project

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorise GitHub, pick the `portfolio` repo.
3. Build settings:

   | Field | Value |
   |---|---|
   | Framework preset | `Next.js (Static HTML Export)` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | *(leave blank)* |
   | Node version | add env var `NODE_VERSION` = `22` |

   The preset fills the first two in for you; verify the output directory says
   `out` and not `.next`. That is the single most common way this goes wrong.

4. **Save and Deploy.** First build takes ~2 minutes. You get a
   `portfolio-xxx.pages.dev` URL. Open it and confirm the site works before
   attaching your domain.

> **Direct upload alternative (no Git):** Workers & Pages → Create → Pages →
> Upload assets, then drag the `out/` folder in. You'll re-drag it on every
> change, and you lose preview deployments. Fine for a one-off, worse as a
> habit.

---

## Step 3 — Attach the custom domain

1. In the Pages project → **Custom domains → Set up a custom domain**.
2. Enter `abhinavtyagi.dev`. Cloudflare creates the DNS record itself because
   the domain is already in your account — nothing to type into a DNS panel.
3. Repeat for `www.abhinavtyagi.dev` if you want it; Cloudflare will serve both.
4. TLS certificate issues automatically, usually within a minute or two. The
   custom domain shows **Active** when it's live.

### Redirect www → apex (optional, recommended)

Pick one canonical hostname so search engines don't see two sites. Since
`lib/site.ts` sets `SITE_URL` to the apex, redirect www to it. Create
`public/_redirects` with:

```
https://www.abhinavtyagi.dev/* https://abhinavtyagi.dev/:splat 301!
```

Rebuild and push. (`_redirects` is copied into `out/` the same way `_headers`
is.)

---

## Step 4 — Set `SITE_URL` and rebuild

Open `lib/site.ts` and change:

```ts
export const SITE_URL = "https://abhinavtyagi.dev";
```

to whatever you actually bought. This feeds the canonical link, the OpenGraph
and Twitter card URLs, the JSON-LD `Person` schema, `robots.txt` and
`sitemap.xml`. Commit and push — Pages rebuilds automatically.

---

## What's already configured

`public/_headers` ships with the build and Cloudflare applies it at the edge:

- **Security headers** — HSTS with preload, `X-Content-Type-Options`,
  `Referrer-Policy`, `X-Frame-Options: DENY`, a `Permissions-Policy` denying
  camera/mic/geolocation, and a Content-Security-Policy locked to `'self'`.
  The CSP works because there are no third-party requests: fonts are
  self-hosted, images are local, there is no analytics script.
- **Caching** — `/_next/static/*` is immutable for a year (filenames are
  content-hashed), `/assets/*` revalidates daily with a week of
  stale-while-revalidate, and HTML always revalidates so a deploy is visible
  immediately.

If you later add analytics or any external script, you must widen the CSP
`script-src`/`connect-src` or the browser will silently block it. Cloudflare
Web Analytics is the easy option — it's free, cookieless, needs no banner, and
you enable it from the same dashboard (it injects its own beacon, so add
`https://static.cloudflareinsights.com` to `script-src` and
`https://cloudflareinsights.com` to `connect-src`).

---

## Post-launch checklist

- [ ] Open the live URL on a phone — check the hero portrait, the stacked
      experience cards and the hamburger sheet.
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse → Mobile). Expect ~95+ on
      Performance; LCP is the hero portrait, which is preloaded as WebP.
- [ ] Paste the URL into <https://www.opengraph.xyz> or LinkedIn's Post
      Inspector to confirm the OG card renders.
- [ ] Check `https://<domain>/robots.txt` and `/sitemap.xml` return the right
      hostname (they won't if you skipped Step 4).
- [ ] Submit the domain to Google Search Console → URL Inspection → Request
      indexing. Otherwise a brand-new domain can take weeks to appear.
- [ ] Confirm the résumé link downloads as `Abhinav_Tyagi_CV.pdf`.
- [ ] Swap the Instagram placeholders for real images (see README).

---

## Ongoing

Every `git push` to `main` triggers a rebuild and deploy, typically under two
minutes. Pushes to other branches get their own preview URL, so you can look at
a change on a real device before merging. Rollback is one click in the
Deployments tab — Cloudflare keeps every previous build.
