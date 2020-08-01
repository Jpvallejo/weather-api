import express, { Request, Response } from "express";
import { GeolocationService } from "../../services/geolocationService";
import { WeatherService } from "../../services/weatherService";

const weatherService = new WeatherService();
const geoLocationService = new GeolocationService();
/**
 * Router Definition
 */
export const weatherRouter = express.Router();
/**
 * Controller Definitions
 */

weatherRouter.get("/current/:city?", async (req: Request, res: Response) => {
    try {
        const city = req.params.city ? req.params.city : await geoLocationService.getCity();

        const weather = await weatherService.getCurrentWeather(city);

        res.send(weather);
    }
    catch (err) {
        console.log(err.message);
        res.status(400);
    }
});

weatherRouter.get("/forecast/:city?", async (req: Request, res: Response) => {
    try {
        const latlon: any = await (req.params.city? geoLocationService.getCityLatLon(req.params.city): geoLocationService.getLatLon());

        const weather = await weatherService.getForecastWeather(latlon.lat, latlon.lon);

        res.send(weather);
    }
    catch (err) {
        console.log(err.message);
        res.status(400);
    }
});