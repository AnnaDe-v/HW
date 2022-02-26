import React from 'react'
// import Header from './Header'
import RoutesC, {PATH} from './RoutesC'
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import style from "./Header.module.css";

function HW5() {
    return (
        <div>
            <Router>
                <div className={style.header}>
                    <NavLink to={PATH.PRE_JUNIOR} className={style.link}>pre-junior</NavLink>
                    <NavLink to={PATH.JUNIOR} className={style.link}>junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} className={style.link}>junior+</NavLink>
                    <div className={style.block}> →</div>
                </div>
                <RoutesC/>
            </Router>
        </div>
    )
}

export default HW5
