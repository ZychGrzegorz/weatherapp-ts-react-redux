import { SET_ALERT } from "../actions"

export const setAlert = (message:string): AlertAction=>{
    return {   type: SET_ALERT, payload: message    }
}