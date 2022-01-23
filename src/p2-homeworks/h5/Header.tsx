import React from 'react'
import { NavLink } from 'react-router-dom';
import {PATH} from './RoutesC';
import style from './Header.module.css'

function Header() {

    return (
        <div className={style.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={style.link}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={style.link}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={style.link}>junior+</NavLink>
            <div className={style.block}> →</div>
        </div>
    )
}

export default Header
