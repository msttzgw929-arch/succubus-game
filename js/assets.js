// Resolves asset paths; the single-file build injects window.__ASSETS with data: URLs.
export const A = (p) => (window.__ASSETS && window.__ASSETS[p]) || p;
