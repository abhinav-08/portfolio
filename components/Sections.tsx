import {
  instagramTiles,
  lab,
  labClosing,
  skillGroups,
  skillsIntro,
  talks,
  writing,
  writingFootnote,
} from "@/lib/content";
import { config, identity, socials } from "@/lib/site";
import Icon from "@/components/Icon";
import { num } from "@/lib/sections";

/** Placeholder entries are hidden unless explicitly previewed. */
function visible<T extends { placeholder?: boolean }>(items: T[]): T[] {
  return config.showPlaceholders ? items : items.filter((i) => !i.placeholder);
}

/* ============================================================= SKILLS */

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("skills")} — Skills
      </p>
      <h2 className="section__head" data-reveal="60">
        The stack behind the work
      </h2>
      <p className="section__intro" data-reveal="100">
        {skillsIntro}
      </p>

      {skillGroups.map((group, gi) => (
        <div className="skills__group" key={group.label} data-reveal={120 + gi * 60}>
          <h3 className="skills__label">{group.label}</h3>
          <div className="cellgrid skills__grid">
            {group.items.map((s) => (
              <div className="skill" key={s.name}>
                <Icon name={s.icon} className="skill__icon" />
                <div className="skill__name">{s.name}</div>
                <div className="skill__note">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ================================================================ LAB */

export function Lab() {
  return (
    <section className="section" id="lab">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("lab")} — Lab
      </p>
      <h2 className="section__head" data-reveal="60">
        Where I build things that don&rsquo;t have a brief yet
      </h2>

      <div className="cellgrid lab__grid" data-reveal="120">
        {lab.map((item) => (
          <div className="lab__cell" key={item.title}>
            <span className="status">{item.status}</span>
            <h3 className="lab__title">{item.title}</h3>
            <p className="lab__blurb">{item.blurb}</p>
          </div>
        ))}
      </div>

      <p className="section__note" data-reveal="180">
        {labClosing}
      </p>
    </section>
  );
}

/* ============================================================ WRITING */

export function Writing() {
  const items = visible(writing);
  if (items.length === 0) return null;

  return (
    <section className="section" id="writing">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("writing")} — Writing
      </p>
      <h2 className="section__head" data-reveal="60">
        From the archive
      </h2>

      <div className="cellgrid writing__grid" data-reveal="120">
        {items.map((w, i) => (
          <a
            className="writing__cell"
            key={w.href + i}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="writing__meta">
              <span className="accent">{w.source}</span>
              <span aria-hidden="true"> · </span>
              {w.readTime}
              <span aria-hidden="true"> · </span>
              {w.year}
            </span>
            <h3 className="writing__title">{w.title}</h3>
            <p className="writing__excerpt">{w.excerpt}</p>
            <span className="writing__read">Read →</span>
          </a>
        ))}
      </div>

      <div className="section__bar" data-reveal="180">
        <span>{writingFootnote}</span>
        <a href={identity.medium} target="_blank" rel="noopener noreferrer" className="barlink">
          All writing on Medium ↗
        </a>
      </div>
    </section>
  );
}

/* ============================================================== TALKS */

export function Talks() {
  const items = visible(talks);
  if (items.length === 0) return null;

  return (
    <section className="section" id="talks">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("talks")} — Talks
      </p>
      <h2 className="section__head" data-reveal="60">
        On camera — talks, deep dives, tutorials
      </h2>

      <div className="cellgrid talks__grid" data-reveal="120">
        {items.map((t, i) => (
          <a
            className="talk"
            key={t.href + i}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="talk__thumb">
              {t.thumb ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.thumb} alt="" width={480} height={270} loading="lazy" />
              ) : null}
              <span className="talk__play" aria-hidden="true">
                ▶
              </span>
            </span>
            <span className="talk__body">
              <span className="talk__meta">
                {t.kind}
                <span aria-hidden="true"> · </span>
                {t.duration}
                <span aria-hidden="true"> · </span>
                {t.year}
              </span>
              <span className="talk__title">{t.title}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="section__bar" data-reveal="180">
        <span />
        <a href={identity.youtube} target="_blank" rel="noopener noreferrer" className="barlink">
          All videos on YouTube ↗
        </a>
      </div>
    </section>
  );
}

/* ========================================================== INSTAGRAM */

export function Instagram() {
  const tiles = [...instagramTiles, ...instagramTiles];

  return (
    <section className="section" id="instagram">
      <div className="ig__head" data-reveal="0">
        <div>
          <p className="eyebrow">
            <span className="rule-inline" aria-hidden="true" />
            {num("instagram")} — Elsewhere
          </p>
          <a
            className="ig__handle"
            href={identity.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            {identity.instagramHandle}
          </a>
        </div>
        <a
          className="ig__follow"
          href={identity.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow ↗
        </a>
      </div>

      <div className="ig__strip" data-reveal="80">
        <div className="ig__track">
          {tiles.map((t, i) => (
            <a
              className="ig__tile"
              key={`${t.src}-${i}`}
              href={identity.instagram}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={i < instagramTiles.length ? 0 : -1}
              aria-hidden={i >= instagramTiles.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.src} alt={t.alt} width={260} height={260} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================= FOOTER */

export function Footer() {
  return (
    <footer className="footer" id="hello">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("hello")} — Say hello
      </p>

      <a className="footer__headline" href={`mailto:${identity.email}`} data-reveal="80">
        Let&rsquo;s build something people can{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          <em>find</em>&nbsp;→
        </span>
      </a>

      <div className="footer__row" data-reveal="160">
        <div className="footer__links">
          {socials.map((s) => (
            <a
              key={s.label}
              className={`social-link${s.accent ? " social-link--accent" : ""}`}
              href={s.href}
              {...(s.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { download: "download" in s ? s.download : undefined })}
            >
              {s.label.toUpperCase()}
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <div>
            <a href={`mailto:${identity.email}`}>{identity.email}</a> ·{" "}
            <a href={`tel:${identity.phoneHref}`}>{identity.phone}</a>
          </div>
          <div>© {new Date().getFullYear()} — designed &amp; built by me, obviously</div>
        </div>
      </div>
    </footer>
  );
}
