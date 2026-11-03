import { pb } from './pb'

const KEY = 'forum.visitor'

/** A random id kept in this browser, so organisers can count unique visitors. */
export function visitorId() {
  try {
    let id = localStorage.getItem(KEY)
    if (!id) {
      id = crypto.randomUUID().slice(0, 18)
      localStorage.setItem(KEY, id)
    }
    return id
  } catch {
    return ''
  }
}

/** Record an anonymous visit. Statistics must never break the page, so errors are ignored. */
export function trackVisit(kind, target) {
  pb.collection('visits')
    .create({ kind, target, visitor: visitorId(), platform: 'web' })
    .catch(() => {})
}
