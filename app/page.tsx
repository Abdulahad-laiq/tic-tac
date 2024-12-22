'use client';

import React, { useState } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 grid, initially all empty
  const [isXNext, setIsXNext] = useState(true); // 'X' plays first
  const [winner, setWinner] = useState<string | null>(null); // winner state

  const checkWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return; // Don't allow clicks after game over or on already filled cells
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const renderSquare = (index: number) => (
    <button
      className="square"
      onClick={() => handleClick(index)}
      style={{
        width: '60px',
        height: '60px',
        margin: '5px',
        fontSize: '24px',
        backgroundColor: '#f0f0f0',
        border: '1px solid #ccc',
      }}
    >
      {board[index]}
    </button>
  );

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Tic-Tac-Toe</h1>
      {winner ? <h2>Winner: {winner}</h2> : <h2>Next Player: {isXNext ? 'X' : 'O'}</h2>}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div style={{ display: 'flex' }}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div style={{ display: 'flex' }}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      {winner && (
        <button
          onClick={restartGame}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
