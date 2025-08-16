import express from "express"
import {WeatherController} from "../controllers/weatherController.js"

const router = express.Router()

const weatherController = new WeatherController()

router.get("/weather", weatherController.getWeather.bind(weatherController))

export default router