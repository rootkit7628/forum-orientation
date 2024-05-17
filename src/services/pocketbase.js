import PocketBase from 'pocketbase'

async function pocketbaseService() {
  let service = new PocketBase(import.meta.env.VITE_PB_URL)
  try {
    return await service.admins.authWithPassword(import.meta.env.VITE_PB_USER, import.meta.env.VITE_PB_PASSWORD, {
      autoRefreshThreshold: 30 * 60
    })
  } catch {
    console.log('Connection to pocketbase failed.')
    return null
  }
}

export default pocketbaseService
