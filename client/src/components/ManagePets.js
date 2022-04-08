import axios from 'axios';
import React, { useState, useEffect} from 'react';
import Header from './Header';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./style.module.css";
import { confirm } from "react-confirm-box";

const ManagePets = (props) => {

    const {id} = useParams();
    const [pet, setPet] = useState([]);
    // const [petList, setPetList] = useState([]);
    const [likes, setLikes] = useState(0);
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/pets/${id}`)
            .then(res => {
                console.log(res.data);
                setPet(res.data);
                // setLoaded(true);
                // console.log(pet);
            })
    }, [])

    // axios.get("http://localhost:8000/")
    //         .then((allPets) => {
    //             console.log(allPets);
    //             console.log("response for all pets : " + allPets.data);
    //             setPetList(allPets.data);
    //             // console.log(pets);

    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             console.log(err.response)
    //         })
    // Default Delete Pet
    const deletePetReq = (petId) => {
        axios.delete(`http://localhost:8000/pets/${petId}`)
        .then(res =>{
            console.log(res);
            navigate("/")
            }
        )
    }

    // Delete Pet with pop up
    // const onAddoptConfirm = async () => {
    //     const result = await confirm("Are you sure?");
    //     if (result) {
    //       console.log("You click yes!");
    //       return result;
    //     }
    //     console.log("You click No!");
    //   };
    const deletePet = async (petId, name) => {
        const result = await confirm(`Are you sure you want to addopt ${name}?`);
        if (result) {
            console.log("You click yes!");
            deletePetReq(petId);
            return;
        }
        console.log("You click No!");

    }

    const updateLikes = (e) => {

        e.preventDefault();
        let tempLikes = likes;
        tempLikes +=1;
        setLikes(tempLikes);
        setDisable(true);

        }

    return (
        <div>
            <Header />
            <div className={styles.managebar}>
                <h2>Details about: {pet.petName}</h2>
                <button className={styles.delete} onClick={(e) => {deletePet(pet._id, pet.petName)}}>Adopt {pet.petName}</button>
            </div>
            <div className={styles.manage}>
                <div className={styles.manageform}>
                    <div className={styles.marginformcolm}>
                        <p id={styles.managelabels}>Pet Type: </p>
                        <p id={styles.managelabels}>Description: </p>
                        <p id={styles.managelabels}>Skills: </p>
                    </div>
                    <div className={styles.marginformcolm}>
                        <p>{pet.petType}</p>
                        <p>{pet.petDescription}</p>
                        <ul>
                            <li>{pet.skillOne}</li>
                            <li>{pet.skillTwo}</li>
                            <li>{pet.skillThree}</li>
                        </ul>
                    </div>
                </div>
                <p><button className={styles.addlikes} disabled= {disable} onClick={(e) =>{updateLikes(e)}}>Like {pet.petName}</button>{likes} like(s)</p>
            </div>
        </div>
    )
}
export default ManagePets;