// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/admin/index.tsx";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/projects/index.tsx";
import * as $5 from "./routes/write-ups/[read].tsx";
import * as $6 from "./routes/write-ups/index.tsx";
import * as $$0 from "./islands/Input.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/admin/index.tsx": $2,
    "./routes/index.tsx": $3,
    "./routes/projects/index.tsx": $4,
    "./routes/write-ups/[read].tsx": $5,
    "./routes/write-ups/index.tsx": $6,
  },
  islands: {
    "./islands/Input.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
