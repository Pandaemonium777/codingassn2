const express = require("express");

const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

app.use(express.json());

let db = null;

const path = require("path");
const dbPath = path.join(__dirname, "twitterClone.db");

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("listening at 3000");
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

initializeDbAndServer();

module.exports = app;
