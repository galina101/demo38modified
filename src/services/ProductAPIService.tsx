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
export async function postProduct(product:Product){
    console.log(product);
    console.log(JSON.stringify(product));

    try {
        const response = await fetch(apiBaseURL + "product", {
            method: "POST",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
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

export async function putProduct(product:Product){
    console.log(product);
    console.log(JSON.stringify(product));
    try {
        const response = await fetch(apiBaseURL + "product/"+ product.productId,{
            method: "PUT",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
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
export async function deleteProduct(product:Product){
 //   console.log(product);
    console.log("Preparing to delete" + JSON.stringify(product));

    try {
        const response = await fetch(apiBaseURL + "product/"+ product.productId,{
            method: "DELETE",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(product)
        });
        console.log ("response.ok", response.ok);
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`${response.status} ${errorBody}`);
        }
        alert("Product successfully deleted");
        console.log(response);
        return response.json();
    } catch (error: unknown) {
        if (error instanceof Error) {
            if (error.message.includes ("400")) {
                alert(error.message);
            }
        } else {
            console.error ('An unknown error occurred:', error);
        }
        throw error;
    }


}