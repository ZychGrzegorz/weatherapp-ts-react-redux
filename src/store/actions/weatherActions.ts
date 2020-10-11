import {ThunkAction} from 'redux-thunk'
import {RootState} from '../store'
import { GET_WEATHER, SET_ERROR, SET_LOADING } from '../actions'

export const getWeather = (city: string): ThunkAction<void, RootState,null,WeatherAction>=>{
  //zwracana wartosc, state,extra argumenty np. dla kolejnych wewnetrznych funkcji, akcja bazowa (non-thunk)
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
            if (!res.ok){
                const resData:WeatherError=await res.json()
                throw new Error(resData.message)
            }
            const resData:WeatherData=await res.json()
            dispatch({type: GET_WEATHER, payload: resData})

        }
        catch (err){
            dispatch({
                type: SET_ERROR,
                payload:err.message
            })
        }
        
    }
}

export const setLoading = (): WeatherAction=>{
    return {   type: SET_LOADING, payload:''    }
}

export const setError = (): WeatherAction=>{
    return {   type: SET_ERROR, payload: ''    }
}