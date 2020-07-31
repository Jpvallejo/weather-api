import axios from "axios";
import { ForecastResponse } from "../models/forecastResponse";
import { CurrentResponse } from "../models/currentResponse";

export class WeatherService {

    defaultForecastDays: number = parseInt(process.env.DEFAULT_FORECAST_DAYS ?? '');

    public async getCurrentWeather(city: String) {
        const url = `${process.env.OPEN_WEATHER_BASE_URL}${process.env.OPEN_WEATHER_CURRENT_URL}${city}${process.env.OPEN_WEATHER_URL_KEY}`

        return axios.get(url).then((response) => {
            return this.parseCurrentResponse(response.data);
        })
            .catch((error) => {
                // handle error
                console.log(error);
                throw error;
            });
    }

    public async getForecastWeather(lat: number, lon: number, forecastDays = this.defaultForecastDays) {

        const url = `${process.env.OPEN_WEATHER_BASE_URL}${process.env.OPEN_WEATHER_FORECAST_URL}&lat=${lat}&lon=${lon}${process.env.OPEN_WEATHER_URL_KEY}`

        return axios.get(url).then((response) => {
            return response.data.daily.slice(0,forecastDays).map((item: any) => { // Using slice since the api provider does not allow to specify the amount of days of the forecast data
                return this.parseForecastResponse(item);
            });
        })
            .catch((error) => {
                // handle error
                console.log(error);
                throw error;
            });
    }

    parseForecastResponse(response: any): ForecastResponse {

        return {
            date: new Date(response.dt),
            sunrise: new Date(response.sunrise),
            sunset: new Date(response.sunset),
            temp: response.temp,
            feels_like: response.feels_like,
            pressure: response.pressure,
            humidity: response.humidity,
            dew_point: response.dew_point,
            wind_speed: response.wind_speed,
            wind_deg: response.wind_deg,
            weather: response.weather
        }
    }

    parseCurrentResponse(response: any): CurrentResponse {
        return {
            date: new Date(response.dt),
            sunrise: new Date(response.sys.sunrise),
            sunset: new Date(response.sys.sunset),
            city: response.sys.name,
            main: response.weather[0].main,
            description: response.weather[0].description,
            icon: response.weather[0].icon,
            temp: response.main.temp,
            feels_like: response.main.feels_like,
            temp_min: response.main.temp_min,
            temp_max: response.main.temp_max,
            pressure: response.main.pressure,
            humidity: response.main.humidity,
            visibility: response.visibility,
            wind: response.wind
        }

    }
}