import express from "express";
import { UnsplashController } from "../controllers/unsplashController.js";

const router = express.Router();

const unsplashController = new UnsplashController();

router.get("/unsplash", unsplashController.getUnsplash.bind(unsplashController));

export default router;
