import React from 'react'


//Style
import "./style/Patient.css";

const Patient = ({ patient, deletePatient, setPatientInfo }) => {
    const { owner, pet, email, symptoms, _id } = patient;

    const editPatient = () => {
        setPatientInfo(patient);
    }
    return (
        <div className='patient-card'>
            <div className="patient-information">
                <div className="information">
                    <img src="/img/owner.svg" alt="owner" />
                    <p>Owner Name: <span>{owner}</span></p>
                </div>
                <div className="information">
                    <img src="/img/pet.svg" alt="owner" />
                    <p>Pet Name: <span>{pet}</span></p>
                </div>
                <div className="information">
                    <img src="/img/email.svg" alt="owner" />
                    <p>Owner E-mail: <span>{email}</span></p>
                </div>
                <div className="information">
                    <img src="/img/symptoms.svg" alt="owner" />
                    <p>Pet Symptoms: <span>{symptoms}</span></p>
                </div>
            </div>
            <div className="actions">
                <button className='button button-blue'
                    onClick={editPatient}
                >
                    Edit
                </button>
                <button className='button button-red'
                    onClick={() => deletePatient(_id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Patient
