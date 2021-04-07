import useSWR from 'swr'
import api from '../services/api'

export function perfilFetch(url) {
  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url)

    return response.data
  })
  return { data, error }
}
