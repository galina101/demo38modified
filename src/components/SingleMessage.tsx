import React, { useContext } from "react";
import { Message } from "../models/Message";
import { UserContext } from "../App";
interface propsInterface {
    data:Message
}
export function SingleMessage(props:propsInterface){
    const valueFromContext = useContext(UserContext)
    return (<>
    <h2>{props.data.message_id}</h2>
    <p style={{fontStyle:"italic"}}>{props.data.time_posted_epoch}</p>
    <p>{props.data.message_text}</p>
    <p>Current user is : {valueFromContext}</p>
    </>)
}