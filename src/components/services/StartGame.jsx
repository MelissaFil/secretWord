
import { wordsList } from "../../data/word"

const StartGame = () => {
  const data= Object.keys(wordsList)
  const category = data[Math.floor(Math.random() * data.length)]
  const word = wordsList[category][Math.floor(Math.random() * wordsList[category].length)].toLowerCase()
  
  console.log(category,word)
    return {category, word}
}

export default StartGame