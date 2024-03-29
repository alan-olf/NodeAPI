import express, { Express, Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";

//For env File
dotenv.config({ path:__dirname+ `/.env.${process.env.NODE_ENV}` });

const nodeEnv = process.env.NODE_ENV;
const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use("/api/v1/", router);
app.listen(port, () => {
  console.log(
    `==> start listening *** port: #${port} *** node_env: ${nodeEnv} *** environment: ${environment}`
  );
});
