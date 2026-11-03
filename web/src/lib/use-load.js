import { ref, watchEffect } from 'vue'

/**
 * Reactive loading: re-runs `load` whenever the reactive values it reads change, and ignores
 * answers that arrive after a newer call.
 */
export function useLoad(load) {
  const data = ref(null)
  const error = ref('')
  const loading = ref(true)
  let call = 0

  watchEffect(() => {
    const id = ++call
    loading.value = true
    error.value = ''
    Promise.resolve(load())
      .then((value) => {
        if (id === call) data.value = value
      })
      .catch((err) => {
        if (id !== call) return
        // PocketBase reports status 0 when the request never reached the server.
        error.value =
          err?.status === 404
            ? "Cette page n'existe pas ou a été retirée."
            : err?.status === 0
              ? 'Le serveur du forum ne répond pas. Vérifie ta connexion et recharge la page.'
              : `Le contenu n'a pas pu être chargé (erreur ${err?.status ?? 'inconnue'}). Recharge la page.`
      })
      .finally(() => {
        if (id === call) loading.value = false
      })
  })

  return { data, error, loading }
}

export const HALL_COLORS = {
  A: 'var(--hall-a)',
  B: 'var(--hall-b)',
  C: 'var(--hall-c)',
  D: 'var(--hall-d)',
  E: 'var(--hall-e)',
}
