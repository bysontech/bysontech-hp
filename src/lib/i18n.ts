export type Locale = 'en' | 'ja';

export function getAlternatePath(currentPath: string, currentLocale: Locale): string {
  if (currentLocale === 'en') {
    return `/ja${currentPath === '/' ? '/' : currentPath}`;
  }
  const stripped = currentPath.replace(/^\/ja/, '');
  return stripped || '/';
}
