import express from "express"
import weatherRoute from "./weatherRoute.js"
import unsplashRoute from "./unsplashRoute.js"

const router = express.Router()

router.use("/api", weatherRoute)
router.use("/api", unsplashRoute)

export default router