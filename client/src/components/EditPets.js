import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import styles from "./style.module.css";
import Form from "./Form";
import { useNavigate, useParams } from 'react-router-dom';

const EditPets = (props) => {

    const {id} = useParams();
    const [pet, setPet] = useState([]);
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000//pets/${id}/edit`)
            .then(res => {
                console.log(res.data);
                setPet(res.data);
                setLoaded(true);
                // console.log(pet);
            })
    }, [])

    const updatePets = petsParam => {
        console.log(petsParam);
        axios.put(`http://localhost:8000//pets/${id}/edit`, petsParam)
            
            .then(res => {console.log(res)
                navigate("/");})
        }

    return (
        <div>
            <Header />
            {
            loaded && (
            <div>
                <h2>Edit {pet.petName}</h2>
                <Form 
                addPet={"Edit Pet"} 
                onSubmitProp={updatePets} 
                petsName={pet.petName} 
                petsType={pet.petType} 
                petsDescription={pet.petDescription} 
                skillsOne={pet.skillOne} 
                skillsTwo={pet.skillTwo} 
                skillsThree={pet.skillThree}/>
            </div>)
            }
        </div>
    )
}
export default EditPets;