import express, { Request, Response } from "express";
import { GeolocationService } from "../services/geolocationService";
const geoLocationService = new GeolocationService();
/**
 * Router Definition
 */
export const locationRouter = express.Router();
/**
 * Controller Definitions
 */

locationRouter.get("/location", async (req: Request, res: Response) => {
    try {
        const city = req.params.city ? req.params.city : await geoLocationService.getCity();

        res.send({"city": city});
    }
    catch (err) {
        console.log(err.message);
        res.status(400);
    }
});