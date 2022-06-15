import { getWeather } from './getWeather.js';

window.onload = () => {
  randomWeather();
  initButton();
  weatherFormListener();
};

let city: string;
let units: 'metric' | 'fahrenheit' | 'imperial';
let lang: string;
lang = 'en';
let weatherObject: any;

interface Weather {
  desc: string;
  hour: number;
  maxTemp: string;
  minTemp: string;
  tempSens: string;
  humidity: string;
}

function initButton() {
  const Form = document.querySelector('#weatherForm') as HTMLFormElement | null;
  const WeatherFormDiv = document.querySelector(
    '#weatherFormDiv'
  ) as HTMLDivElement | null;
  if (Form) Form.remove();
  WeatherFormDiv.innerHTML = `
        <div id="weatherFormDiv">
          <button id="spawnForm">Check the weather somewhere</button>
        </div>
        `;
  weatherFormListener();
}

function weatherFormListener() {
  const WeatherFormDiv = document.querySelector(
    '#weatherFormDiv'
  ) as HTMLDivElement | null;
  const FormButton = document.querySelector(
    '#spawnForm'
  ) as HTMLButtonElement | null;

  FormButton.addEventListener('click', spawnForm());
  function spawnForm() {
    return () => {
      WeatherFormDiv.innerHTML = `
      <form id="weatherForm" onsubmit="return false">
        <input id="cityNameForm" type="text" name="city" placeholder="City">
        <select id="unitsForm">
          <option value="metric"> Metric (ºC) </option>
          <option value="fahrenheit"> Fahrenheit (ºF) </option>
          <option value="imperial"> Imperial (ºK) </option>
        </select>
        <button id="submitForm">Submit</button>
      </form>
      `;
      handleSubmitEvent();
    };
  }
  function handleSubmitEvent() {
    const City = document.querySelector(
      '#cityNameForm'
    ) as HTMLFormElement | null;
    const Units = document.querySelector(
      '#unitsForm'
    ) as HTMLFormElement | null;
    const SubmitButton = document.querySelector(
      '#submitForm'
    ) as HTMLButtonElement | null;
    SubmitButton.onclick = () => {
      if (
        /\w{2,20}/.test(City.value) &&
        /[Metric]|[Imperial]|[Fahrenheit]/.test(Units.value)
      ) {
        city = City.value;
        units = Units.value;
        let weatherObject = getWeather(city, units, lang);
        //as the fetch is too fast, the gif spawns and gets deleted too fast, so, I added a fake delay
        setTimeout(() => {
          drawWeather(weatherObject);
        }, 500);
        initButton();
      } else {
        alert('Bad input');
      }
    };
  }
}

function randomWeather() {
  let random = Math.floor(Math.random() * 10);
  units = 'metric';
  lang = 'en';
  if (random == 1 || random == 0) city = 'Barcelona';
  else if (random == 2 || random == 3) city = 'Baghdad';
  else if (random == 4 || random == 5) city = 'Cuenca';
  else if (random == 6 || random == 7) city = 'Milwaukee';
  else if (random > 7) city = 'Tokyo';
  console.log('random: ', random, city);

  let weatherObject = getWeather(city, units, lang);
  //as the fetch is too fast, the gif spawns and gets deleted too fast, so, I added a fake delay
  setTimeout(() => {
    drawWeather(weatherObject);
  }, 500);
}

// let weatherObject = getWeather(city, units, lang);
//https://www.flaticon.com/packs/weather-1001

async function drawWeather(weatherObject: Promise<Weather | undefined>) {
  const WeatherIcons = {
    rainy: '../src/icons/rain.png',
    snowy: '../src/icons/snow.png',
    dayThunderstorm: '../src/icons/day-thunderstorm.png',
    nightThunderstorm: '../src/icons/night-thunderstorm.png',
    fallingStar: '../src/icons/falling-star.png',
    clearNight: '../src/icons/clear-night.png',
    clearDay: '../src/icons/clear-day.png',
    cloudyDay: '../src/icons/cloudy-day.png',
    cloudyNight: '../src/icons/cloudy-night.png',
    eclipse: '../src/icons/eclipse.png',
  };
  let weatherDescr: string = (await weatherObject).desc;
  let weatherValues = {
    Max: (await weatherObject).maxTemp,
    min: (await weatherObject).minTemp,
    tempSen: (await weatherObject).tempSens,
    humid: (await weatherObject).humidity,
  };
  let weatherHour: number = (await weatherObject).hour;
  let imgSrc: string;
  //check for the type of weather and assign an image depending on the case
  if (weatherDescr.includes('rain')) {
    imgSrc = WeatherIcons.rainy;
  } else if (weatherDescr.includes('clouds')) {
    if (weatherHour > 20) imgSrc = WeatherIcons.cloudyNight;
    else imgSrc = WeatherIcons.cloudyDay;
  } else if (weatherDescr.includes('snow')) {
    imgSrc = WeatherIcons.snowy;
  } else if (weatherDescr.includes('thunder')) {
    if (weatherHour > 20) imgSrc = WeatherIcons.nightThunderstorm;
    else imgSrc = WeatherIcons.dayThunderstorm;
  } else if (weatherDescr.includes('clear')) {
    if (weatherHour > 20) imgSrc = WeatherIcons.clearNight;
    else imgSrc = WeatherIcons.clearDay;
  } else if (weatherDescr.includes('eclipse')) {
    imgSrc = WeatherIcons.eclipse;
  } else if (weatherDescr.includes('falling stars')) {
    imgSrc = WeatherIcons.fallingStar;
  }

  const WeatherDiv = document.querySelector(
    '#weatherReading'
  ) as HTMLImageElement | null;
  WeatherDiv.innerHTML = `
        <div id="currentWeatherDiv"></div>
        <img id="weatherIcon" src="" />
        <div id="currentWeatherValues"></div>
    `;
  const WeatherImgDom = document.querySelector(
    '#weatherIcon'
  ) as HTMLImageElement | null;
  const WeatherDescDom = document.querySelector(
    '#currentWeatherDiv'
  ) as HTMLTextAreaElement | null;
  const WeatherValDom = document.querySelector(
    '#currentWeatherValues'
  ) as HTMLTextAreaElement | null;

  if (
    WeatherDescDom != null &&
    WeatherImgDom != null &&
    WeatherValDom != null
  ) {
    WeatherDescDom.innerHTML = `
    <h3 id="currentCity"> ${city} </h3>
    <h3 id="currentWeatherDesc"> ${weatherDescr} </h3>
    `;
    WeatherImgDom.src = imgSrc;
    console.log(weatherValues);
    WeatherValDom.innerHTML = `
      <p>Max. Temperature: ${weatherValues.Max} </p>
      <p>min. Temperature: ${weatherValues.min} </p>
      <p>Thermic sensation: ${weatherValues.tempSen}</p>
      <p>Humidity: ${weatherValues.humid}</p>
    `;
  }
  console.log('returned object', await weatherObject);
}
