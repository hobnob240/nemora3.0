// Simple route helper used throughout the project
export function createPageUrl(pageName) {
  const routes = {
    Home: '/',
    About: '/about',
    Work: '/work',
    Services: '/services',
    Contact: '/contact',
  };

  return routes[pageName] || '/';
}
