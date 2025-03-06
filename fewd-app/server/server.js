const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors()); // ✅ Add this line
app.use(express.json());

app.get("/api/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: "Database query failed" });
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));
