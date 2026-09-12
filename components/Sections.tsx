import {
  archiveClosing,
  archiveIntro,
  archiveVideo,
  instagramTiles,
  lab,
  labClosing,
  labFeature,
  labIntro,
  notes,
  papers,
  skillGroups,
  skillsIntro,
} from "@/lib/content";
import { identity, socials } from "@/lib/site";
import Icon from "@/components/Icon";
import { num } from "@/lib/sections";

/** Outbound link props, in one place. */
const OUT = { target: "_blank", rel: "noopener noreferrer" } as const;

/**
 * A YouTube id from either a bare id or any of the URL shapes.
 *
 * `||`, not `??`: an empty string is a configured-but-blank value, and an
 * empty href reloads the page instead of navigating.
 */
function youtubeId(raw: string): string {
  const v = (raw || "").trim();
  return v.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/)?.[1] || v;
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
  const stack = labFeature.stack
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <section className="section" id="lab">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("lab")} — Lab
      </p>

      {/* Head and intro sit on one row so the section opens at full width
          instead of a headline with a column of air beside it. */}
      <div className="sechead" data-reveal="60">
        <h2 className="section__head sechead__title">
          Where I build things that don&rsquo;t have a brief yet
        </h2>
        <p className="sechead__intro">{labIntro}</p>
      </div>

      <div className="cellgrid feature" data-reveal="120">
        <div className="feature__main">
          <div className="feature__badges">
            <span className="status status--live">{labFeature.status}</span>
            <span className="feature__kicker">{labFeature.kicker}</span>
          </div>

          <div>
            <h3 className="feature__title">{labFeature.title}</h3>
            <p className="feature__blurb">{labFeature.blurb}</p>
          </div>

          <div>
            <p className="minilabel">How it connects</p>
            {/* Each arrow lives inside its own node's wrapper. As a sibling it
                would strand at the end of a wrapped row, pointing at nothing. */}
            <div className="chain">
              {labFeature.chain.map((n, i) => (
                <div className="chain__link" key={n.label}>
                  {i > 0 && (
                    <span className="chain__arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                  <div className={`chain__node${n.highlight ? " is-mcp" : ""}`}>
                    <span className="chain__label">{n.label}</span>
                    <span className="chain__sub">{n.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cellgrid captiles">
            {labFeature.capabilities.map((c) => (
              <div className="captile" key={c.title}>
                <p className="captile__title">{c.title}</p>
                <p className="captile__body">{c.body}</p>
              </div>
            ))}
          </div>

          <div className="stackchips">
            {stack.map((t) => (
              <span className="stackchip" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="session">
          <div className="session__bar">
            <span>Session</span>
            <span className="session__endpoint">{labFeature.endpoint}</span>
          </div>

          <div className="session__well">
            {labFeature.session.map((turn, i) => (
              <div className={`session__turn${i > 0 ? " is-later" : ""}`} key={turn.prompt}>
                <p className="session__prompt">
                  <span className="session__caret" aria-hidden="true">
                    ›
                  </span>
                  {turn.prompt}
                </p>

                <div className="session__out">
                  {turn.kind === "tool" ? (
                    <>
                      <p className="session__tool">{turn.tool}</p>
                      {turn.fields.map(([field, type]) => (
                        <p className="session__field" key={field}>
                          <span className="session__fieldname">{field}</span>
                          {type}
                        </p>
                      ))}
                      <p className="session__ack">{turn.ack}</p>
                    </>
                  ) : (
                    /* Prose, not mono: the agent replying in English rather
                       than in a hit array is the whole claim. */
                    <p className="session__answer">{turn.answer}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="minilabel">Tools exposed</p>
            <div className="toolgrid">
              {labFeature.tools.map((t) => (
                <span className="toolchip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="session__note">{labFeature.sessionNote}</p>
        </div>
      </div>

      <div className="cellgrid lab__grid" data-reveal="160">
        {lab.map((item) => (
          <div className="lab__cell" key={item.title}>
            <span className="status status--muted">{item.status}</span>
            <h4 className="lab__title">{item.title}</h4>
            <p className="lab__blurb">{item.blurb}</p>
          </div>
        ))}
      </div>

      <p className="section__note" data-reveal="200">
        {labClosing}
      </p>
    </section>
  );
}

/* ============================================================ ARCHIVE */

/** Shared opener for each of the three archive blocks. */
function BlockHead({
  label,
  qualifier,
  action,
  href,
}: {
  label: string;
  qualifier: string;
  action: string;
  href?: string;
}) {
  return (
    <div className="blockhead">
      <p className="blockhead__label">
        {label}
        <span className="blockhead__qualifier">{qualifier}</span>
      </p>
      {href ? (
        <a className="blockhead__action" href={href} {...OUT}>
          {action}
        </a>
      ) : (
        <span className="blockhead__count">{action}</span>
      )}
    </div>
  );
}

export function Archive() {
  const id = youtubeId(archiveVideo.id);
  const watch = id ? `https://www.youtube.com/watch?v=${id}` : identity.youtube;

  return (
    <section className="section" id="archive">
      <p className="eyebrow" data-reveal="0">
        <span className="rule-inline" aria-hidden="true" />
        {num("archive")} — Archive
      </p>

      <div className="sechead" data-reveal="60">
        <h2 className="section__head sechead__title">From the archive</h2>
        <p className="sechead__intro">{archiveIntro}</p>
      </div>

      {/* Three content types, three shapes, one language: numbered editorial
          rows for notes, bordered sheets for papers, a framed embed for video.
          A single card grid made all four items look like the same thing. */}
      <div className="block" data-reveal="100">
        <BlockHead
          label="Engineering notes"
          qualifier="on Medium"
          action="All posts ↗"
          href={identity.medium}
        />
        <div className="notes">
          {notes.map((n, i) => (
            <a className="note" key={n.href} href={n.href} {...OUT}>
              <span className="note__idx" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="note__body">
                <span className="note__title">{n.title}</span>
                <span className="note__summary">{n.summary}</span>
              </span>
              {/* The index moves into the meta line on narrow screens, where
                  a three-column row has nowhere to put it. */}
              <span className="note__meta" data-idx={String(i + 1).padStart(2, "0")}>
                {n.readMinutes} min · {n.year}
                <span className="note__arrow" aria-hidden="true">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="block" data-reveal="140">
        <BlockHead
          label="Published research"
          qualifier="peer reviewed"
          action={`${papers.length} ${papers.length === 1 ? "paper" : "papers"}`}
        />
        <div className="papers">
          {papers.map((p) => (
            <article className="paper" key={p.href}>
              <div className="paper__meta">
                <span className="paper__tag">Paper</span>
                <span className="paper__pages">
                  {p.year} · {p.pages} pp
                </span>
              </div>
              <h3 className="paper__title">{p.title}</h3>
              {/* Italic serif is what tells a paper from a blog row. */}
              <p className="paper__abstract">{p.abstract}</p>
              <div className="paper__foot">
                <span className="paper__fields">{p.fields}</span>
                <a className="readlink" href={p.href} {...OUT}>
                  Read paper ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="block" data-reveal="180">
        <BlockHead
          label="On video"
          qualifier="walkthrough"
          action="Watch on YouTube ↗"
          href={identity.youtube}
        />
        <div className="video">
          <div className="videoframe">
            <div className="videoframe__inner">
              {id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
                  title={archiveVideo.title}
                  allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <div className="videoframe__empty">
                  <span className="videoframe__play" aria-hidden="true">
                    ▶
                  </span>
                  <span>No video configured</span>
                </div>
              )}
            </div>
          </div>

          <div className="video__side">
            <p className="minilabel">YouTube · Demo</p>
            <h3 className="video__title">{archiveVideo.title}</h3>
            <p className="video__blurb">{archiveVideo.blurb}</p>
            <a className="readlink" href={watch} {...OUT}>
              Open in YouTube ↗
            </a>
          </div>
        </div>
      </div>

      <p className="section__note" data-reveal="220">
        {archiveClosing}
      </p>
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
