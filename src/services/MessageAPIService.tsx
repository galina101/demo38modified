import { Message } from "../models/Message";

const apiBaseURL : string = "https://641496c8e8fe5a3f3a0ad56a.mockapi.io/api/"
export function getAllMessagesAPI(){
    return fetch(apiBaseURL + "message");
}
export function postMessageAPI(data:Message){
    return fetch(apiBaseURL + "message",
    {method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)});
}