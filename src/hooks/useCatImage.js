import { useEffect, useState } from 'react'

const CAT_PREFIX_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstLetter = fact.split(' ', 1).join(' ')
    console.log(firstLetter)

    fetch(`https://cataas.com/cat/says/${firstLetter}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        console.log(url)
        setImageUrl(`${CAT_PREFIX_URL}${url}`)
      })
  }, [fact])

  return { imageUrl }
} // { imageUrl: 'https://cataas.com/cat/says/${first}?size=50&color=red&json=true'}
