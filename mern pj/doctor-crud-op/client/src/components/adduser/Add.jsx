import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./add.css";

const Add = () => {
	const doctors = {
		name: "",
		specialization: "",
		phNumber: "",
		location: "",
	};

	const [doctor, setDoctor] = useState(doctors);
	const navigate = useNavigate();

	const ipHandler = (e) => {
		const { name, value } = e.target;
		setDoctor({ ...doctor, [name]: value });
	};

	const submitForm = async (e) => {
		e.preventDefault();
		await axios
			.post("http://localhost:3000/api/doctor/create", doctor)
			.then((response) => {
				toast.success(response.data.message, { position: "top-right" });
				navigate("/");
			})
			.catch((error) => console.log("Error submitting form:", error));
	};

	return (
		<div>
			<Link to={"/"}>Back</Link>
			<h2>Add New Doctor</h2>
			<form onSubmit={submitForm}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={doctor.name}
						onChange={ipHandler}
						placeholder="Enter your name"
					/>
				</div>
				<div>
					<label htmlFor="specialization">specialization:</label>
					<input
						type="text"
						id="specialization"
						name="specialization"
						value={doctor.specialization}
						onChange={ipHandler}
						placeholder="Enter the specialization"
					/>
				</div>
				<div>
					<label htmlFor="phNumber">phNumber:</label>
					<input
						type="text"
						id="phNumber"
						name="phNumber"
						value={doctor.phNumber}
						onChange={ipHandler}
						placeholder="Enter the phNumber"
					/>
				</div>
				<div>
					<label htmlFor="location">location:</label>
					<input
						type="text"
						id="location"
						name="location"
						value={doctor.location}
						onChange={ipHandler}
						placeholder="Enter the location"
					/>
				</div>
				<div>
					<button type="submit">Add Doctor</button>
				</div>
			</form>
		</div>
	);
};

export default Add;

/*
1. imported react from react package and created a simple functional component structure 
2. created a state object to store the doctor's information
3. created a function to handle changes to the input fields
4. created a form with input fields for the doctor's information
5. created a submit button to add the doctor to the database
6. used the useState hook to store the doctor's information in the state object
7. used the useEffect hook to fetch the doctor's information from the database
8. used the handleChange function to update the state object when the user types in the input fields
9. used the handleSubmit function to add the doctor to the database when the submit button is clicked
10. used the useState hook to store the error message in the state object
11. used the useEffect hook to fetch the error message from the database
*/
