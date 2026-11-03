import PocketBase from 'pocketbase'

// The site only reads public collections and creates anonymous statistics: it never logs in,
// so no credential is ever shipped to the browser.
export const pb = new PocketBase(import.meta.env.VITE_PB_URL || 'http://127.0.0.1:8090')

// Several components may read the same collection at once; don't cancel each other.
pb.autoCancellation(false)

export function fileUrl(record, filename, thumb) {
  if (!record || !filename) return ''
  return pb.files.getURL(record, filename, thumb ? { thumb } : {})
}

/** "A3": the hall letter of the exhibitor's category followed by its booth number. */
export function standCode(exhibitor) {
  return `${exhibitor.expand?.category?.hall ?? '?'}${exhibitor.booth}`
}
