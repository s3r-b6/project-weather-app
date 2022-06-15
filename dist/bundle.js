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
        if (responseJson.cod == '404') {
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
          <button id="spawnForm">Check the weather somewhere</button>
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
        <input autocomplete="off" required minlength="2" maxlength="20" id="cityNameForm" type="text" name="city" placeholder="City">
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
            if (/\w{2,20}/.test(City.value) &&
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
        //console.log('returned object', await weatherObject);
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixNQUFNO0FBQ2xDLG1DQUFtQyxjQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1CQUFtQjtBQUNoRCw2QkFBNkIsbUJBQW1CO0FBQ2hELDhCQUE4QixzQkFBc0I7QUFDcEQscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3Qtd2VhdGhlci1hcHAvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07XHJcbi8vYXBpIGNhbGwgd2l0aCBsYXQgJiBsb25cclxuLy9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7YXBpS2V5fVxyXG4vL2FwaSBjYWxsIHdpdGggY2l0eSBxdWVyeVxyXG4vL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mQVBQSUQ9JHthcGlLZXl9XHJcbmZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eSwgdW5pdHMsIGxhbmcpIHtcclxuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgLy8gb24gY2FsbCwgbWFrZXMgdGhlIGRpc3BsYXkgc2NyZWVuIGEgbG9hZGluZyBnaWY7IHdoZW4gdGhlIGZ1bmN0aW9uIHJldHVybnMgdGhlIG9iamVjdCBpdCBpcyBnb2luZyB0byBiZSBkcmF3biwgc28gdGhlIGdpZiB3aWxsIGJlIGRlbGV0ZWQuXHJcbiAgICAgICAgY29uc3QgV2VhdGhlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlclJlYWRpbmcnKTtcclxuICAgICAgICBXZWF0aGVyRGlzcGxheS5pbm5lckhUTUwgPSBgXHJcbiAgICA8aW1nIGlkPVwibG9hZGluZ0ljb25cIiBzcmM9XCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi83NzgyLzc3ODI4OTYucG5nXCI+XHJcbiAgYDtcclxuICAgICAgICAvL2FwaSBrZXkgaXMgcGxhaW4gdGV4dCBidXQgdGhpcyBpcyBhIGZyZWUga2V5IGZvciBPcGVuIFdlYXRoZXIgIGFuZCBJIGRvdWJ0IGFueW9uZSBpcyBnb2luZyB0byBiZSBpbnRlcmVzdGVkO1xyXG4gICAgICAgIC8vd291bGQgYmUgaW50ZXJlc3RpbmcgdG8gc2V0IHVwIGEgLmVudiBhbmQgYSBwcm94eSB0aHJvdWdoIGhlcm9rdSBvciBzb21ldGhpbmcgYnV0IHRoYXQncyBub3QgdGhlIHBvaW50IHdpdGggdGhpcyBhcHBcclxuICAgICAgICBjb25zdCBhcGlLZXkgPSAnY2E2MTI0MzY4NzYzYjYzNTdlNDNjOTliYzgxYTc3NzknO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9JHt1bml0c30mQVBQSUQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWA7XHJcbiAgICAgICAgbGV0IHVuaXRTaWduID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodW5pdHMgPT0gJ21ldHJpYycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ8K6Qyc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaXRzID09ICdpbXBlcmlhbCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ8K6Syc7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHVuaXRzID09ICdmYWhyZW5oZWl0JylcclxuICAgICAgICAgICAgICAgIHJldHVybiAnwrpGJztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgICAgICBjb25zdCByZXNwb25zZUpzb24gPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlSnNvbi5jb2QgPT0gJzQwNCcpIHtcclxuICAgICAgICAgICAgV2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgPGltZyBpZD1cImVycm9ySWNvblwiIHNyYz1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzIwMDEvMjAwMTM4Ni5wbmdcIj5cclxuICAgIDxwIGlkPVwiZXJyb3JDb2RlXCI+JHtyZXNwb25zZUpzb24uY29kfTwvcD5cclxuICAgIDxwIGlkPVwiZXJyb3JNc2dcIj4ke3Jlc3BvbnNlSnNvbi5tZXNzYWdlfTwvcD5cclxuICBgO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdFUlJPUjonLCByZXNwb25zZUpzb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VKc29uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRlID0gbmV3IERhdGUocmVzcG9uc2VKc29uLmR0KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncmVzcG9uc2UgYXMganNvbicsIHJlc3BvbnNlSnNvbik7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50V2VhdGhlciA9IHtcclxuICAgICAgICAgICAgICAgIGRlc2M6IHJlc3BvbnNlSnNvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgaG91cjogcmVzcG9uc2VEYXRlLmdldEhvdXJzKCksXHJcbiAgICAgICAgICAgICAgICBtYXhUZW1wOiByZXNwb25zZUpzb24ubWFpbi50ZW1wX21heCArIHVuaXRTaWduKCksXHJcbiAgICAgICAgICAgICAgICBtaW5UZW1wOiByZXNwb25zZUpzb24ubWFpbi50ZW1wX21pbiArIHVuaXRTaWduKCksXHJcbiAgICAgICAgICAgICAgICB0ZW1wU2VuczogcmVzcG9uc2VKc29uLm1haW4uZmVlbHNfbGlrZSArIHVuaXRTaWduKCksXHJcbiAgICAgICAgICAgICAgICBodW1pZGl0eTogcmVzcG9uc2VKc29uLm1haW4uaHVtaWRpdHkgKyAnJScsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3ByZS1leHBvcnQgb2JqZWN0JywgY3VycmVudFdlYXRoZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFdlYXRoZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tICcuL2dldFdlYXRoZXInO1xyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgcmFuZG9tV2VhdGhlcigpO1xyXG4gICAgaW5pdEJ1dHRvbigpO1xyXG4gICAgd2VhdGhlckZvcm1MaXN0ZW5lcigpO1xyXG59O1xyXG5sZXQgY2l0eTtcclxubGV0IHVuaXRzO1xyXG5sZXQgbGFuZyA9ICdlbic7XHJcbmZ1bmN0aW9uIGluaXRCdXR0b24oKSB7XHJcbiAgICBjb25zdCBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJGb3JtJyk7XHJcbiAgICBjb25zdCBXZWF0aGVyRm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyRm9ybURpdicpO1xyXG4gICAgaWYgKEZvcm0pXHJcbiAgICAgICAgRm9ybS5yZW1vdmUoKTtcclxuICAgIFdlYXRoZXJGb3JtRGl2LmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGlkPVwid2VhdGhlckZvcm1EaXZcIj5cclxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzcGF3bkZvcm1cIj5DaGVjayB0aGUgd2VhdGhlciBzb21ld2hlcmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgd2VhdGhlckZvcm1MaXN0ZW5lcigpO1xyXG59XHJcbmZ1bmN0aW9uIHdlYXRoZXJGb3JtTGlzdGVuZXIoKSB7XHJcbiAgICBjb25zdCBXZWF0aGVyRm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyRm9ybURpdicpO1xyXG4gICAgY29uc3QgRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzcGF3bkZvcm0nKTtcclxuICAgIEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzcGF3bkZvcm0oKSk7XHJcbiAgICBmdW5jdGlvbiBzcGF3bkZvcm0oKSB7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgV2VhdGhlckZvcm1EaXYuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8Zm9ybSBpZD1cIndlYXRoZXJGb3JtXCIgb25zdWJtaXQ9XCJyZXR1cm4gZmFsc2VcIj5cclxuICAgICAgICA8aW5wdXQgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQgbWlubGVuZ3RoPVwiMlwiIG1heGxlbmd0aD1cIjIwXCIgaWQ9XCJjaXR5TmFtZUZvcm1cIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJDaXR5XCI+XHJcbiAgICAgICAgPHNlbGVjdCByZXF1aXJlZCBpZD1cInVuaXRzRm9ybVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1ldHJpY1wiPiBNZXRyaWMgKMK6QykgPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFocmVuaGVpdFwiPiBGYWhyZW5oZWl0ICjCukYpIDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImltcGVyaWFsXCI+IEltcGVyaWFsICjCukspIDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRGb3JtXCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgYDtcclxuICAgICAgICAgICAgaGFuZGxlU3VibWl0RXZlbnQoKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0RXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgQ2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5TmFtZUZvcm0nKTtcclxuICAgICAgICBjb25zdCBVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0c0Zvcm0nKTtcclxuICAgICAgICBjb25zdCBTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0Rm9ybScpO1xyXG4gICAgICAgIFN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoL1xcd3syLDIwfS8udGVzdChDaXR5LnZhbHVlKSAmJlxyXG4gICAgICAgICAgICAgICAgL1tNZXRyaWNdfFtJbXBlcmlhbF18W0ZhaHJlbmhlaXRdLy50ZXN0KFVuaXRzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgY2l0eSA9IENpdHkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB1bml0cyA9IFVuaXRzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdlYXRoZXJPYmplY3QgPSBnZXRXZWF0aGVyKGNpdHksIHVuaXRzLCBsYW5nKTtcclxuICAgICAgICAgICAgICAgIC8vYXMgdGhlIGZldGNoIGlzIHRvbyBmYXN0LCB0aGUgZ2lmIHNwYXducyBhbmQgZ2V0cyBkZWxldGVkIHRvbyBmYXN0LCBzbywgSSBhZGRlZCBhIGZha2UgZGVsYXlcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYXdXZWF0aGVyKHdlYXRoZXJPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIGluaXRCdXR0b24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdCYWQgaW5wdXQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmFuZG9tV2VhdGhlcigpIHtcclxuICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICB1bml0cyA9ICdtZXRyaWMnO1xyXG4gICAgbGFuZyA9ICdlbic7XHJcbiAgICBpZiAocmFuZG9tID09IDEgfHwgcmFuZG9tID09IDApXHJcbiAgICAgICAgY2l0eSA9ICdCYXJjZWxvbmEnO1xyXG4gICAgZWxzZSBpZiAocmFuZG9tID09IDIgfHwgcmFuZG9tID09IDMpXHJcbiAgICAgICAgY2l0eSA9ICdCYWdoZGFkJztcclxuICAgIGVsc2UgaWYgKHJhbmRvbSA9PSA0IHx8IHJhbmRvbSA9PSA1KVxyXG4gICAgICAgIGNpdHkgPSAnQ3VlbmNhJztcclxuICAgIGVsc2UgaWYgKHJhbmRvbSA9PSA2IHx8IHJhbmRvbSA9PSA3KVxyXG4gICAgICAgIGNpdHkgPSAnTWlsd2F1a2VlJztcclxuICAgIGVsc2UgaWYgKHJhbmRvbSA+IDcpXHJcbiAgICAgICAgY2l0eSA9ICdUb2t5byc7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdyYW5kb206ICcsIHJhbmRvbSwgY2l0eSk7XHJcbiAgICBsZXQgd2VhdGhlck9iamVjdCA9IGdldFdlYXRoZXIoY2l0eSwgdW5pdHMsIGxhbmcpO1xyXG4gICAgLy9hcyB0aGUgZmV0Y2ggaXMgdG9vIGZhc3QsIHRoZSBnaWYgc3Bhd25zIGFuZCBnZXRzIGRlbGV0ZWQgdG9vIGZhc3QsIHNvLCBJIGFkZGVkIGEgZmFrZSBkZWxheVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgZHJhd1dlYXRoZXIod2VhdGhlck9iamVjdCk7XHJcbiAgICB9LCA1MDApO1xyXG59XHJcbi8vIGxldCB3ZWF0aGVyT2JqZWN0ID0gZ2V0V2VhdGhlcihjaXR5LCB1bml0cywgbGFuZyk7XHJcbi8vaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL3BhY2tzL3dlYXRoZXItMTAwMVxyXG5mdW5jdGlvbiBkcmF3V2VhdGhlcih3ZWF0aGVyT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGNvbnN0IFdlYXRoZXJJY29ucyA9IHtcclxuICAgICAgICAgICAgcmFpbnk6ICcuLi9zcmMvaWNvbnMvcmFpbi5wbmcnLFxyXG4gICAgICAgICAgICBzbm93eTogJy4uL3NyYy9pY29ucy9zbm93LnBuZycsXHJcbiAgICAgICAgICAgIGRheVRodW5kZXJzdG9ybTogJy4uL3NyYy9pY29ucy9kYXktdGh1bmRlcnN0b3JtLnBuZycsXHJcbiAgICAgICAgICAgIG5pZ2h0VGh1bmRlcnN0b3JtOiAnLi4vc3JjL2ljb25zL25pZ2h0LXRodW5kZXJzdG9ybS5wbmcnLFxyXG4gICAgICAgICAgICBmYWxsaW5nU3RhcjogJy4uL3NyYy9pY29ucy9mYWxsaW5nLXN0YXIucG5nJyxcclxuICAgICAgICAgICAgY2xlYXJOaWdodDogJy4uL3NyYy9pY29ucy9jbGVhci1uaWdodC5wbmcnLFxyXG4gICAgICAgICAgICBjbGVhckRheTogJy4uL3NyYy9pY29ucy9jbGVhci1kYXkucG5nJyxcclxuICAgICAgICAgICAgY2xvdWR5RGF5OiAnLi4vc3JjL2ljb25zL2Nsb3VkeS1kYXkucG5nJyxcclxuICAgICAgICAgICAgY2xvdWR5TmlnaHQ6ICcuLi9zcmMvaWNvbnMvY2xvdWR5LW5pZ2h0LnBuZycsXHJcbiAgICAgICAgICAgIGVjbGlwc2U6ICcuLi9zcmMvaWNvbnMvZWNsaXBzZS5wbmcnLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHdlYXRoZXJEZXNjciA9ICh5aWVsZCB3ZWF0aGVyT2JqZWN0KS5kZXNjO1xyXG4gICAgICAgIGxldCB3ZWF0aGVyVmFsdWVzID0ge1xyXG4gICAgICAgICAgICBNYXg6ICh5aWVsZCB3ZWF0aGVyT2JqZWN0KS5tYXhUZW1wLFxyXG4gICAgICAgICAgICBtaW46ICh5aWVsZCB3ZWF0aGVyT2JqZWN0KS5taW5UZW1wLFxyXG4gICAgICAgICAgICB0ZW1wU2VuOiAoeWllbGQgd2VhdGhlck9iamVjdCkudGVtcFNlbnMsXHJcbiAgICAgICAgICAgIGh1bWlkOiAoeWllbGQgd2VhdGhlck9iamVjdCkuaHVtaWRpdHksXHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgd2VhdGhlckhvdXIgPSAoeWllbGQgd2VhdGhlck9iamVjdCkuaG91cjtcclxuICAgICAgICBsZXQgaW1nU3JjO1xyXG4gICAgICAgIC8vY2hlY2sgZm9yIHRoZSB0eXBlIG9mIHdlYXRoZXIgYW5kIGFzc2lnbiBhbiBpbWFnZSBkZXBlbmRpbmcgb24gdGhlIGNhc2VcclxuICAgICAgICBpZiAod2VhdGhlckRlc2NyLmluY2x1ZGVzKCdyYWluJykpIHtcclxuICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLnJhaW55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ2Nsb3VkcycpKSB7XHJcbiAgICAgICAgICAgIGlmICh3ZWF0aGVySG91ciA+IDIwKVxyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLmNsb3VkeU5pZ2h0O1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMuY2xvdWR5RGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ3Nub3cnKSkge1xyXG4gICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMuc25vd3k7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdlYXRoZXJEZXNjci5pbmNsdWRlcygndGh1bmRlcicpKSB7XHJcbiAgICAgICAgICAgIGlmICh3ZWF0aGVySG91ciA+IDIwKVxyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLm5pZ2h0VGh1bmRlcnN0b3JtO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMuZGF5VGh1bmRlcnN0b3JtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ2NsZWFyJykpIHtcclxuICAgICAgICAgICAgaWYgKHdlYXRoZXJIb3VyID4gMjApXHJcbiAgICAgICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMuY2xlYXJOaWdodDtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLmNsZWFyRGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh3ZWF0aGVyRGVzY3IuaW5jbHVkZXMoJ2VjbGlwc2UnKSkge1xyXG4gICAgICAgICAgICBpbWdTcmMgPSBXZWF0aGVySWNvbnMuZWNsaXBzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAod2VhdGhlckRlc2NyLmluY2x1ZGVzKCdmYWxsaW5nIHN0YXJzJykpIHtcclxuICAgICAgICAgICAgaW1nU3JjID0gV2VhdGhlckljb25zLmZhbGxpbmdTdGFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBXZWF0aGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXJSZWFkaW5nJyk7XHJcbiAgICAgICAgV2VhdGhlckRpdi5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBpZD1cImN1cnJlbnRXZWF0aGVyRGl2XCI+PC9kaXY+XHJcbiAgICAgICAgPGltZyBpZD1cIndlYXRoZXJJY29uXCIgc3JjPVwiXCIgLz5cclxuICAgICAgICA8ZGl2IGlkPVwiY3VycmVudFdlYXRoZXJWYWx1ZXNcIj48L2Rpdj5cclxuICAgIGA7XHJcbiAgICAgICAgY29uc3QgV2VhdGhlckltZ0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVySWNvbicpO1xyXG4gICAgICAgIGNvbnN0IFdlYXRoZXJEZXNjRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnRXZWF0aGVyRGl2Jyk7XHJcbiAgICAgICAgY29uc3QgV2VhdGhlclZhbERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50V2VhdGhlclZhbHVlcycpO1xyXG4gICAgICAgIGlmIChXZWF0aGVyRGVzY0RvbSAhPSBudWxsICYmXHJcbiAgICAgICAgICAgIFdlYXRoZXJJbWdEb20gIT0gbnVsbCAmJlxyXG4gICAgICAgICAgICBXZWF0aGVyVmFsRG9tICE9IG51bGwpIHtcclxuICAgICAgICAgICAgV2VhdGhlckRlc2NEb20uaW5uZXJIVE1MID0gYFxyXG4gICAgPGgzIGlkPVwiY3VycmVudENpdHlcIj4gJHtjaXR5fSA8L2gzPlxyXG4gICAgPGgzIGlkPVwiY3VycmVudFdlYXRoZXJEZXNjXCI+ICR7d2VhdGhlckRlc2NyfSA8L2gzPlxyXG4gICAgYDtcclxuICAgICAgICAgICAgV2VhdGhlckltZ0RvbS5zcmMgPSBpbWdTcmM7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2VhdGhlclZhbHVlcyk7XHJcbiAgICAgICAgICAgIFdlYXRoZXJWYWxEb20uaW5uZXJIVE1MID0gYFxyXG4gICAgICA8cD5NYXguIFRlbXBlcmF0dXJlOiAke3dlYXRoZXJWYWx1ZXMuTWF4fSA8L3A+XHJcbiAgICAgIDxwPm1pbi4gVGVtcGVyYXR1cmU6ICR7d2VhdGhlclZhbHVlcy5taW59IDwvcD5cclxuICAgICAgPHA+VGhlcm1pYyBzZW5zYXRpb246ICR7d2VhdGhlclZhbHVlcy50ZW1wU2VufTwvcD5cclxuICAgICAgPHA+SHVtaWRpdHk6ICR7d2VhdGhlclZhbHVlcy5odW1pZH08L3A+XHJcbiAgICBgO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXR1cm5lZCBvYmplY3QnLCBhd2FpdCB3ZWF0aGVyT2JqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==