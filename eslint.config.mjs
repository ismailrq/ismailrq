import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";
import hooks from "eslint-plugin-react-hooks";
import a11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  globalIgnores([".next/**", ".next-dev/**", "out/**", "build/**", "next-env.d.ts"]),
  { files: ["**/*.{ts,tsx}"], extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: { "react-hooks": hooks, "jsx-a11y": a11y },
    rules: { ...hooks.configs.recommended.rules, ...a11y.flatConfigs.recommended.rules } },
]);
