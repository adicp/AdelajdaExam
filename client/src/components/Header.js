import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css'

const Header = (props) => {
    const {pageInd} = props;
    return (
        <header className={styles.header}>
            <h1>Pet Shelter</h1>
            {
                pageInd === "allpets" ?
                <Link to = "/pets/new">add a pet to shelter</Link> :
                <Link to = "/">back to home</Link> 
            }
        </header> 
    )
}

export default Header;