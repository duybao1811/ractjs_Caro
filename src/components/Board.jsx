import React from 'react'
import Row from './Row'
export default function Board(props) {
    return (
        <div className="board">
            {
                props.squares.map((row,index)=>{
                    return(
                        <Row row={row} onClick={props.onClick} rowIdx={index} key={index}/>
                    )
                })
            }
        </div>
    )
}

