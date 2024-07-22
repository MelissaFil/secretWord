import { useState } from 'react'
import './App.css'
import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import EndScreen from './components/EndScreen'


const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'end'},
]

function App() {

  const [currentStage, setCurrentStage] = useState(stages[0].name)

  const startGame = ()=>{
    
    setCurrentStage(stages[1].name)
  }

  const gameOver = ()=>{
    setCurrentStage(stages[2].name)
  }

  const resetGame = ()=>{
    setCurrentStage(stages[0].name)
  }
  return (
    <div className='App'> 

      <h1>Secret Word</h1>

      {currentStage === 'start' && <StartScreen startGame={startGame}/>}

      {currentStage === 'game' && <Game gameOver={gameOver} />}

      {currentStage === 'end' && <EndScreen resetGame={resetGame} />}

    </div> 
  )
}

export default App
