const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const port = 5000;
const app = express();

const postRoutes = require("./routes/postRoutes");

// const corsOptions = {
//   origin: "https://blog-frontend-02n9.onrender.com", // Frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,
// };

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hiii");
// });

const startServer = async () => {
  try {
    // Wait for the connection to be established
    await db;

    console.log("Connected to the MySQL database.");

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit the process if the connection fails
  }
};

startServer();

app.use("/api", postRoutes);

// app.listen(port, () => {
//   console.log(`server is running on port ${port}`);
// });
