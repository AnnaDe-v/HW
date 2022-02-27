import React, {useState} from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";



function HW12() {
    // const theme = 'some'; // useSelector

    const theme = useSelector<AppStoreType, string>(state => state.theme.theme);
    const themes = useSelector<AppStoreType, string[]>(state => state.theme.themes);

    const dispatch = useDispatch()


    // useDispatch, onChangeCallback

    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[themes + '-text']}>
                homeworks 12
                <div>
                    <SuperRadio
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}
                        type='radio'
                    />
                </div>

            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>
        </div>
    );
}

export default HW12;
