import React from "react";
import { Product } from "../../models/Product";
import {getAllProductsAPI, deleteProduct} from "../../services/ProductAPIService";

interface ProductSubmitProps{
    updateAllProducts: (newProducts:Product[])=>void;
    deleteProduct: (product:Product)=>void;
}
export async function deleteProductWithRefresh(product: Product, updateAllProducts: (newProducts: Product[]) => void){
    await deleteProduct(product);
    //wait for the post to complete, then refresh the list
    const response = await getAllProductsAPI();
    const updatedProducts = await response.json();
    updateAllProducts(updatedProducts);
}

export function ProductDelete({updateAllProducts}:ProductSubmitProps){
    // Return null because this component doesn't render anything
    return null;
}