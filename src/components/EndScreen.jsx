const EndScreen = ({resetGame}) => {
  return (
    <div>
        <h1> GAME OVER </h1>
        <button onClick={resetGame}>Reiniciar</button>
    </div>
  )
}

export default EndScreen