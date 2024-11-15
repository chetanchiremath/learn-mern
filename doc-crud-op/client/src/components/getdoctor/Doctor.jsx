import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./doctor.css";
import { Link } from "react-router-dom";

const Doctor = () => {
	const [doctors, setDoctors] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:8000/api/getall");
				setDoctors(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				toast.error("Failed to fetch doctors", { position: "top-right" });
			}
		};
		fetchData();
	}, []);

	const deleteDoctor = async (doctorId) => {
		try {
			const response = await axios.delete(
				`http://localhost:8000/api/delete/${doctorId}`
			);
			setDoctors((prevDoctors) =>
				prevDoctors.filter((doctor) => doctor._id !== doctorId)
			);
			toast.success(response.data.msg, { position: "top-right" });
		} catch (error) {
			console.error("Error deleting doctor:", error);
			toast.error("Failed to delete doctor", { position: "top-right" });
		}
	};

	return (
		<div className="doctorTable">
			<Link to="/add" className="addButton">
				Add Doctor
			</Link>
			<table>
				<thead>
					<tr>
						<th>S.No.</th>
						<th>Doctor Name</th>
						<th>Specialization</th>
						<th>Location</th>
						<th>Phone Number</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{doctors.map((doctor, index) => (
						<tr key={doctor._id}>
							<td>{index + 1}</td>
							<td>{doctor.name}</td>
							<td>{doctor.type}</td>
							<td>{doctor.location}</td>
							<td>{doctor.phNumber}</td>
							<td className="actionButtons">
								<button
									onClick={() => deleteDoctor(doctor._id)}
									className="deleteButton"
								>
									Delete
								</button>
								<Link to={`/edit/${doctor._id}`} className="editButton">
									Edit
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Doctor;
