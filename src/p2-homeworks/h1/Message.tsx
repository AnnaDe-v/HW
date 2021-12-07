import React from 'react';
import classes from './Message.module.css'

export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}>
            <div className={classes.messageWrap}>

                <div className={classes.avatar}>
                    <img src={props.avatar}/>
                </div>


                <div className={classes.name}>
                    {props.name}
                </div>

                <div className={classes.textMessage}>
                    {props.message}
                </div>

                <div className={classes.time}>
                    {props.time}
                </div>

            </div>
        </div>
    )
}

export default Message
