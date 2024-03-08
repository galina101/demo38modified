import React, { useContext } from "react";
import { Seller } from "../models/Seller";
import { UserContext } from "../App";
interface propsInterface {
    data:Seller
}
export function SingleSeller(props:propsInterface){
    const valueFromContext = useContext(UserContext)
    return (
        <table className="message-table">
            <thead>
            <tr>
                <th>Seller ID</th>
                <th>Seller Name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.data.sellerId}</td>
                <td>{props.data.sellerName}</td>
            </tr>
            </tbody>
        </table>
    )

    {/*<h2>{props.data.message_id}</h2>*/}
    {/*<p style={{fontStyle:"italic"}}>{props.data.time_posted_epoch}</p>*/}
    {/*<p>{props.data.message_text}</p>*/}
    {/*<p>Current user is : {valueFromContext}</p>*/}
}