import { useState } from 'react'
import './App.css'
import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'


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

  return (
    <div className='App'> 

      <h1>Secret Word</h1>
      {currentStage === 'start' && <StartScreen startGame={startGame}/>}
      {currentStage === 'game' && <Game />}
    </div> 
  )
}

export default App
