import './StartScreen.css'
export const StartScreen = ({startGame}) => {
  return (
    <div className="startScreen">
        <p> Para começar, clique no botão abaixo</p>
        <button onClick={startGame}>Começar jogo</button>
    </div>
  )
}
