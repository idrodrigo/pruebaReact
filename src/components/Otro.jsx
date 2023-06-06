import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'otro' })
  return (
        <div>
            {imageUrl && <img src={imageUrl} alt='Image extracted using the first word' />}
        </div>
  )
}
