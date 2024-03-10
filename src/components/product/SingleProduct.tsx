import React, {FormEvent, useContext, useState} from "react";
import { Product } from "../../models/Product";
import { UserContext } from "../../App";
import {deleteProductWithRefresh} from "./ProductDelete";


interface propsInterface {
    product:Product;
    data:Product;
    updateAllProducts: (newProducts: Product[]) => void;
    toggleUpdate: () => void;
}

export function SingleProduct({product, data, updateAllProducts, toggleUpdate}:propsInterface){
    const valueFromContext = useContext(UserContext);
    const [showOptions, setShowOptions] = useState(false);
    const [isUpdateVisible, setIsUpdateVisible] = useState<boolean>(false);
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    }

    const handleUpdateClick = () => {
        setIsUpdateVisible(!isUpdateVisible);
        toggleUpdate();
    }
    return (
        <table className="seller-table">
            <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th>Seller ID</th>
                <th>More Options</th>
                {showOptions && <th>Update</th>}
                {showOptions && <th>Delete</th>}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{data.productId}</td>
                <td>{data.productName}</td>
                <td>${data.price.toFixed(2)}</td>
                <td>{data.sellerId}</td>
                <td><button onClick={toggleOptions}>More Options</button></td>
                {/* if button is selected then show 2 more cells with Update and Delete options */}
                {showOptions && <td><button onClick={handleUpdateClick}>{isUpdateVisible ? 'Hide Update' : 'Update'} </button></td>}
                {showOptions && <td><button onClick={()=> deleteProductWithRefresh(data, updateAllProducts)}>Delete</button></td>}
            </tr>
            </tbody>
        </table>
    )

    {/*<h2>{props.data.message_id}</h2>*/}
    {/*<p style={{fontStyle:"italic"}}>{props.data.time_posted_epoch}</p>*/}
    {/*<p>{props.data.message_text}</p>*/}
    {/*<p>Current user is : {valueFromContext}</p>*/}
}