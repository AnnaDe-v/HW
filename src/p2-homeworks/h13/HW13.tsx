import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./api/RequestAPI";


function HW13() {
    const [check, setCheck] = useState<boolean>(false)
    const [postStatus, setPostStatus] = useState<string>('')
    const [errorRequest, setErrorRequest] = useState<boolean>(false)

    const submitPost = () => {
        requestsAPI.postData(check)
            .then(response => {
                console.log(response.data)
                setPostStatus(response.data.errorText)
                setErrorRequest(false)
            })
            .catch(rej => {
                console.log({...rej})
                setPostStatus({...rej}.response.data.errorText)
                setErrorRequest(true)
            })
    }

    return (

        <div className={'wrapper'} style={{boxSizing: 'border-box'}}>
            <hr/>
            homework 13
            <div>
                <SuperCheckbox onChange={e => setCheck(e.currentTarget.checked)}>Magic</SuperCheckbox>
            </div>
            <div>
                <SuperButton onClick={submitPost}>Post data</SuperButton>
            </div>
            {
                postStatus  ? (<div style={{
                color: errorRequest ? 'red' : 'darkgreen',
                fontSize: '20px',
                display: 'inline-block',
                padding: '0px 10px',
            }}>{postStatus}</div>) : (<div style={{display: 'inline-block', backgroundColor: 'transparent', height: '10px', width: '100%'}}> </div>)
            }
            <hr/>
        </div>
    )
}

export default HW13