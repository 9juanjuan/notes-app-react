import React from 'react';
import styles from './NotesList.module.css';



export default function NotesList(props) {
    console.log(props.className)
    console.log(styles.list)
    return (
        <ul className={`${styles.list} ${props.className}`}>
            <li>This</li>
            <li>Is</li>
            <li>The</li>
            <li>Notes</li>
            <li>List</li>
        </ul>
    );

}