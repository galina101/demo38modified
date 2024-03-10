import { Seller } from "../models/Seller";

const apiBaseURL : string = "http://localhost:9005/"
export function getAllSellersAPI(){
    return fetch(apiBaseURL + "seller")
        .then (response => {
            if (!response.ok){
                throw new Error("HTTP error! Status:${response.status}");
            }
            return response;
        })
}
export function postSeller(data:Seller){
    return fetch(apiBaseURL + "seller",
    {method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)});
}

export function updateSeller(data:Seller){
    return fetch(apiBaseURL + "seller",
        {method:"PUT",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)});
}