import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../adddoctor/add.css";
import toast from "react-hot-toast";

const Edit = () => {
	const initialDoctor = {
		name: "",
		specialization: "",
		location: "",
		phNumber: "",
	};

	const { id } = useParams();
	const navigate = useNavigate();
	const [doctor, setDoctor] = useState(initialDoctor);

	const inputChangeHandler = (e) => {
		const { name, value } = e.target;
		setDoctor({ ...doctor, [name]: value });
	};

	useEffect(() => {
		axios
			.get(`http://localhost:8000/api/getone/${id}`)
			.then((response) => {
				setDoctor(response.data);
			})
			.catch((error) => {
				console.log(error);
				toast.error("Failed to load doctor data", { position: "top-right" });
			});
	}, [id]);

	const submitForm = async (e) => {
		e.preventDefault();
		await axios
			.put(`http://localhost:8000/api/update/${id}`, doctor)
			.then((response) => {
				toast.success(response.data.msg, { position: "top-right" });
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
				toast.error("Failed to update doctor", { position: "top-right" });
			});
	};

	return (
		<div className="container">
			<Link className="back-link" to={"/"}>
				Back
			</Link>
			<h3>Update user</h3>
			<form onSubmit={submitForm}>
				<div className="inputGroup">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						value={doctor.name}
						onChange={inputChangeHandler}
						id="name"
						name="name"
						autoComplete="off"
						placeholder="name"
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="specialization">Specialization</label>
					<input
						type="text"
						value={doctor.specialization}
						onChange={inputChangeHandler}
						id="type"
						name="type"
						autoComplete="off"
						placeholder="Specialization"
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="location">Location</label>
					<input
						type="text"
						value={doctor.location}
						onChange={inputChangeHandler}
						id="location"
						name="location"
						autoComplete="off"
						placeholder="Location"
					/>
				</div>
				<div className="inputGroup">
					<label htmlFor="Phone Number">Phone Number</label>
					<input
						type="text"
						value={doctor.phNumber}
						onChange={inputChangeHandler}
						id="phNumber"
						name="phNumber"
						autoComplete="off"
						placeholder="Phone Number"
					/>
				</div>
				<div className="inputGroup">
					<button specialization="submit">UPDATE Doctor</button>
				</div>
			</form>
		</div>
	);
};

export default Edit;
