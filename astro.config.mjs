import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://joaquindicio.github.io",
  base: "/manglar-de-bagheera/",
  output: "server",
  adapter: netlify()
});