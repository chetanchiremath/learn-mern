import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./add.css";

const Add = () => {
	const doctors = {
		name: "",
		Specialization: "",
		Location: "",
		phNumber: "",
	};

	const [doctor, setDoctor] = useState(doctors);
	const navigate = useNavigate();

	const inputHandler = (e) => {
		const { name, value } = e.target;
		setDoctor({ ...doctor, [name]: value });
	};

	const submitForm = async (e) => {
		e.preventDefault();
		await axios
			.post("http://localhost:8000/api/create", doctor)
			.then((response) => {
				toast.success(response.data.msg, { position: "top-right" });
				navigate("/");
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="container">
			<Link to="/" className="back-link">
				Back
			</Link>
			<h3>Add New Doctor</h3>
			<form onSubmit={submitForm}>
				<div>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						onChange={inputHandler}
						id="name"
						name="name"
						placeholder="Enter the Name of doctor"
					/>
				</div>
				<div>
					<label htmlFor="type">Specialization</label>
					<input
						type="text"
						onChange={inputHandler}
						id="type"
						name="type"
						placeholder="Specialization"
					/>
				</div>
				<div>
					<label htmlFor="location">Location</label>
					<input
						type="text"
						onChange={inputHandler}
						id="location"
						name="location"
						placeholder="Location"
					/>
				</div>
				<div>
					<label htmlFor="phNumber">Phone Number</label>
					<input
						type="text"
						onChange={inputHandler}
						id="phNumber"
						name="phNumber"
						placeholder="Phone Number"
					/>
				</div>
				<div>
					<button type="submit">ADD Doctor</button>
				</div>
			</form>
		</div>
	);
};

export default Add;
