export function getAssetUrl(path) {
  if (!path) return ''
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
  return base + path
}
