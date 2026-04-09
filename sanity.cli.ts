import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID || "q1u16tf6",
    dataset: process.env.SANITY_DATASET || "production",
  },
});
