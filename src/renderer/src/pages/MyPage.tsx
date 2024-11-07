import React, { useEffect } from 'react'

export const MyPage = () => {
  useEffect(() => {
    window.context.hello()
  }, [])

  return <div>MyPage</div>
}
