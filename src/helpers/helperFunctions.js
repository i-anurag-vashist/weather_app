// This file contains all constants we need through out the app.

import { weekDays, months } from './helperConstants'

export const getCurrentDate = () => {
  let  currentDate= new Date()
  let day = weekDays[currentDate.getDay()];
  let date = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

export const getWeatherIcon=(weather)=>{
  switch (weather) {
    case "Clouds":
      return "CLOUDY"

    case "Rain":
      return "RAIN"

    case "Snow":
      return "SNOW"

    case "Dust":
    case "Tornado":
      return "WIND"

    case "Drizzle":
      return "SLEET"

    case "Fog":
    case "Smoke":
      return "FOG"

    default:
      return "CLEAR DAY"
  }
}

export const getCoordinates=()=>{
  if (navigator.geolocation) {
    getUserCords()
      //If user allow location service then will fetch data & send it to get-weather function.
      .then((position) => {
        return  position.coords.latitude
      })
      .catch((err) => {
        //If user denied location service then standard location weather will le shown on basis of latitude & latitude.
        alert(
          "You have disabled location service. Allow 'This APP' to access your location. Your current location will be used for calculating Real time weather."
        );
        return 28.67
      });
  } else {
    alert("Geolocation not available");
  }
}

export const getUserCords=(options)=>{
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}