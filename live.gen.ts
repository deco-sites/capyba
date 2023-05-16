// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./functions/LoadGitHubRaw.ts";
import * as $$$$0 from "./routes/_app.tsx";
import * as $$$$$0 from "./islands/Menu.tsx";
import * as $$$$$1 from "./islands/MenuButton.tsx";
import * as $$$$$$$$0 from "./sections/Aside.tsx";
import * as $$$$$$$$1 from "./sections/CloseButton.tsx";
import * as $$$$$$$$2 from "./sections/Footer.tsx";
import * as $$$$$$$$3 from "./sections/Form.tsx";
import * as $$$$$$$$4 from "./sections/GetStarted.tsx";
import * as $$$$$$$$5 from "./sections/Head.tsx";
import * as $$$$$$$$6 from "./sections/Header.tsx";
import * as $live_middleware from "$live/routes/_middleware.ts";
import * as $live_workbench from "$live/routes/live/workbench.ts";
import * as $live_invoke from "$live/routes/live/invoke/index.ts";
import * as $live_editorData from "$live/routes/live/editorData.ts";
import * as $live_inspect from "$live/routes/live/inspect/[...block].ts";
import * as $live_meta from "$live/routes/live/_meta.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i1$0 from "$live/handlers/devPage.ts";
import * as i1$1 from "$live/handlers/fresh.ts";
import * as i1$2 from "$live/handlers/proxy.ts";
import * as i1$3 from "$live/handlers/router.ts";
import * as i1$4 from "$live/handlers/routesSelection.ts";
import * as i1$$0 from "$live/pages/LivePage.tsx";
import * as i1$$$0 from "$live/sections/PageInclude.tsx";
import * as i1$$$1 from "$live/sections/Slot.tsx";
import * as i1$$$2 from "$live/sections/UseSlot.tsx";
import * as i1$$$$0 from "$live/matchers/MatchAlways.ts";
import * as i1$$$$1 from "$live/matchers/MatchDate.ts";
import * as i1$$$$2 from "$live/matchers/MatchEnvironment.ts";
import * as i1$$$$3 from "$live/matchers/MatchHost.ts";
import * as i1$$$$4 from "$live/matchers/MatchMulti.ts";
import * as i1$$$$5 from "$live/matchers/MatchRandom.ts";
import * as i1$$$$6 from "$live/matchers/MatchSite.ts";
import * as i1$$$$7 from "$live/matchers/MatchUserAgent.ts";
import * as i1$$$$$0 from "$live/flags/audience.ts";
import * as i1$$$$$1 from "$live/flags/everyone.ts";

const manifest = {
  "functions": {
    "deco-sites/capyba/functions/LoadGitHubRaw.ts": $0,
  },
  "routes": {
    "./routes/_app.tsx": $$$$0,
    "./routes/_middleware.ts": $live_middleware,
    "./routes/[...catchall].tsx": $live_catchall,
    "./routes/index.tsx": $live_catchall,
    "./routes/live/_meta.ts": $live_meta,
    "./routes/live/editorData.ts": $live_editorData,
    "./routes/live/inspect/[...block].ts": $live_inspect,
    "./routes/live/invoke/index.ts": $live_invoke,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/live/workbench.ts": $live_workbench,
  },
  "islands": {
    "./islands/Menu.tsx": $$$$$0,
    "./islands/MenuButton.tsx": $$$$$1,
  },
  "sections": {
    "$live/sections/PageInclude.tsx": i1$$$0,
    "$live/sections/Slot.tsx": i1$$$1,
    "$live/sections/UseSlot.tsx": i1$$$2,
    "deco-sites/capyba/sections/Aside.tsx": $$$$$$$$0,
    "deco-sites/capyba/sections/CloseButton.tsx": $$$$$$$$1,
    "deco-sites/capyba/sections/Footer.tsx": $$$$$$$$2,
    "deco-sites/capyba/sections/Form.tsx": $$$$$$$$3,
    "deco-sites/capyba/sections/GetStarted.tsx": $$$$$$$$4,
    "deco-sites/capyba/sections/Head.tsx": $$$$$$$$5,
    "deco-sites/capyba/sections/Header.tsx": $$$$$$$$6,
  },
  "handlers": {
    "$live/handlers/devPage.ts": i1$0,
    "$live/handlers/fresh.ts": i1$1,
    "$live/handlers/proxy.ts": i1$2,
    "$live/handlers/router.ts": i1$3,
    "$live/handlers/routesSelection.ts": i1$4,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i1$$0,
  },
  "matchers": {
    "$live/matchers/MatchAlways.ts": i1$$$$0,
    "$live/matchers/MatchDate.ts": i1$$$$1,
    "$live/matchers/MatchEnvironment.ts": i1$$$$2,
    "$live/matchers/MatchHost.ts": i1$$$$3,
    "$live/matchers/MatchMulti.ts": i1$$$$4,
    "$live/matchers/MatchRandom.ts": i1$$$$5,
    "$live/matchers/MatchSite.ts": i1$$$$6,
    "$live/matchers/MatchUserAgent.ts": i1$$$$7,
  },
  "flags": {
    "$live/flags/audience.ts": i1$$$$$0,
    "$live/flags/everyone.ts": i1$$$$$1,
  },
  "config": config,
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest satisfies DecoManifest;
