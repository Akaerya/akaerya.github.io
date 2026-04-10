import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";

export default defineConfig({
  projectId: "q1u16tf6",
  dataset: "production",
  plugins: [structureTool()],
  schema,
});
