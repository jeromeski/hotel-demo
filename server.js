const express = require("express");
const morgan = require("morgan");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const dbConfig = require("./db");

// routes
const roomRoutes = require("./routes/rooms");

// middlewares
app.use(morgan("dev"));
app.use("/api/rooms", roomRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running in PORT: ${PORT}`));
