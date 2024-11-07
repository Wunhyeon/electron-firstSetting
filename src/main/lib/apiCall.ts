import { GET_HELLO } from '@shared/constants'

export const hello = async () => {
  const resp = await fetch(GET_HELLO, {})

  //   return await resp.json()
}
