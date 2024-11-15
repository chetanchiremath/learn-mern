import express from "express";
import {
	createDoctor,
	getAllDoctor,
	updateDoctor,
	deleteDoctor,
	getOne,
} from "../controller/doctorcontroller.js";

const route = express.Router();
route.post("/create", createDoctor);
route.get("/getall", getAllDoctor);
route.put("/update/:id", updateDoctor);
route.get("/getone/:id", getOne);
route.delete("/delete/:id", deleteDoctor);

export default route;
