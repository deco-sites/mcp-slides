import { defineConfig } from "$fresh/server.ts";
import { plugins } from "deco/plugins/deco.ts";
import manifest from "./manifest.gen.ts";
import { mcpServer } from "@deco/mcp";


export default defineConfig({
  plugins: plugins({
    manifest,
    // deno-lint-ignore no-explicit-any
    htmx: true,
    useServer: (deco, hono) => {
      // @ts-ignore i know what i'm doing
      hono.use("/*", mcpServer(deco));
    },
  }),
});
