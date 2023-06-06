import './App.css'

import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
        <main>
            <h1>React App</h1>
            <section>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt='Image extracted using the first word' />}
            </section>
            <button onClick={handleClick}>get new fact</button>
            <Otro />
            <Otro />
        </main>
  )
}
