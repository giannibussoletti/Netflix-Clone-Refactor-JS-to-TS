import type { PromiseTypes } from "./types"

export const fetchFunction = async <T>({ apiLink }: PromiseTypes): Promise<T> => {
  try {
    const res = await fetch(apiLink)
    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: T = await res.json()

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
