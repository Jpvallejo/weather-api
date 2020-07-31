

export interface ForecastResponse {
    date: Date;
    sunrise: Date;
    sunset: Date;
    temp: number;
    feels_like: {
        day: number;
            night: number;
            eve: number;
            morn: number;    },
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: {
        id: number,
        main: String,
        description: String,
        icon: String
    };
}