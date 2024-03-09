import { Product } from "../models/Product";

const apiBaseURL : string = "http://localhost:9005/"
export function getAllProductsAPI(){
    return fetch(apiBaseURL + "product")
        .then (response => {
            if (!response.ok){
                throw new Error("HTTP error! Status:${response.status}");
            }
            return response;
        })
}
export function postProduct(data:Product){
    return fetch(apiBaseURL + "product",
    {method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)});
}