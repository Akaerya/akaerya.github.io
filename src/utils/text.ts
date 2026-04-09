export function formatText(text: string): string {
  if (!text) return text;
  return text
    .replace(/\\n/g, "<br />")
    .replace(/\n/g, "<br />")
    .replace(/<unbreak>/g, "")
    .replace(/<\/unbreak>/g, "")
    .replace(/<\\unbreak>/g, "");
}
