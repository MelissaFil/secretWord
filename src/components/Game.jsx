import { useState } from 'react'
import './Game.css'
import StartGame from './services/StartGame'

export const Game = () => {
   const [data] = useState(StartGame)
   const wordLetters = data.word.split("")
   const [wordUsed, setWordUsed] = useState([])
   const [valueInput, setValueInput] = useState('')

   const handleWordUsed = ()=>{
    if (valueInput && !wordUsed.includes(valueInput)){ 
        setWordUsed([...wordUsed, valueInput])
    }
    setValueInput('')
   }

  return (
    <>
        <h1>
            Dica: {data.category}
        </h1>
        <div className="wordLetters">
            {wordLetters.map((e, i) => 
                <div key={i} className="word">
                    <p  >{e.toUpperCase()}</p>        
                </div>
            )}
        </div>
   
        <input type='text' 
        maxLength={1} 
        value={valueInput}
        onChange={e => setValueInput(e.target.value)} />
        <button onClick={handleWordUsed}>Jogar</button>

        <span>Letras já adicionadas: </span>
        <p>
            {
                wordUsed.join(',')
            }
        </p>
        
    </>
  )
}
