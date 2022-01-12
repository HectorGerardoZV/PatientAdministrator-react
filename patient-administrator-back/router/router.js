const express = require("express");
const router = express.Router();

//Controllers
const patientController = require("../controller/PatientController");

//Routes
router.get("/allPatients", patientController.allPatients);
router.post("/newPatient", patientController.newPatient);
router.get("/findPatient/:idPatient", patientController.findPatient);
router.put("/editPatient/:idPatient", patientController.editPatient);
router.delete("/deletePatient/:idPatient", patientController.deletePatient);

module.exports = router;