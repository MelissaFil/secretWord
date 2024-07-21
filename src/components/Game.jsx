import { useState } from 'react'
import './Game.css'
import { wordsList } from '../data/word'

export const Game = () => {
    const [words] = useState(wordsList)
  return (

    <div>
        {words.alimento.map(item => <p>{item} </p>)}
    </div>
  )
}
