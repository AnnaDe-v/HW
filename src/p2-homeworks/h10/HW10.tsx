import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from '../h10/HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, stateType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";

function HW10() {

    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loadingSt)
    const dispatch = useDispatch()


    const setLoading = () => {

        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 700)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ?
                    <div className={style.spinner}>
                        <div className={style.cssload_fond}>
                            <div className={style.cssload_container_general}>
                                <div className={style.cssload_internal}>
                                    <div className={`${style.cssload_ballcolor} ${style.cssload_ball_1}`}></div>
                                </div>
                                <div className={style.cssload_internal}>
                                    <div className={`${style.cssload_ballcolor} ${style.cssload_ball_2}`}></div>
                                </div>
                                <div className={style.cssload_internal}>
                                    <div className={`${style.cssload_ballcolor} ${style.cssload_ball_3}`}></div>
                                </div>
                                <div className={style.cssload_internal}>
                                    <div className={`${style.cssload_ballcolor} ${style.cssload_ball_4}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                 :
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>

            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
