import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { SetDraw } from '../redux/action';
import { useSelector } from 'react-redux';
export default function Clock(props) {
    const { username1 } = useSelector(state => state.commonReducer)
    const { username2 } = useSelector(state => state.commonReducer)
    const limitTime = 20;
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!props.winner) {
            var timeIntervalID = setInterval(() => {
                setSecond(prevState => prevState + 1);
            }, 1000)

            return () => {
                clearInterval(timeIntervalID);
            };
        } else {
            alert(`winner: ${props.winner.val==="X" ? username1 : username2} Time: ${minute < 10 ? ("0" + minute).slice(-2) : minute}:${second < 10 ? ("0" + second).slice(-2) : second}`)
            window.location.reload()
        }
    }, [props.winner])
    useEffect(() => {
        if (second === 60) {
            setMinute(prevState => prevState + 1);
            setSecond(0)
        }
    }, [second])

    useEffect(() => {
        if (minute === limitTime) {
            dispatch(SetDraw(true))
        }
    }, [minute])

    return (
        <div className="clock">
            {
                `${minute < 10 ? ("0" + minute).slice(-2) : minute}:${second < 10 ? ("0" + second).slice(-2) : second}`
            }
        </div>
    )
}
