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
export async function postSeller(data:Seller){
    try {
        const response = await fetch(apiBaseURL + "seller", {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`${response.status} ${errorBody}`);
        }
        return response.json();
    } catch (error: unknown) {
        if (error instanceof Error) {
        //console.error('There was a problem with your POST seller operation:', error.message);
        if (error.message.includes ("400")) {
            alert(error.message);
        }
        } else {
        console.error ('An unknown error occurred:', error);
        }
            throw error;
        }


}