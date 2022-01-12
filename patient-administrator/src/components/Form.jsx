import React, {useState,useEffect} from 'react'
import clientAxios from '../config/clientAxios';

//Style
import "./style/Form.css";
const Form = ({patient,setPatientInfo}) => {
    const [patientOBJ, setInfo] = useState({
        owner: "",
        pet: "",
        email: "",
        symptoms: ""
    });
    const [edit, isEdit]= useState(false);

    useEffect(()=>{
        if(Object.keys(patient).length!==0){
            setInfo(patient);
            isEdit(true);
        }
    },[patient]);

    const clearForm=() =>{
        setInfo({
            owner: "",
            pet: "",
            email: "",
            symptoms: ""
        });
    }
    const readInput = e=>{
        const info = {
            ...patientOBJ,
            [e.target.name]: e.target.value
        }
        setInfo(info);
    }
    const addPatient = async()=>{
        const res = await clientAxios.post("/newPatient", patientOBJ);
        const {data} = res;
        clearForm();
    }
    const editPatient = async()=>{
        const res = await clientAxios.put(`/editPatient/${patientOBJ._id}`, patientOBJ);
        const {data} = res;
       clearForm();
       isEdit(false);
    }
    const submit = e =>{
        e.preventDefault();
        if(!edit){
            addPatient();
        }else{
            editPatient();
        }
    }
   

    return (
        <div>
            <form className="form"
                onSubmit={submit}
            >
                <fieldset>
                    <div className="input">
                        <label htmlFor="owner">Owner</label>
                        <input type="text" id="owner" name='owner' placeholder='Name' 
                        value={patientOBJ.owner}
                        onInput={readInput}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="pet">Pet Name</label>
                        <input type="text" id="pet" name='pet' placeholder='Name' 
                        value={patientOBJ.pet}
                        onInput={readInput}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="email">Owner E-mail</label>
                        <input type="email" id="email" name='email' placeholder='E-mail'
                        value={patientOBJ.email} 
                        onInput={readInput}
                        />
                    </div>
                    <div className="input">
                        <label htmlFor="symptoms">Pet Symptoms</label>
                        <textarea id="symptoms" name='symptoms' placeholder='Symptoms'
                        value={patientOBJ.symptoms} 
                        onInput={readInput}
                        />
                    </div>
                </fieldset>
                <div className="submit">
                    <input type="submit" value={edit?"Edit Patient":"Add New Patient"}/>
                </div>
            </form>
        </div>
    )
}

export default Form
