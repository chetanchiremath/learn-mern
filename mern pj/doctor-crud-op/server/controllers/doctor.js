const Doctor = require("../model/doctor");

async function createDoctor(req, res) {
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
}

async function getAllDoctors(req, res) {
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
}

async function getDoctorById(req, res) {
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
}

async function updateDoctorById(req, res) {
	try {
		const id = req.params.id;
		const doctor = await Doctor.findById(id);
		if (!doctor) {
			return res.status(400).json({ message: "Doctor data not found" });
		}
		res.status(200).json(doctor);
		const updatedData = await Doctor.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json(updatedData);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

async function deleteDoctorById(req, res) {
	try {
		const id = req.params.id;
		const doctor = await Doctor.findById(id);
		if (!doctor) {
			return res.status(400).json({ message: "Doctor data not found" });
		}
		res.status(200).json(doctor);
		const updatedData = await Doctor.findByIdAndDelete(id, req.body, {
			new: true,
		});
		res.status(200).json(updatedData);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
}

module.exports = {
	createDoctor,
	getAllDoctors,
	getDoctorById,
	updateDoctorById,
	deleteDoctorById,
};
