import {GAME_STATUS} from '../constants/common.constants'
import {USER} from '../constants/common.constants'

export const SetDraw = (isDraw) => {
    return {
        type: GAME_STATUS.SET_DRAW,
        payload: isDraw
    }
}

export const SetUsername1 = (username) => {
    return {
        type: USER.SET_USERNAME1,
        payload: username
    }
}

export const SetUsername2 = (username) => {
    return {
        type: USER.SET_USERNAME2,
        payload: username
    }
}