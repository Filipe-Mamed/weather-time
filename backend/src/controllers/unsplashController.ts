import { Request, Response } from "express";
import { HttpStatus } from "../constants/httpStatus.js";
import { getUnsplash } from "../services/unsplashService.js";
import chalk from "chalk";

export class UnsplashController {
  async getUnsplash(req: Request, res: Response) {
    try {
      const city = req.query.city as string;
      const data = await getUnsplash(city);
      res.status(HttpStatus.OK_200).json(data);
    } catch (error: any) {
      console.log((chalk.red({ message: `Houve um erro ao buscar imagens ${error.message}` })))
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR_500)
        .json({ message: "Houve um erro ao buscar imagens" });
    }
  }
}
