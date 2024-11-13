const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const doctorRoute = require("./routes/doctor");

mongoose
	.connect("mongodb://localhost:27017/doctor-curd")
	.then(() => console.log(`Connected to MongoDB`));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    return res.render("home");
})

app.use("/doctor", doctorRoute);

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));
