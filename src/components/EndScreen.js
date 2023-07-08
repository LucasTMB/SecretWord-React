import './EndScreen.css';

const EndScreen = ({retryGame, score}) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retryGame}>Resetar jogo</button>
    </div>
  )
}

export default EndScreen