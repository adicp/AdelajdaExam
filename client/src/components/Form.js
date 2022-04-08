import React, {useState} from 'react';
import styles from './style.module.css'

const Form = (props) => {

    const { addPet, petsName, petsType, petsDescription, skillsOne, skillsTwo, skillsThree, onSubmitProp } = props;
    // console.log(skillTwo);
    const [petName, setPetName] = useState(petsName);
    const [petType, setPetType] = useState(petsType);
    const [petDescription, setPetDescription] = useState(petsDescription);
    const [skillOne, setSkillOne] = useState(skillsOne);
    const [skillTwo, setSkillTwo] = useState(skillsTwo);
    const [skillThree, setSkillThree] = useState(skillsThree);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log("enters Form submit handler");
        const petsParams = {};
        if (petName !==petsName) {
            petsParams.petName= petName;
        }
        if (petType !==petsType) {
            petsParams.petType= petType;
        }
        if (petDescription !== petsDescription) {
            petsParams.petDescription= petDescription;
        }
        if (skillOne !== skillsOne) {
            petsParams.skillOne= skillOne;
        }
        if (skillTwo !== skillsTwo) {
            petsParams.skillTwo= skillTwo;
        }
        if (skillThree !== skillsThree) {
            petsParams.skillThree= skillThree;
        }
        
        onSubmitProp(petsParams);
    }



    return (
    <div className={styles.formmain}>
         {/* {errors.map((err, index) => <p key={index}>{err}</p>} */}
        <div className={styles.form} >
            <div className = {styles.formcolumn}>
                <label>Pet Name:</label>
                <input type='text' value={petName} onChange = {(e) => setPetName(e.target.value)} />
                <label>Pet Type:</label>
                <input type='text' value={petType} onChange = {(e) => setPetType(e.target.value)} />
                <label>Pet Description:</label>
                <input type='text' value={petDescription} onChange = {(e) => setPetDescription(e.target.value)} />
            </div>
            <div className = {styles.formcolumn}>
                <p>Skills (optional):</p>
                <label>Skill 1:</label>
                <input type='text' value={skillOne} onChange = {(e) => setSkillOne(e.target.value)} />
                <label>Skill 2:</label>
                <input type='text' value={skillTwo} onChange = {(e) => setSkillTwo(e.target.value)} />
                <label>Skill 3:</label>
                <input type='text' value={skillThree} onChange = {(e) => setSkillThree(e.target.value)}/>
            </div>
            </div>
        <button onClick={onSubmitHandler}>{addPet}</button>
        </div>
    )

}

export default Form;