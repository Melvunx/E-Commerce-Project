import express, { Request, Response } from "express";
import database from "./config/database";

database.connect((error) => {
  if (error) throw error;
  console.log("Connected to database");
});


const app = express();

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Typescript");
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);

export default database;
