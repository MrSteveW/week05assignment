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

app.get("/wines", async (req, res) => {
  const wines = await db.query("SELECT grape_variety FROM wines");
  res.status(200).json(wines.rows);
});

app.get("/details/:grape_variety", async (req, res) => {
  const { grape_variety } = req.params;
  const result = await db.query(
    "SELECT * FROM wines WHERE grape_variety = $1",
    [grape_variety]
  );
  return res.status(200).json(result.rows);
});

app.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
