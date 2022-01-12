import React from 'react'
import Patient from './Patient'
import clientAxios from '../config/clientAxios';


//Style
import "./style/PatientList.css";

const PatientList = ({patients,setPatients,setPatientInfo}) => {
    const deletePatient = async(id)=>{
        const filter = patients.filter(patient=>patient._id!==id);
        const patientDelete = await clientAxios.delete(`/deletePatient/${id}`);
        const {data}= patientDelete;

        if(data.message){
            setPatients(filter);
        }
    }
    return (
        <div>
            <ul className='patientList'>
                {
                    patients.map(patient=>(
                        <Patient
                            key={patient._id}
                            patient={patient}
                            setPatientInfo={setPatientInfo}
                            deletePatient={deletePatient}

                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default PatientList
