const { Router } = require("express");
const router = Router();

const Doctor = require("../model/doctor");

router.post("/create", async (req, res) => {
	try {
		const doctor = new Doctor(req.body);
		if (!doctor) {
			return res.status(400).json({ message: "Data not found" });
		}
		await doctor.save();
		console.log("Request Body:", req.body);
		return res
			.status(200)
			.json({ message: "Doctor data created successfully" });
	} catch (error) {
		console.error("Error:", error);
		return res.status(500).json({ message: "Error creating doctor data" });
	}
});

router.get("/", async (req, res) => {
	try {
		const doctors = await Doctor.find();
		if (!doctors) {
			return res.status(400).json({ message: "Data not found" });
		}
		return res.status(200).json(doctors);
	} catch (error) {
		console.error("Error:", error);
		return res.status(500).json({ message: "Error fetching doctor data" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const doctors = await Doctor.findById(req.params.id);
		if (!doctors) {
			return res.status(400).json({ message: "Data not found" });
		}
		return res.status(200).json(doctors);
	} catch (error) {
		console.error("Error:", error);
		return res.status(500).json({ message: "Error fetching doctor data" });
	}
});

router.post("/:id", async (req, res) => {
	try {
		const doctors = await Doctor.findById(req.params.id);
		if (!doctors) {
			return res.status(400).json({ message: "Data not found" });
		}
		return res.status(200).json(doctors);
	} catch (error) {
		console.error("Error:", error);
		return res.status(500).json({ message: "Error fetching doctor data" });
	}
});

module.exports = router;
