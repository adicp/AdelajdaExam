import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from "./style.module.css";
import Header from './Header';

const AllPets = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/")
            .then((allPets) => {
                console.log(allPets);
                console.log(allPets.data);
                setPets(allPets.data);

            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
            })
    },[])

    return (
        <div className={styles.allcomands}>
            <Header pageInd = {"allpets"}/>
            <h2>This pets are looking for a good home</h2>
            <div className={styles.commandbox}>
                <div className={styles.commandrow}>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Actions</p>
                </div>
                {
                    pets.map((pets, index) => (

                        index % 2 === 0 ?
                        <div key={index} className={styles.listgray}>
                        {/* <div key={index}> */}
                            <p>{pets.petName}</p> 
                            <p>{pets.petType}</p>
                            <p><Link to ={`/pets/${pets._id}`}>details</Link> | <Link to = {`/pets/${pets._id}/edit`}>edit</Link></p>
                        </div> :
                        <div key={index} className={styles.list}>
                            {/* <div key={index}> */}
                            <p>{pets.petName}</p> 
                            <p>{pets.petType}</p>
                            <p><Link to ={`/pets/${pets._id}`}>details</Link> | <Link to = {`/pets/${pets._id}/edit`}>edit</Link></p>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )

}
export default AllPets;