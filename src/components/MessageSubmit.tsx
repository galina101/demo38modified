import React, { SyntheticEvent, useState } from "react";
import { Message } from "../models/Message";
import { postMessageAPI } from "../services/MessageAPIService";
export function MessageSubmit(){
    const [userInput, setUserInput] = useState<string>("")
    function userInputHandler(event:SyntheticEvent){
        let textBox = event.target as HTMLTextAreaElement;
        setUserInput(textBox.value);
    }
    function buttonClickHandler(){
        let message : Message = {
            posted_by:1,
            message_text:userInput
        }
        postMessageAPI(message);
    }
    
    return (<>
    <h1>Submit a new message</h1>
    <input onChange={userInputHandler} value={userInput}></input>
    <button onClick={buttonClickHandler}>submit</button>
    </>)
}