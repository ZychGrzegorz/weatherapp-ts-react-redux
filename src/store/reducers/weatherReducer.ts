import { GET_WEATHER, SET_ERROR, SET_LOADING } from "../actions";


const initialState: WeatherState = {
    data: null,
    loading: false,
    error: ''

}

export default  (
    state: WeatherState = initialState,
    action: WeatherAction
  ):WeatherState => {
    switch (action.type) {
              case GET_WEATHER:
                return{
                  data: action.payload,
                  loading: false,
                  error: ''
                }
              case SET_LOADING:
                return{
                  ...state,
                  loading: false,
                   }
              case SET_ERROR:
                return{
                  ...state,
                  error: action.payload,
                  loading: false,
                  }
      default:
        return state;
    }
  };