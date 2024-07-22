import { useEffect, useState } from 'react'
import './Game.css'
import StartGame from './services/StartGame'

export const Game = ({gameOver}) => {

   const [data, setData] = useState(StartGame)
   const wordLetters = data.word.split("")

   const [letterUsed, setletterUsed] = useState([])
   const [valueInput, setValueInput] = useState('')

   const [correctLetter, setCorrectLetter] = useState([])
   const [life, setLife] = useState(3)
   const [score, setScore] = useState(0)

   const handleLetters = ()=>{
   //caso exista, verifica se o valor de input já foi usado
    if (valueInput && !letterUsed.includes(valueInput)){ 

        // caso não tenha sido usado adiciona no array de letras usadas
        setletterUsed([...letterUsed, valueInput])
        
        //verifica se essa letra está inclusa na palavra sorteada
        //caso inclua, coloca no array de letras corretas pra ferificar
        // se a opacity vai ser 0 ou 1, caso não, retira uma vida do jogador

        if(wordLetters.includes(valueInput)){ 

            setCorrectLetter([...correctLetter, valueInput])
            setScore(score + 100)

            //verifica se ainda tem alguma letra da palavra que não foi digitada

            let missing = wordLetters.filter(letter =>  !correctLetter.includes(letter) && letter !== valueInput)
           
            if(missing.length === 0){
                //sorteia uma nova palavra
                setData(StartGame)
                //reinicia a contagem letrar utilizadas
                setCorrectLetter([])
                setletterUsed([])
            }

        }else{
            setLife(life - 1)
        }

    }
     // após todas as verificações, limpa o input
    setValueInput('')


   }

   // monitorando a mudança de estado da variável life
   useEffect(()=>{
    //caso eu perca a 3 vidas, ele muda o stage pra end com gameOver()
        if(life<=0){
            gameOver()
        }
   }, [life])

  return (
    <>
        <h1>
            Dica: {data.category}
        </h1>
        <span>Você tem {life} tentativas</span>
        <h2>Score: {score} </h2>
        <div className="wordLetters">
            {wordLetters.map((e, i) => 
                <div key={i} className="word">
                    {/* se a letra estiver na lista de letras corretas digitadas
                    pelo usuário, ele não coloca a classe que zera a opacidade */}
                   
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
