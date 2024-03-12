import React, {FormEvent, SyntheticEvent, useState} from "react";
import { Seller } from "../../models/Seller";
import {getAllSellersAPI, postSeller} from "../../services/SellerAPIService";

interface SellerSubmitProps{
    updateAllSellers: (newSellers:Seller[])=>void;
}
export function SellerSubmit({updateAllSellers}:SellerSubmitProps){
    const [userInput, setUserInput] = useState<string>("")
    const [error, setError] = useState<string | null>(null);

    function userInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    //post a new seller and update a list of sellers
    async function buttonClickHandler(){
        let seller : Seller = {
            sellerId:1,
            sellerName:userInput
        }

        await postSeller(seller)
            .catch((error: any) => {
                if (error.response && error.response.status === 400) {
                    alert('Error: ' + error.response.data);
                } else {
                    console.log('There was a problem with your POST Seller operation:'+ error.message);
                }
            });

        //wait for the post to complete, then refresh the list
        const response =await getAllSellersAPI();
        const updatedSellers = await response.json();
        updateAllSellers(updatedSellers);


    }

    //form submission is handled by React code, not the default browser behavior
    function formSubmitHandler(event: FormEvent){
        event.preventDefault();
        buttonClickHandler();
    }
    
    return (<>
        <div className={"create-seller-form"}>
    <h1>Create a new seller</h1>
        <form onSubmit={formSubmitHandler}>
            <input onChange={userInputHandler} value={userInput}></input>
            <button type="submit">Add</button>
        </form>
        </div>
    </>)
}