import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";



function HW12() {
    // const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback

    const onChangeCallback = (e: any) => {
        const value = e.currentTarget.value
        dispatch(changeThemeC(value))
        console.log(`callback: ${value}`)
    }

    return (

        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperButton onClick={(e) => onChangeCallback(e)} value={'dark'}>dark</SuperButton>
            <SuperButton onClick={(e) => onChangeCallback(e)} value={'red'}>red</SuperButton>
            <SuperButton onClick={(e) => onChangeCallback(e)} value={'some'}>some</SuperButton>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
