import { useState } from 'react'
import './App.css'
import { StartScreen } from './components/StartScreen'


const stages = [
  {id:1, name:'start'},
  {id:2, name:'game'},
  {id:3, name:'end'},
]

function App() {

  const [currentStage, setCurrentStage] = useState(stages[0].name)

  return (
    <div className='App'> 

      <h1>Secret Word</h1>
      {currentStage === 'start' && <StartScreen />}

    </div> 
  )
}

export default App
