import PocketBase from 'pocketbase'

let pocketbaseService = new PocketBase(import.meta.env.VITE_PB_URL)
try {
  await pocketbaseService.admins.authWithPassword(import.meta.env.VITE_PB_USER, import.meta.env.VITE_PB_PASSWORD, {
    autoRefreshThreshold: 30 * 60
  })
} catch {
  pocketbaseService = null
  console.log('Connection to pocketbase failed.')
}

export default pocketbaseService
