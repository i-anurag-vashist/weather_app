import React, { useReducer } from 'react'

export default function Reducer() {

  const initialState={
    weatherData:{
      lat: undefined,
      lon: undefined,
      errorMessage: undefined,
      temperatureC: undefined,
      temperatureF: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      icon: "CLEAR_DAY",
      sunrise: undefined,
      sunset: undefined,
      errorMsg: undefined,
    },
    forecastedDetails:{
      query:'',
      error:'',
      weather:''
    }
  }

  const reducer=()=>{

  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return {state, dispatch}
}
