
export interface CurrentResponse {
    date: Date;
    sunrise: Date;
    sunset: Date;
    city: String;
    main: String;
    description: String;
    icon: String;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    visibility: number;
    wind: { speed: number, deg: number } 
}