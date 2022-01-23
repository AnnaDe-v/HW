import React, {useEffect, useState} from "react";
import s from "./HW13.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";


function Request() {
    const [check, setCheck] = useState(false)


    useEffect(() => {
        fetch('https://neko-cafe-back.herokuapp.com/auth/test, body: {success: true}')
    }, [])

    return (
        <div>
           API
            <SuperButton>request</SuperButton>
            <SuperCheckbox onClick={() => setCheck(!check)} checked={check}>poke</SuperCheckbox>
        </div>
    );
}

export default Request;
