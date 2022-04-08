import axios from 'axios';
import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import styles from "./style.module.css";
import Form from "./Form";
import { useNavigate } from 'react-router-dom';

const AddPets = () => {

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [petList, setPetList] = useState([]);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createPets = petsParam => {
        console.log(petsParam);
        axios.post('http://localhost:8000/pets', petsParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setPetList([...petList, res.data])
                navigate("/");

            })
            .catch((err)=>{
                console.log(err);
                console.log(err.response.data);
                errors.push(err.response.data.errors);
                
            })
        // console.log(errors);
        }

    return (
        <div>
            <Header />
            <h2>Know a pet needing a home?</h2>
            {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
            <Form addPet={"Add Pet"} onSubmitProp={createPets} petsName={petName} petsType={petType} petsDescription={petDescription} skillsOne={skillOne} skillsTwo={skillTwo} skillsThree={skillThree} errorArr= {errors}/>
            
        </div>
    )
}
export default AddPets