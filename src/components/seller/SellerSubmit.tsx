import React, {FormEvent, SyntheticEvent, useState} from "react";
import { Seller } from "../../models/Seller";
import {getAllSellersAPI, postSeller} from "../../services/SellerAPIService";

interface SellerSubmitProps{
    updateAllSellers: (newSellers:Seller[])=>void;
}
export function SellerSubmit({updateAllSellers}:SellerSubmitProps){
    const [userInput, setUserInput] = useState<string>("")
    function userInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    async function buttonClickHandler(){
        let seller : Seller = {
            sellerId:1,
            sellerName:userInput
        }
        await postSeller(seller);
        //wait for the post to complete, then refresh the list
        const response =await getAllSellersAPI();
        const updatedSellers = await response.json();
        updateAllSellers(updatedSellers);
        //await getAllSellersAPI();
    }
    function formSubmitHandler(event: FormEvent){
        event.preventDefault();
        buttonClickHandler();
    }
    
    return (<>
    <h1>Submit a new seller</h1>
        <form onSubmit={formSubmitHandler}>
            <input onChange={userInputHandler} value={userInput}></input>
            <button type="submit">Add</button>
        </form>
    </>)
}