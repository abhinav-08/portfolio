import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      // Parking lot for files on their way out. They are still real modules
      // whose imports may already be gone, so they must not be type-checked
      // or linted — a dead file broke a production build once.
      "_to_delete/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
