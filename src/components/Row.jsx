import React from 'react'
import Cell from './Cell'
export default function Row(props) {
    return (
        <div className="row">
            {
                props.row.map((cell,index)=>{
                    return(
                        <Cell value={cell} key={index} onClick={()=>{props.onClick(props.rowIdx,index)}}/>
                    )
                })
            }
        </div>
    )
}
