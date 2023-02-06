import Fossil from "../Models/Fossils";
import { Request, Response } from "express";

const router = require("express").Router();

router.get(
  "/fossils",
  async (req: Request, res: Response) => {
    try {
      const results = await Fossil.find();
      res.status(200).send(results);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
);

export default router;
