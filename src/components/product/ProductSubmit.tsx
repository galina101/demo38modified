import React, {FormEvent, SyntheticEvent, useState} from "react";
import { Product } from "../../models/Product";
import {getAllProductsAPI, postProduct} from "../../services/ProductAPIService";

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
            case'price':
                let priceValue = Number(textBox);
                if (isNaN(priceValue)||priceValue<0){
                    //set to default value
                    setPrice(0);
                } else {
                    setPrice(priceValue);
                }
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
            price:price,
            sellerId:sellerId
        }
        await postProduct(product)
            .catch(error=>console.error('There was a problem with your POST Product operation:'+ error.message));;

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
    <div className={"product-submit"}>
        <h1>Create a new product</h1>
        <form onSubmit={formSubmitHandler}>
            <label>Product Name:
                <input type="text" name="name" onChange={userInputHandler} value={name}></input>
            </label>
            <br></br>
            <label>Product Price:
                <input type="number" name="price" onChange={userInputHandler} value={price}></input>
            </label>
            <br></br>
            <label>Seller ID:
                <input type="number" name="sellerId" onChange={userInputHandler} value={sellerId} step="1"></input>
            </label>
            <br></br>
            <button type="submit">Add</button>
        </form>
    </div>
    </>)
}