import React, { useState, useEffect } from 'react'
import Form from './Form'
import PatientList from './PatientList'
import clientAxios from '../config/clientAxios'

//Style
import "./style/Page.css"
const Page = () => {
    const [patients, setPatients] = useState([]);
    const [patient, setPatientInfo] = useState({});

    const queryPatients = async () => {
        const res = await clientAxios.get("/allPatients");
        const { data } = res;
        setPatients(data);
    }

    useEffect(() => {
        queryPatients();
    }, [patients]);
    return (
        <div className='page container'>
            <h1>Patient Administrator <span>WP</span></h1>
            <div className="titles">
                <h2>Patient <span>Information</span></h2>
                <h2>Patient <span>List</span></h2>
            </div>
            <div className="area">
                <Form
                    patients={patients}
                    setPatients={setPatients}
                    patient={patient}
                    setPatientInfo={setPatientInfo}
                />
                <PatientList
                    patients={patients}
                    setPatients={setPatients}
                    setPatientInfo={setPatientInfo}
                />
            </div>
        </div>
    )
}

export default Page
