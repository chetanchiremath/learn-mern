require("dotenv").config();

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const doctorRoute = require("./routes/doctor");

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log(`Connected to MongoDB`));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	return res.render("home");
});

app.use("/api/doctor", doctorRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
