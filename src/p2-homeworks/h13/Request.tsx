import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";


function Request() {
    const [check, setCheck] = useState<boolean>(true)
    const [request, setRequest] = useState<string>('')

    const requestHandler = async () => {
        await fetch(`https://neko-cafe-back.herokuapp.com/auth/test, body: {success: ${check}}`)
        .then((res) => {
            return res.json()
        }).then((data) => {
                console.log(data)
                setRequest(`URL: ${data.url}, error: ${data.error}`)
        }).catch(error =>
                console.log(error.response ? error.response.data.errorText : error.message)
            )
    }


    return (
        <div>
            API
            <SuperButton onClick={requestHandler}>request</SuperButton>
            <SuperCheckbox onClick={() => setCheck(!check)} checked={check}>poke</SuperCheckbox>
            <div>{request}</div>
        </div>
    );
}

export default Request;


