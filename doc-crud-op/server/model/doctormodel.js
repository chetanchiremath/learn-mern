import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	location: { type: String, required: true },
	phNumber: { type: String, required: true },
});

export default mongoose.model("doctor", doctorSchema);
