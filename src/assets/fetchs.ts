import type { PromiseTypes } from "./types"

const Auth =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZlOGNmMGRmZmQ1NGI0ZmFmMTRlYzkzZjliOTViZCIsIm5iZiI6MTc3MTI4MjEzNC41NzIsInN1YiI6IjY5OTM5ZWQ2OTcxN2QwZGM5ZDA2NWE0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bbMQkik7cmt6uK6yP5WsuRlItQgQkkkeoH7ycPiJKAg"

const options: RequestInit = {
  headers: {
    Authorization: Auth,
  },
}

export const fetchFunction = async <T>({ apiLink }: PromiseTypes): Promise<T> => {
  try {
    const res = await fetch(apiLink, options)
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
