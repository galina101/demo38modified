import React, { useContext } from "react";
import { Product } from "../models/Product";
import { UserContext } from "../App";
interface propsInterface {
    data:Product
}
export function SingleProduct(props:propsInterface){
    const valueFromContext = useContext(UserContext)
    return (
        <table className="seller-table">
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Seller ID</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{props.data.productId}</td>
                <td>{props.data.productName}</td>
                <td>{props.data.productPrice}</td>
                <td>{props.data.sellerId}</td>
            </tr>
            </tbody>
        </table>
    )

    {/*<h2>{props.data.message_id}</h2>*/}
    {/*<p style={{fontStyle:"italic"}}>{props.data.time_posted_epoch}</p>*/}
    {/*<p>{props.data.message_text}</p>*/}
    {/*<p>Current user is : {valueFromContext}</p>*/}
}