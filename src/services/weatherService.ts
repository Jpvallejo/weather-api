import axios from "axios";

export class WeatherService {

    defaultForecastDays: number = parseInt(process.env.DEFAULT_FORECAST_DAYS ?? '');

    public async getCurrentWeather(city: String) {
        const url = `${process.env.OPEN_WEATHER_BASE_URL}${process.env.OPEN_WEATHER_CURRENT_URL}${city}${process.env.OPEN_WEATHER_URL_KEY}`
        console.log(url);

        return axios.get(url).then((response) => {
            return response.data;
        })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    public async getForecastWeather(city: String, forecastDays = this.defaultForecastDays) {
        const url = `${process.env.OPEN_WEATHER_BASE_URL}${process.env.OPEN_WEATHER_FORECAST_URL}${city}&cnt=${forecastDays}${process.env.OPEN_WEATHER_URL_KEY}`
        console.log(url);

        return axios.get(url).then((response) => {
            return response.data;
        })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }
}