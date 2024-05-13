import PocketBase from 'pocketbase'

const pocketbaseService = new PocketBase(import.meta.env.VITE_PB_URL)
await pocketbaseService.admins.authWithPassword(
  import.meta.env.VITE_PB_USER,
  import.meta.env.VITE_PB_PASSWORD,
  {
    autoRefreshThreshold: 30 * 60
  }
)

export default pocketbaseService
