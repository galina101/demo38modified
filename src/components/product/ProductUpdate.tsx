import React, {FormEvent, useState} from "react";
import { Product } from "../../models/Product";
import {getAllProductsAPI, putProduct} from "../../services/ProductAPIService";

interface ProductSubmitProps{
    updateAllProducts: (newProducts:Product[])=>void;
}
export function ProductUpdate({updateAllProducts}:ProductSubmitProps){
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [sellerId, setSellerId] = useState<number>(0);
    const [productId, setId] = useState<number>(0);

    function userInputHandler(event:React.ChangeEvent<HTMLInputElement>) {
        let textBox = event.target.value;
        switch (event.target.name) {
            case 'productId':
                setId (Number(textBox));
                break;
            case'name':
                setName(textBox);
                break;
            case 'price':
                setPrice(Number(textBox));
                break;
                case 'sellerId':
                setSellerId(Number(textBox));
                break;
            default:
                break;
        }
    }
    async function buttonClickHandler(){
        let product : Product = {
            productId:productId,
            productName:name,
            price:price,
            sellerId:sellerId
        }
        await putProduct(product)
            .catch(error=>console.error('There was a problem with your PUT Product operation:'+ error.message));;
        //wait for the post to complete, then refresh the list
        const response = await getAllProductsAPI();
        const updatedProducts = await response.json();
        updateAllProducts(updatedProducts);
    }
    function formSubmitHandler(event: FormEvent){
        event.preventDefault();
        buttonClickHandler();
    }
    
    return (<>
    <div className={"product-update"}>
        <h1>Update a product</h1>
        <form onSubmit={formSubmitHandler}>
            <label>Product ID:
                <input type="text" name="productId" onChange={userInputHandler} value={productId}></input>
            </label>
            <br></br>
            <label>Product Name:
                <input type="text" name="name" onChange={userInputHandler} value={name}></input>
            </label>
            <br></br>
            <label>Product Price:
                <input type="text" name="price" onChange={userInputHandler} value={price.toFixed(2)}></input>
            </label>
            <br></br>
            <label>Seller ID:
                <input type="text" name="sellerId" onChange={userInputHandler} value={sellerId}></input>
            </label>
            <br></br>
            <button type="submit">Update</button>
        </form>
    </div>
    </>)
}