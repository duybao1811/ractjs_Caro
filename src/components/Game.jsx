import React, { useState, useEffect } from 'react'
import Board from './Board'
import Clock from './Clock'
import Info from './Info'
import { useSelector } from 'react-redux';
import { calculateWinner } from '../calculateWinner'

import TypeInfoBox from './TypeInfoBox'
export default function Game() {
    const { isDraw } = useSelector(state => state.commonReducer)
    const { username1 } = useSelector(state => state.commonReducer)
    const { username2 } = useSelector(state => state.commonReducer)
    const [defaultHeight, setDefaultHeight] = useState(30)
    const [defaultWidth, setDefaultWidth] = useState(30)
   const [numChecked, setNumChecked] = useState(0)
    var arr = new Array(defaultHeight)

    for (let i = 0; i < defaultHeight; i++) {
        arr[i] = Array(defaultWidth).fill(null);
    }


    const [board, setBoard] = useState(arr)
    const [xIsNext, setXIsNext] = useState(true)

    useEffect(() => {
        if (isDraw) {
            alert("Hòa")
            window.location.reload();
        }
    }, [isDraw])

    
    const winner = calculateWinner(board)

    const handleClick = (i, j) => {
        const boardCopy = [...board]
        if (boardCopy[i][j] || isDraw || winner) {
            return;
        }

        boardCopy[i][j] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)

        setNumChecked(prevState=>prevState + 1)
    }
    let status;

    if (winner) {
        status = 'Winner: ' + winner.val;
    } else {
        status = 'Next player: ' + (xIsNext ? `${username1} X` : `${username2} O`);
    }

    return (
        <div>
            {
                !username1 ? <TypeInfoBox /> : <div className="game"><div className="game-info-container">
                    <Clock winner={winner} />
                    <p>{status}</p>
                    <Info />
                </div>
                    <Board squares={board} onClick={handleClick} /></div>
            }
        </div>
    )
}


