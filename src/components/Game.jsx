import { useEffect, useState } from 'react'
import './Game.css'
import StartGame from './services/StartGame'

export const Game = ({gameOver}) => {

   const [data] = useState(StartGame)
   const wordLetters = data.word.split("")

   const [letterUsed, setletterUsed] = useState([])
   const [valueInput, setValueInput] = useState('')

   const [correctLetter, setCorrectLetter] = useState([])
    const [life, setLife] = useState(3)

   const handleLetters = ()=>{
   //caso exista, verifica se o valor de input já foi usado
    if (valueInput && !letterUsed.includes(valueInput)){ 

        // caso não tenha sido usado adiciona no array de letras usadas
        setletterUsed([...letterUsed, valueInput])
        
        //verifica se essa letra está inclusa na palavra sorteada
        //caso inclua, coloca no array de letras corretas pra ferificar
        // se a opacity vai ser 0 ou 1
        wordLetters.includes(valueInput)? 
        setCorrectLetter([...correctLetter, valueInput]):
        setLife(life - 1)
    }
     
    setValueInput('')


   }

   useEffect(()=>{
        if(life<=0){
            gameOver()
        }
   })

  return (
    <>
        <h1>
            Dica: {data.category}
        </h1>
        <span>Você tem {life} tentativas</span>
        <div className="wordLetters">
            {wordLetters.map((e, i) => 
                <div key={i} className="word">
                    <p className={correctLetter.includes(e)? '': 'opacity0'} >
                        {e.toUpperCase()}
                    </p>        
                </div>
            )}
        </div>
   
        <input type='text' 
        maxLength={1} 
        value={valueInput}
        onChange={e => setValueInput(e.target.value)} />
        <button onClick={handleLetters}>Jogar</button>

        <span>Letras já adicionadas: </span>
        <p>
            {
                letterUsed.join(',')
            }
        </p>
        
    </>
  )
}
