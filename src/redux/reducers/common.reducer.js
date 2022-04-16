import { GAME_STATUS } from '../constants/common.constants'
import { USER } from '../constants/common.constants'

const initState = {
    isDraw: false,
    username1: '',
    username2: '',
}

export const commonReducer = (state=initState,action)=>{
    switch(action.type){
        case GAME_STATUS.SET_DRAW:{
            state.isDraw=action.payload;
            return {...state}
        }
        case USER.SET_USERNAME1:{
            state.username1= action.payload;
            return {...state}
        }
        case USER.SET_USERNAME2: {
            state.username2 = action.payload;
            return { ...state }
        }
        default:
            return { ...state }
    }
}