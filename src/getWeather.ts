export { getWeather };

//api call with lat & lon
//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}
//api call with city query
//api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}

async function getWeather(city: string, units: string, lang: string) {
  // on call, makes the display screen a loading gif; when the function returns the object it is going to be drawn, so the gif will be deleted.
  const WeatherDisplay = document.querySelector(
    '#weatherReading'
  ) as HTMLDivElement | null;
  WeatherDisplay.innerHTML = `
    <img src="https://cutewallpaper.org/21/loading-gif-transparent-background/2-Methods-to-Recover-an-Unsaved-PowerPoint-File.gif">
  `;

  //api key is plain text but this is a free key for Open Weather  and I doubt anyone is going to be interested;
  //would be interesting to set up a .env and a proxy through heroku or something but that's not the point with this app
  const apiKey = 'ca6124368763b6357e43c99bc81a7779';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}&lang=${lang}`;
  //console.log(url);
  interface Weather {
    desc: string;
    hour: number;
    maxTemp: string;
    minTemp: string;
    tempSens: string;
    humidity: string;
  }

  try {
    let unitSign = () => {
      if (units == 'metric') return 'ºC';
      else if (units == 'imperial') return 'ºK';
      else if (units == 'fahrenheit') return 'ºF';
    };
    const response = await fetch(url, { mode: 'cors' });
    const responseJson = await response.json();
    const responseDate = new Date(responseJson.dt);
    console.log('response as json', responseJson);
    let currentWeather: Weather = {
      desc: responseJson.weather[0].description,
      hour: responseDate.getHours(),
      maxTemp: responseJson.main.temp_max + unitSign(),
      minTemp: responseJson.main.temp_min + unitSign(),
      tempSens: responseJson.main.feels_like + unitSign(),
      humidity: responseJson.main.humidity + '%',
    };
    console.log('pre-export object', currentWeather);
    return currentWeather;
  } catch (e) {
    console.log('ERROR:', e);
  }
}
