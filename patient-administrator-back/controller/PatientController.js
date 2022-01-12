const Patient = require("../models/Patient");


exports.allPatients = async(req,res)=>{
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (error) {
        
    }
}

exports.newPatient = async(req,res)=>{
    try {
        const patient = new Patient(req.body);
        await patient.save();

        res.json({message: "Patient added"});
    } catch (error) {
        res.json({error: "Patient couldn't be added"});
    }
}

exports.findPatient = async(req,res)=>{
    try {
        const {idPatient} = req.params;
        const patient = await Patient.findOne({_id: idPatient});
        res.json(patient);
    } catch (error) {
        res.json({error: "The patient doesn't exist"});
    }
}

exports.editPatient = async(req,res)=>{
    try {
        const {idPatient} = req.params;
        const newPatient = req.body;
        const patient = await Patient.findOneAndUpdate({_id:idPatient},newPatient,{new:true});

        if(!patient){
            res.json({error: "The patient couldn't be edited"});
        }else{
            res.json({message: "Patient edited"});
        }
    } catch (error) {
        res.json({error: "The patient couldn't be edited"});
    }
}

exports.deletePatient = async(req,res)=>{
    try {
        const {idPatient} = req.params;
        await Patient.findOneAndDelete({_id: idPatient});
        res.json({message: "Patient deleted"});
    } catch (error) {
        res.json({error: "The patient couldn't be deleted"});
    }
}