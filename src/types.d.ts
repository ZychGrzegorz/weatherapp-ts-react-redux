//____________________________


type Task = {
    title?: string;
    description?: string;
    status: boolean;
  };

type Weather = {
    description: string,
    icon: string,
    id: number,
    main: string,
}
type WeatherData = {
    base: string,
    clouds:{
        all:number
    }
    cod: number,
    coord:{
        lon: number,
        lat:number
    },
    dt: number,
    id: number,
    main:{
        feels_like: number,
        humidity: number,
        pressure: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    }
    ,
    name: string;
    sys:{
        country: string,
        id: number,
        sunrise: number,
        sunset:number,
        type:number,
    }
    timezone:number,
    visibility: number,
    weather: Weather[]
    wind:{
        speed: number,
        deg: number,

    }

}
type WeatherError={
    cod: string,
    message: string,
}
type WeatherState={
    data: WeatherData | null,
    loading: boolean,
    error: string;

}
type GetWeatherAction={
    type: typeof import('./store/actions').GET_WEATHER;
    payload: WeatherData;
}
type SetLoadingAction={
    type: typeof import('./store/actions').SET_LOADING;
    payload: string
}
type SetErrorAction={
    type: typeof import('./store/actions').SET_ERROR,
    payload:string
}
 type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction

type AlertAction={
    type: typeof import('./store/actions').SET_ALERT;
    payload: string;
}
type AlertState={
    message: string;
}

