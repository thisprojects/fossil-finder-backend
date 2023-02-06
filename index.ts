import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fossils from "./Routes/getFossils";
import { connectDB } from "./handleMongoConnection";

dotenv.config();

export const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Fossil Finder!");
});

//MIDDLEWARE
app.use(express.json());
app.use(cors({ origin: "*" }));

//ROUTES
app.use("/api/get", fossils);

if (process.env.NODE_ENV !== "test") {
  connectDB();
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  });
}
