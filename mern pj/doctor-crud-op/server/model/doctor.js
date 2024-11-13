const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
		},
		name: {
			type: String,
			required: true,
		},
		specialization: {
			type: String,
			required: true,
		},
		phNumber: {
			type: Number,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Doctor = model("doctor", doctorSchema);

module.exports = Doctor;
