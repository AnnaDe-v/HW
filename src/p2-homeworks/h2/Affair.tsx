import React from 'react'
import classes from './Affairs.module.css';
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: Array<AffairType> // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
            {props.affair.name}
            <button className={classes.btnClose} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
