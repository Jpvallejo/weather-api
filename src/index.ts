/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notFound.middleware";

import { weatherRouter } from "./routers/weather/weatherRouter";
import { locationRouter } from "./routers/location/locationRouter";

export const app = express();
/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/v1", weatherRouter);
app.use("/v1", locationRouter);


app.use(errorHandler);
app.use(notFoundHandler);