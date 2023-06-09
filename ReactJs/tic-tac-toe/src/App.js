import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    };
}

handleClick(index) {
  if (this.state.board[index] === null && !this.state.winner) {
    const newBoard = [...this.state.board];
    newBoard[index] = this.state.currentPlayer;
    const newPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X';
    this.setState({
      board: newBoard,
      currentPlayer: newPlayer,
      winner: this.checkWinner(newBoard)
    });
  }
}

checkWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(cell => cell !== null)) {
    return 'draw';
  }

  return null;
}


render() {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {this.state.board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => this.handleClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {this.state.winner && (
        <div className="message">
          {this.state.winner === 'draw' ? 'It\'s a draw!' : `Player ${this.state.winner} wins!`}
        </div>
      )}
    </div>
  );
}
}

export default App;