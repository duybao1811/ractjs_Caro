import React from 'react'
import { useSelector } from 'react-redux';
export default function Info() {
    const { username1 } = useSelector(state => state.commonReducer)
    const { username2 } = useSelector(state => state.commonReducer)
    return (
        <div className="info">
            <p>
                {username1} <span>X</span>
            </p>
            <p>
                {username2} <span>O</span>
            </p>
        </div>
    )
}
