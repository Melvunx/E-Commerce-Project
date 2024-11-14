import { Request, Response } from "express";
import database from "../config/database";

export function getUser(req: Request, res: Response) {
  database.query("Select * from account", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send({ message: "Error fetching user" });
    }
    console.log(results);
    res.status(200).send({ results });
  });
}
