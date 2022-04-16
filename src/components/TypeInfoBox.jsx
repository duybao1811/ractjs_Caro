import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { SetUsername1,SetUsername2 } from '../redux/action';
export default function TypeInfoBox() {
    const [username1, setUsername1] = useState('')
    const [username2, setUsername2] = useState('')

    const dispatch = useDispatch();

  const handleChangeUsername1 = (e) =>{
        setUsername1(e.target.value)
    }


    const handleChangeUsername2 = (e) =>{
        setUsername2(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(SetUsername1(username1))
        dispatch(SetUsername2(username2))
    }

    return (
        <div className="info-box">
            <input type="text" id="username1" placeholder="Username 1" value={username1} onChange={handleChangeUsername1}/>
            <input type="text" id="username2" placeholder="Username 2" value={username2} onChange={handleChangeUsername2}/>

            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
