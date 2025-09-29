import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors());

const db = new pg.Pool({ connectionString: process.env.DB_CONN });

app.get("/", (req, res) => {
  res.status(200).json("Go team!!");
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
