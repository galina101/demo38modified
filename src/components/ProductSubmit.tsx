import React, {FormEvent, SyntheticEvent, useState} from "react";
import { Product } from "../models/Product";
import {getAllProductsAPI, postProduct} from "../services/ProductAPIService";

interface ProductSubmitProps{
    updateAllProducts: (newProducts:Product[])=>void;
}
export function ProductSubmit({updateAllProducts}:ProductSubmitProps){
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [sellerId, setSellerId] = useState<number>(0);

    function userInputHandler(event:React.ChangeEvent<HTMLInputElement>) {
        let textBox = event.target.value;
        switch (event.target.name) {
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
            productId:1,
            productName:name,
            productPrice:price,
            sellerId:sellerId
        }
        await postProduct(product);
        //wait for the post to complete, then refresh the list
        const response =await getAllProductsAPI();
        const updatedProducts = await response.json();
        updateAllProducts(updatedProducts);
    }
    function formSubmitHandler(event: FormEvent){
        event.preventDefault();
        buttonClickHandler();
    }
    
    return (<>
    <div className={"product-submit"}>
        <h1>Submit a new product</h1>
        <form onSubmit={formSubmitHandler}>
            <label>Product Name:
                <input type="text" name="name" onChange={userInputHandler} value={name}></input>
            </label>
            <br></br>
            <label>Product Price:
                <input type="text" name="price" onChange={userInputHandler} value={price}></input>
            </label>
            <br></br>
            <label>Seller ID:
                <input type="text" name="sellerId" onChange={userInputHandler} value={sellerId}></input>
            </label>
            <br></br>
            <button type="submit">Add</button>
        </form>
    </div>
    </>)
}