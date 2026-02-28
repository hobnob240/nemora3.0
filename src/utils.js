export function createPageUrl(page) {
  const p = (page || '').toString().toLowerCase();
  if (p === 'home') return '/';
  return `/${p}`;
}
