import React from "react";
import { Product } from "../../models/Product";
import {getAllProductsAPI, deleteProduct} from "../../services/ProductAPIService";

interface ProductSubmitProps{
    updateAllProducts: (newProducts:Product[])=>void;
    deleteProduct: (product:Product)=>void;
}
export async function deleteProductWithRefresh(product: Product, updateAllProducts: (newProducts: Product[]) => void){
    try {
        const response = await deleteProduct(product);
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`${response.status} ${errorBody}`);
        }

        //Check if response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const dataReturned = await response.json();
            console.log("dataReturned",dataReturned);
            return response.json();
        } else{
            const textReturned = await response.text();
            console.log ("TextReturned",textReturned);
        }
    }catch (error){
        console.error();
        console.log ("Response was not JSON inside CATCH");
    }

    //wait for the post to complete, then refresh the list
    const response = await getAllProductsAPI();
    const updatedProducts = await response.json();
    updateAllProducts(updatedProducts);
}
