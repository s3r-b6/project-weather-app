/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getWeather.ts":
/*!***************************!*\
  !*** ./src/getWeather.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

//api call with lat & lon
//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}
//api call with city query
//api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}
function getWeather(city, units, lang) {
    return __awaiter(this, void 0, void 0, function* () {
        // on call, makes the display screen a loading gif; when the function returns the object it is going to be drawn, so the gif will be deleted.
        const WeatherDisplay = document.querySelector('#weatherReading');
        WeatherDisplay.innerHTML = `
    <img id="loadingIcon" src="https://cdn-icons-png.flaticon.com/512/7782/7782896.png">
  `;
        //api key is plain text but this is a free key for Open Weather  and I doubt anyone is going to be interested;
        //would be interesting to set up a .env and a proxy through heroku or something but that's not the point with this app
        const apiKey = 'ca6124368763b6357e43c99bc81a7779';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}&lang=${lang}`;
        let unitSign = () => {
            if (units == 'metric')
                return 'ºC';
            else if (units == 'imperial')
                return 'ºK';
            else if (units == 'fahrenheit')
                return 'ºF';
        };
        const response = yield fetch(url, { mode: 'cors' });
        const responseJson = yield response.json();
        if (responseJson.cod != '200') {
            WeatherDisplay.innerHTML = `
    <img id="errorIcon" src="https://cdn-icons-png.flaticon.com/512/2001/2001386.png">
    <p id="errorCode">${responseJson.cod}</p>
    <p id="errorMsg">${responseJson.message}</p>
  `;
            //console.log('ERROR:', responseJson);
            return responseJson;
        }
        else {
            const responseDate = new Date(responseJson.dt);
            //console.log(response);
            //console.log('response as json', responseJson);
            let currentWeather = {
                desc: responseJson.weather[0].description,
                hour: responseDate.getHours(),
                maxTemp: responseJson.main.temp_max + unitSign(),
                minTemp: responseJson.main.temp_min + unitSign(),
                tempSens: responseJson.main.feels_like + unitSign(),
                humidity: responseJson.main.humidity + '%',
            };
            //console.log('pre-export object', currentWeather);
            return currentWeather;
        }
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

window.onload = () => {
    randomWeather();
    initButton();
    weatherFormListener();
};
let city;
let units;
let lang = 'en';
function initButton() {
    const Form = document.querySelector('#weatherForm');
    const WeatherFormDiv = document.querySelector('#weatherFormDiv');
    if (Form)
        Form.remove();
    WeatherFormDiv.innerHTML = `
        <div id="weatherFormDiv">
          <button id="spawnForm">Check the weather somewhere else</button>
        </div>
        `;
    weatherFormListener();
}
function weatherFormListener() {
    const WeatherFormDiv = document.querySelector('#weatherFormDiv');
    const FormButton = document.querySelector('#spawnForm');
    FormButton.addEventListener('click', spawnForm());
    function spawnForm() {
        return () => {
            WeatherFormDiv.innerHTML = `
      <form id="weatherForm" onsubmit="return false">
        <input autocomplete="off" required minlength="2" maxlength="40" id="cityNameForm" type="text" name="city" placeholder="City">
        <select required id="unitsForm">
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
        const City = document.querySelector('#cityNameForm');
        const Units = document.querySelector('#unitsForm');
        const SubmitButton = document.querySelector('#submitForm');
        SubmitButton.onclick = () => {
            if (/\w{2,40}/.test(City.value) &&
                /[Metric]|[Imperial]|[Fahrenheit]/.test(Units.value)) {
                city = City.value;
                units = Units.value;
                let weatherObject = (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, units, lang);
                //as the fetch is too fast, the gif spawns and gets deleted too fast, so, I added a fake delay
                setTimeout(() => {
                    drawWeather(weatherObject);
                }, 500);
                initButton();
            }
            else {
                alert('Bad input');
            }
        };
    }
}
function randomWeather() {
    let random = Math.floor(Math.random() * 10);
    units = 'metric';
    lang = 'en';
    if (random == 1 || random == 0)
        city = 'Barcelona';
    else if (random == 2 || random == 3)
        city = 'Baghdad';
    else if (random == 4 || random == 5)
        city = 'Cuenca';
    else if (random == 6 || random == 7)
        city = 'Milwaukee';
    else if (random > 7)
        city = 'Tokyo';
    //console.log('random: ', random, city);
    let weatherObject = (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, units, lang);
    //as the fetch is too fast, the gif spawns and gets deleted too fast, so, I added a fake delay
    setTimeout(() => {
        drawWeather(weatherObject);
    }, 500);
}
// let weatherObject = getWeather(city, units, lang);
//https://www.flaticon.com/packs/weather-1001
function drawWeather(weatherObject) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
            let weatherDescr = (yield weatherObject).desc;
            let weatherValues = {
                Max: (yield weatherObject).maxTemp,
                min: (yield weatherObject).minTemp,
                tempSen: (yield weatherObject).tempSens,
                humid: (yield weatherObject).humidity,
            };
            let weatherHour = (yield weatherObject).hour;
            let imgSrc;
            //check for the type of weather and assign an image depending on the case
            if (weatherDescr.includes('rain')) {
                imgSrc = WeatherIcons.rainy;
            }
            else if (weatherDescr.includes('clouds')) {
                if (weatherHour > 20)
                    imgSrc = WeatherIcons.cloudyNight;
                else
                    imgSrc = WeatherIcons.cloudyDay;
            }
            else if (weatherDescr.includes('snow')) {
                imgSrc = WeatherIcons.snowy;
            }
            else if (weatherDescr.includes('thunder')) {
                if (weatherHour > 20)
                    imgSrc = WeatherIcons.nightThunderstorm;
                else
                    imgSrc = WeatherIcons.dayThunderstorm;
            }
            else if (weatherDescr.includes('clear')) {
                if (weatherHour > 20)
                    imgSrc = WeatherIcons.clearNight;
                else
                    imgSrc = WeatherIcons.clearDay;
            }
            else if (weatherDescr.includes('eclipse')) {
                imgSrc = WeatherIcons.eclipse;
            }
            else if (weatherDescr.includes('falling stars')) {
                imgSrc = WeatherIcons.fallingStar;
            }
            const WeatherDiv = document.querySelector('#weatherReading');
            WeatherDiv.innerHTML = `
        <div id="currentWeatherDiv"></div>
        <img id="weatherIcon" src="" />
        <div id="currentWeatherValues"></div>
    `;
            const WeatherImgDom = document.querySelector('#weatherIcon');
            const WeatherDescDom = document.querySelector('#currentWeatherDiv');
            const WeatherValDom = document.querySelector('#currentWeatherValues');
            if (WeatherDescDom != null &&
                WeatherImgDom != null &&
                WeatherValDom != null) {
                WeatherDescDom.innerHTML = `
    <h3 id="currentCity"> ${city} </h3>
    <h3 id="currentWeatherDesc"> ${weatherDescr} </h3>
    `;
                WeatherImgDom.src = imgSrc;
                //console.log(weatherValues);
                WeatherValDom.innerHTML = `
      <p>Max. Temperature: ${weatherValues.Max} </p>
      <p>min. Temperature: ${weatherValues.min} </p>
      <p>Thermic sensation: ${weatherValues.tempSen}</p>
      <p>Humidity: ${weatherValues.humid}</p>
    `;
            }
        }
        catch (_a) {
            new Error();
            return;
        }
        //console.log('returned object', await weatherObject);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQyxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQkFBbUI7QUFDaEQsNkJBQTZCLG1CQUFtQjtBQUNoRCw4QkFBOEIsc0JBQXNCO0FBQ3BELHFCQUFxQixvQkFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCB7IGdldFdlYXRoZXIgfTtcclxuLy9hcGkgY2FsbCB3aXRoIGxhdCAmIGxvblxyXG4vL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHthcGlLZXl9XHJcbi8vYXBpIGNhbGwgd2l0aCBjaXR5IHF1ZXJ5XHJcbi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZBUFBJRD0ke2FwaUtleX1cclxuZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCB1bml0cywgbGFuZykge1xyXG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAvLyBvbiBjYWxsLCBtYWtlcyB0aGUgZGlzcGxheSBzY3JlZW4gYSBsb2FkaW5nIGdpZjsgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucyB0aGUgb2JqZWN0IGl0IGlzIGdvaW5nIHRvIGJlIGRyYXduLCBzbyB0aGUgZ2lmIHdpbGwgYmUgZGVsZXRlZC5cclxuICAgICAgICBjb25zdCBXZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyUmVhZGluZycpO1xyXG4gICAgICAgIFdlYXRoZXJEaXNwbGF5LmlubmVySFRNTCA9IGBcclxuICAgIDxpbWcgaWQ9XCJsb2FkaW5nSWNvblwiIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzc3ODIvNzc4Mjg5Ni5wbmdcIj5cclxuICBgO1xyXG4gICAgICAgIC8vYXBpIGtleSBpcyBwbGFpbiB0ZXh0IGJ1dCB0aGlzIGlzIGEgZnJlZSBrZXkgZm9yIE9wZW4gV2VhdGhlciAgYW5kIEkgZG91YnQgYW55b25lIGlzIGdvaW5nIHRvIGJlIGludGVyZXN0ZWQ7XHJcbiAgICAgICAgLy93b3VsZCBiZSBpbnRlcmVzdGluZyB0byBzZXQgdXAgYSAuZW52IGFuZCBhIHByb3h5IHRocm91Z2ggaGVyb2t1IG9yIHNvbWV0aGluZyBidXQgdGhhdCdzIG5vdCB0aGUgcG9pbnQgd2l0aCB0aGlzIGFwcFxyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9ICdjYTYxMjQzNjg3NjNiNjM1N2U0M2M5OWJjODFhNzc3OSc7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz0ke3VuaXRzfSZBUFBJRD0ke2FwaUtleX0mbGFuZz0ke2xhbmd9YDtcclxuICAgICAgICBsZXQgdW5pdFNpZ24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bml0cyA9PSAnbWV0cmljJylcclxuICAgICAgICAgICAgICAgIHJldHVybiAnwrpDJztcclxuICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT0gJ2ltcGVyaWFsJylcclxuICAgICAgICAgICAgICAgIHJldHVybiAnwrpLJztcclxuICAgICAgICAgICAgZWxzZSBpZiAodW5pdHMgPT0gJ2ZhaHJlbmhlaXQnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICfCukYnO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAocmVzcG9uc2VKc29uLmNvZCAhPSAnMjAwJykge1xyXG4gICAgICAgICAgICBXZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIGlkPVwiZXJyb3JJY29uXCIgc3JjPVwiaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMjAwMS8yMDAxMzg2LnBuZ1wiPlxyXG4gICAgPHAgaWQ9XCJlcnJvckNvZGVcIj4ke3Jlc3BvbnNlSnNvbi5jb2R9PC9wPlxyXG4gICAgPHAgaWQ9XCJlcnJvck1zZ1wiPiR7cmVzcG9uc2VKc29uLm1lc3NhZ2V9PC9wPlxyXG4gIGA7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ0VSUk9SOicsIHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZUpzb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGUgPSBuZXcgRGF0ZShyZXNwb25zZUpzb24uZHQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2UgYXMganNvbicsIHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50V2VhdGhlciA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2M6IHJlc3BvbnNlSnNvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgaG91cjogcmVzcG9uc2VEYXRlLmdldEhvdXJzKCksXHJcbiAgICAgICAgICAgICAgICBtYXhUZW1wOiByZXNwb25zZUpzb24ubWFpbi50ZW1wX21heCArIHVuaXRTaWduKCksXHJcbiAgICAgICAgICAgICAgICBtaW5UZW1wOiByZXNwb25zZUpzb24ubWFpbi50ZW1wX21pbiArIHVuaXRTaWduKCksXHJcbiAgICAgICAgICAgICAgICB0ZW1wU2VuczogcmVzcG9uc2VKc29uLm1haW4uZmVlbHNfbGlrZSArIHVuaXRTaWduKCksXHJcbiAgICAgICAgICAgICAgICBodW1pZGl0eTogcmVzcG9uc2VKc29uLm1haW4uaHVtaWRpdHkgKyAnJScsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3ByZS1leHBvcnQgb2JqZWN0JywgY3VycmVudFdlYXRoZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2dldFdlYXRoZXInO1xyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgcmFuZG9tV2VhdGhlcigpO1xyXG4gICAgaW5pdEJ1dHRvbigpO1xyXG4gICAgd2VhdGhlckZvcm1MaXN0ZW5lcigpO1xyXG59O1xyXG5sZXQgY2l0eTtcclxubGV0IHVuaXRzO1xyXG5sZXQgbGFuZyA9ICdlbic7XHJcbmZ1bmN0aW9uIGluaXRCdXR0b24oKSB7XHJcbiAgICBjb25zdCBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJGb3JtJyk7XHJcbiAgICBjb25zdCBXZWF0aGVyRm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyRm9ybURpdicpO1xyXG4gICAgaWYgKEZvcm0pXHJcbiAgICAgICAgRm9ybS5yZW1vdmUoKTtcclxuICAgIFdlYXRoZXJGb3JtRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGlkPVwid2VhdGhlckZvcm1EaXZcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzcGF3bkZvcm1cIj5DaGVjayB0aGUgd2VhdGhlciBzb21ld2hlcmUgZWxzZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICB3ZWF0aGVyRm9ybUxpc3RlbmVyKCk7XHJcbn1cclxuZnVuY3Rpb24gd2VhdGhlckZvcm1MaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IFdlYXRoZXJGb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJGb3JtRGl2Jyk7XHJcbiAgICBjb25zdCBGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NwYXduRm9ybScpO1xyXG4gICAgRm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNwYXduRm9ybSgpKTtcclxuICAgIGZ1bmN0aW9uIHNwYXduRm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBXZWF0aGVyRm9ybURpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxmb3JtIGlkPVwid2VhdGhlckZvcm1cIiBvbnN1Ym1pdD1cInJldHVybiBmYWxzZVwiPlxyXG4gICAgICAgIDxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIyXCIgbWF4bGVuZ3RoPVwiNDBcIiBpZD1cImNpdHlOYW1lRm9ybVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiBwbGFjZWhvbGRlcj1cIkNpdHlcIj5cclxuICAgICAgICA8c2VsZWN0IHJlcXVpcmVkIGlkPVwidW5pdHNGb3JtXCI+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWV0cmljXCI+IE1ldHJpYyAowrpDKSA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmYWhyZW5oZWl0XCI+IEZhaHJlbmhlaXQgKMK6RikgPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1wZXJpYWxcIj4gSW1wZXJpYWwgKMK6SykgPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdEZvcm1cIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICBgO1xyXG4gICAgICAgICAgICBoYW5kbGVTdWJtaXRFdmVudCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRFdmVudCgpIHtcclxuICAgICAgICBjb25zdCBDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHlOYW1lRm9ybScpO1xyXG4gICAgICAgIGNvbnN0IFVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzRm9ybScpO1xyXG4gICAgICAgIGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXRGb3JtJyk7XHJcbiAgICAgICAgU3VibWl0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgvXFx3ezIsNDB9Ly50ZXN0KENpdHkudmFsdWUpICYmXHJcbiAgICAgICAgICAgICAgICAvW01ldHJpY118W0ltcGVyaWFsXXxbRmFocmVuaGVpdF0vLnRlc3QoVW5pdHMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBjaXR5ID0gQ2l0eS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHVuaXRzID0gVW5pdHMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2VhdGhlck9iamVjdCA9IGdldFdlYXRoZXIoY2l0eSwgdW5pdHMsIGxhbmcpO1xyXG4gICAgICAgICAgICAgICAgLy9hcyB0aGUgZmV0Y2ggaXMgdG9vIGZhc3QsIHRoZSBnaWYgc3Bhd25zIGFuZCBnZXRzIGRlbGV0ZWQgdG9vIGZhc3QsIHNvLCBJIGFkZGVkIGEgZmFrZSBkZWxheVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd1dlYXRoZXIod2VhdGhlck9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgaW5pdEJ1dHRvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0JhZCBpbnB1dCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByYW5kb21XZWF0aGVyKCkge1xyXG4gICAgbGV0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgIHVuaXRzID0gJ21ldHJpYyc7XHJcbiAgICBsYW5nID0gJ2VuJztcclxuICAgIGlmIChyYW5kb20gPT0gMSB8fCByYW5kb20gPT0gMClcclxuICAgICAgICBjaXR5ID0gJ0JhcmNlbG9uYSc7XHJcbiAgICBlbHNlIGlmIChyYW5kb20gPT0gMiB8fCByYW5kb20gPT0gMylcclxuICAgICAgICBjaXR5ID0gJ0JhZ2hkYWQnO1xyXG4gICAgZWxzZSBpZiAocmFuZG9tID09IDQgfHwgcmFuZG9tID09IDUpXHJcbiAgICAgICAgY2l0eSA9ICdDdWVuY2EnO1xyXG4gICAgZWxzZSBpZiAocmFuZG9tID09IDYgfHwgcmFuZG9tID09IDcpXHJcbiAgICAgICAgY2l0eSA9ICdNaWx3YXVrZWUnO1xyXG4gICAgZWxzZSBpZiAocmFuZG9tID4gNylcclxuICAgICAgICBjaXR5ID0gJ1Rva3lvJztcclxuICAgIC8vY29uc29sZS5sb2coJ3JhbmRvbTogJywgcmFuZG9tLCBjaXR5KTtcclxuICAgIGxldCB3ZWF0aGVyT2JqZWN0ID0gZ2V0V2VhdGhlcihjaXR5LCB1bml0cywgbGFuZyk7XHJcbiAgICAvL2FzIHRoZSBmZXRjaCBpcyB0b28gZmFzdCwgdGhlIGdpZiBzcGF3bnMgYW5kIGdldHMgZGVsZXRlZCB0b28gZmFzdCwgc28sIEkgYWRkZWQgYSBmYWtlIGRlbGF5XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkcmF3V2VhdGhlcih3ZWF0aGVyT2JqZWN0KTtcclxuICAgIH0sIDUwMCk7XHJcbn1cclxuLy8gbGV0IHdlYXRoZXJPYmplY3QgPSBnZXRXZWF0aGVyKGNpdHksIHVuaXRzLCBsYW5nKTtcclxuLy9odHRwczovL3d3dy5mbGF0aWNvbi5jb20vcGFja3Mvd2VhdGhlci0xMDAxXHJcbmZ1bmN0aW9uIGRyYXdXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgV2VhdGhlckljb25zID0ge1xyXG4gICAgICAgICAgICAgICAgcmFpbnk6ICcuLi9zcmMvaWNvbnMvcmFpbi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgc25vd3k6ICcuLi9zcmMvaWNvbnMvc25vdy5wbmcnLFxyXG4gICAgICAgICAgICAgICAgZGF5VGh1bmRlcnN0b3JtOiAnLi4vc3JjL2ljb25zL2RheS10aHVuZGVyc3Rvcm0ucG5nJyxcclxuICAgICAgICAgICAgICAgIG5pZ2h0VGh1bmRlcnN0b3JtOiAnLi4vc3JjL2ljb25zL25pZ2h0LXRodW5kZXJzdG9ybS5wbmcnLFxyXG4gICAgICAgICAgICAgICAgZmFsbGluZ1N0YXI6ICcuLi9zcmMvaWNvbnMvZmFsbGluZy1zdGFyLnBuZycsXHJcbiAgICAgICAgICAgICAgICBjbGVhck5pZ2h0OiAnLi4vc3JjL2ljb25zL2NsZWFyLW5pZ2h0LnBuZycsXHJcbiAgICAgICAgICAgICAgICBjbGVhckRheTogJy4uL3NyYy9pY29ucy9jbGVhci1kYXkucG5nJyxcclxuICAgICAgICAgICAgICAgIGNsb3VkeURheTogJy4uL3NyYy9pY29ucy9jbG91ZHktZGF5LnBuZycsXHJcbiAgICAgICAgICAgICAgICBjbG91ZHlOaWdodDogJy4uL3NyYy9pY29ucy9jbG91ZHktbmlnaHQucG5nJyxcclxuICAgICAgICAgICAgICAgIGVjbGlwc2U6ICcuLi9zcmMvaWNvbnMvZWNsaXBzZS5wbmcnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgd2VhdGhlckRlc2NyID0gKHlpZWxkIHdlYXRoZXJPYmplY3QpLmRlc2M7XHJcbiAgICAgICAgICAgIGxldCB3ZWF0aGVyVmFsdWVzID0ge1xyXG4gICAgICAgICAgICAgICAgTWF4OiAoeWllbGQgd2VhdGhlck9iamVjdCkubWF4VGVtcCxcclxuICAgICAgICAgICAgICAgIG1pbjogKHlpZWxkIHdlYXRoZXJPYmplY3QpLm1pblRlbXAsXHJcbiAgICAgICAgICAgICAgICB0ZW1wU2VuOiAoeWllbGQgd2VhdGhlck9iamVjdCkudGVtcFNlbnMsXHJcbiAgICAgICAgICAgICAgICBodW1pZDogKHlpZWxkIHdlYXRoZXJPYmplY3QpLmh1bWlkaXR5LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsZXQgd2VhdGhlckhvdXIgPSAoeWllbGQgd2VhdGhlck9iamVjdCkuaG91cjtcclxuICAgICAgICAgICAgbGV0IGltZ1NyYztcclxuICAgICAgICAgICAgLy9jaGVjayBmb3IgdGhlIHR5cGUgb2Ygd2VhdGhlciBhbmQgYXNzaWduIGFuIGltYWdlIGRlcGVuZGluZyBvbiB0aGUgY2FzZVxyXG4gICAgICAgICAgICBpZiAod2VhdGhlckRlc2NyLmluY2x1ZGVzKCdyYWluJykpIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IFdlYXRoZXJJY29ucy5yYWlueTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ2Nsb3VkcycpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2VhdGhlckhvdXIgPiAyMClcclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMuY2xvdWR5TmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLmNsb3VkeURheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ3Nub3cnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLnNub3d5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHdlYXRoZXJEZXNjci5pbmNsdWRlcygndGh1bmRlcicpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2VhdGhlckhvdXIgPiAyMClcclxuICAgICAgICAgICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMubmlnaHRUaHVuZGVyc3Rvcm07XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLmRheVRodW5kZXJzdG9ybTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ2NsZWFyJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh3ZWF0aGVySG91ciA+IDIwKVxyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYyA9IFdlYXRoZXJJY29ucy5jbGVhck5pZ2h0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIGltZ1NyYyA9IFdlYXRoZXJJY29ucy5jbGVhckRheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ2VjbGlwc2UnKSkge1xyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLmVjbGlwc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAod2VhdGhlckRlc2NyLmluY2x1ZGVzKCdmYWxsaW5nIHN0YXJzJykpIHtcclxuICAgICAgICAgICAgICAgIGltZ1NyYyA9IFdlYXRoZXJJY29ucy5mYWxsaW5nU3RhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBXZWF0aGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJSZWFkaW5nJyk7XHJcbiAgICAgICAgICAgIFdlYXRoZXJEaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjdXJyZW50V2VhdGhlckRpdlwiPjwvZGl2PlxyXG4gICAgICAgIDxpbWcgaWQ9XCJ3ZWF0aGVySWNvblwiIHNyYz1cIlwiIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cImN1cnJlbnRXZWF0aGVyVmFsdWVzXCI+PC9kaXY+XHJcbiAgICBgO1xyXG4gICAgICAgICAgICBjb25zdCBXZWF0aGVySW1nRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJJY29uJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IFdlYXRoZXJEZXNjRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRXZWF0aGVyRGl2Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IFdlYXRoZXJWYWxEb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudFdlYXRoZXJWYWx1ZXMnKTtcclxuICAgICAgICAgICAgaWYgKFdlYXRoZXJEZXNjRG9tICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgIFdlYXRoZXJJbWdEb20gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICAgICAgV2VhdGhlclZhbERvbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBXZWF0aGVyRGVzY0RvbS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aDMgaWQ9XCJjdXJyZW50Q2l0eVwiPiAke2NpdHl9IDwvaDM+XHJcbiAgICA8aDMgaWQ9XCJjdXJyZW50V2VhdGhlckRlc2NcIj4gJHt3ZWF0aGVyRGVzY3J9IDwvaDM+XHJcbiAgICBgO1xyXG4gICAgICAgICAgICAgICAgV2VhdGhlckltZ0RvbS5zcmMgPSBpbWdTcmM7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHdlYXRoZXJWYWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgV2VhdGhlclZhbERvbS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxwPk1heC4gVGVtcGVyYXR1cmU6ICR7d2VhdGhlclZhbHVlcy5NYXh9IDwvcD5cclxuICAgICAgPHA+bWluLiBUZW1wZXJhdHVyZTogJHt3ZWF0aGVyVmFsdWVzLm1pbn0gPC9wPlxyXG4gICAgICA8cD5UaGVybWljIHNlbnNhdGlvbjogJHt3ZWF0aGVyVmFsdWVzLnRlbXBTZW59PC9wPlxyXG4gICAgICA8cD5IdW1pZGl0eTogJHt3ZWF0aGVyVmFsdWVzLmh1bWlkfTwvcD5cclxuICAgIGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgIG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3JldHVybmVkIG9iamVjdCcsIGF3YWl0IHdlYXRoZXJPYmplY3QpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9