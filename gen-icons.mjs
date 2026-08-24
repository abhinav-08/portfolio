import * as si from 'simple-icons';
import fs from 'node:fs';

// Icons are extracted at authoring time into a plain TS map so the runtime has
// no dependency on simple-icons and the CSP stays locked to 'self'.
// Simple Icons artwork is CC0; the marks themselves remain their owners'
// trademarks and are used here nominatively to identify the technology.
const map = {
  elasticsearch: 'siElasticsearch',
  kafka: 'siApachekafka',
  redis: 'siRedis',
  mongodb: 'siMongodb',
  java: 'siOpenjdk',
  spring: 'siSpringboot',
  python: 'siPython',
  kubernetes: 'siKubernetes',
  docker: 'siDocker',
  git: 'siGit',
  otel: 'siOpentelemetry',
  gcloud: 'siGooglecloud',
  jenkins: 'siJenkins',
};

const out = {};
for (const [k, v] of Object.entries(map)) {
  const icon = si[v];
  if (!icon) throw new Error('missing ' + v);
  out[k] = icon.path;
}

const body = Object.entries(out)
  .map(([k, p]) => `  ${k}:\n    "${p}",`)
  .join('\n');

fs.writeFileSync(
  'lib/icon-paths.ts',
  `/**
 * GENERATED — do not edit by hand. Regenerate with \`node gen-icons.mjs\`
 * (requires the simple-icons devDependency).
 *
 * Single-path SVG glyphs on a 24x24 viewBox, extracted from Simple Icons
 * (CC0). The marks remain the trademarks of their respective owners and are
 * used here nominatively, to identify the technology.
 */
export const iconPaths: Record<string, string> = {
${body}
};
`,
);
console.log('wrote lib/icon-paths.ts with', Object.keys(out).length, 'icons');
