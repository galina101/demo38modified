import React, {FormEvent, SyntheticEvent, useState} from "react";
import { Seller } from "../models/Seller";
import {getAllSellersAPI, postSeller} from "../services/SellerAPIService";
export function SellerSubmit(){
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
        await getAllSellersAPI();
    }
    function formSubmitHandler(event: FormEvent){
        event.preventDefault();
        buttonClickHandler();
    }
    
    return (<>
    <h1>Submit a new seller</h1>
        <form onSubmit={formSubmitHandler}>
    <input onChange={userInputHandler} value={userInput}></input>
    <button onClick={buttonClickHandler}>submit</button>
        </form>
    </>)
}