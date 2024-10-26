// This file contains all API calls functions.

import axios from "axios";
import apiKeys from "./apiKeys";

export const getWeather = async (lat, lon) =>{
  const api_call = await fetch(
    `${apiKeys.base}weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKeys.key}`
  );
  const weatherDataObj = await api_call.json();
  return weatherDataObj
}

export const getInputCityWeather = async (city, query)=>{
  debugger
  await axios
    .get(
      `${apiKeys.base}weather?q=${city != "[object Object]" ? city : query
      }&units=metric&APPID=${apiKeys.key}`
    )
    .then((response) => {
      debugger
      return response.data
    })
    .catch(function (error) {
      console.log(error);
     
    });
}