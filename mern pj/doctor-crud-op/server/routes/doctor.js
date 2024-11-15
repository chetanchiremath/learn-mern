const { Router } = require("express");
const {
	createDoctor,
	getAllDoctors,
	getDoctorById,
	updateDoctorById,
	deleteDoctorById,
} = require("../controllers/doctor.js");
const router = Router();

router.post("/create", createDoctor);
router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.put("update/:id", updateDoctorById);
router.delete("/delete/:id", deleteDoctorById);

module.exports = router;
