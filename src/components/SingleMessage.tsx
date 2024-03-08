import React, { useContext } from "react";
import { Message } from "../models/Message";
import { UserContext } from "../App";
interface propsInterface {
    data:Message
}
export function SingleMessage(props:propsInterface){
    const valueFromContext = useContext(UserContext)
    return (
        <table className="message-table">
            <thead>
            <tr>
                <th>Message ID</th>
                <th>Time Posted</th>
                <th>Message Text</th>
                <th>Posted By</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.data.message_id}</td>
                <td>{props.data.time_posted_epoch}</td>
                <td>{props.data.message_text}</td>
                <td>{props.data.posted_by}</td>
            </tr>
            </tbody>
        </table>
    )

    {/*<h2>{props.data.message_id}</h2>*/}
    {/*<p style={{fontStyle:"italic"}}>{props.data.time_posted_epoch}</p>*/}
    {/*<p>{props.data.message_text}</p>*/}
    {/*<p>Current user is : {valueFromContext}</p>*/}
}