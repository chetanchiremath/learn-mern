import doctor from "../model/doctormodel.js";

export const createDoctor = async (req, res) => {
	try {
		const doctorData = doctor(req.body);
		if (!doctorData) {
			return res.status(404).json({ message: "Doctor data not found" });
		}
		await doctorData.save();
		res.status(200).json({ message: "Successfully created doctor" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const getAllDoctor = async (req, res) => {
	try {
		const doctorData = await doctor.find();
		if (!doctorData) {
			return res.status(404).json({ message: "Doctor data not found" });
		}

		res.status(200).json(doctorData);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const updateDoctor = async (req, res) => {
	try {
		const id = req.params.id;
		const doctorData = await doctor.findById(id);
		if (!doctorData) {
			return res.status(404).json({ msg: "Doctor data not found" });
		}

		const updatedData = await doctor.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		res.status(200).json(updatedData);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const deleteDoctor = async (req, res) => {
	try {
		const id = req.params.id;
		const doctorData = await doctor.findById(id);
		if (!doctorData) {
			return res.status(404).json({ msg: "Doctor data not found" });
		}

		const deletedData = await doctor.findByIdAndDelete(id);
		return res.status(200).json({ msg: "Deleted Successfully!" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
export const getOne = async (req, res) => {
	try {
		const id = req.params.id;
		const doctorData = await doctor.findById(id);
		if (!doctorData) {
			return res.status(404).json({ msg: "Doctor data not found" });
		}
		res.status(200).json(doctorData);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
