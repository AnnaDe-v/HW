import React from 'react'
import classes from './Affairs.module.css';
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div>
            {props.affair.name}
            <button className={classes.btnClose} onClick={deleteCallback}>X</button>
            <span>{props.affair.priority}</span>
        </div>
    )
}

export default Affair
