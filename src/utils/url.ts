export const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function url(path: string) {
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getImageUrl(path: string): string {
  let formattedPath = path.replace(/\.png$/, ".webp");
  const lastSlashIndex = formattedPath.lastIndexOf('/');
  
  // Lowercase before the last slash
  if (lastSlashIndex !== -1) {
    const directory = formattedPath.slice(0, lastSlashIndex).toLowerCase();
    const filename = formattedPath.slice(lastSlashIndex);
    formattedPath = directory + filename;
  }
  
  return `https://raw.githubusercontent.com/FortOfFans/HSR/main/${formattedPath}`;
}
