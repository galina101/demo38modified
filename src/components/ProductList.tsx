import React, {useEffect, useRef, useState} from "react";
import { Product } from "../models/Product";
import { SingleProduct } from "./SingleProduct";
import {getAllProductsAPI} from "../services/ProductAPIService";

interface ProductListProps {
    allProducts: Product[];
    updateAllProducts: (newProducts: Product[]) => void;
}

export function ProductList({allProducts, updateAllProducts}: ProductListProps){
    const webSocket = useRef<WebSocket | null>(null);

    useEffect(()=>{
        getAllProductsAPI()
            .then(response=>{return response.json()})
            .then(json=>{
                updateAllProducts(json);
            })
            .catch(error=> {
                console.error('There was a problem with your fetch operation:'+ error.message);
            });
    }, []);



    //This code can be used to refresh the messages every 5 seconds
    /*    useEffect(() => {
            // Replace 'ws://localhost:8080' with your WebSocket server URL
            webSocket.current = new WebSocket('ws://localhost:9005');

            webSocket.current.onmessage = (seller) => {
                const newMessage = JSON.parse(seller.data);
                setAllSellers((prevMessages) => [...prevMessages, newMessage]);
            };

            return () => {
                if (webSocket.current) {
                    webSocket.current.close();
                }
            };
        }, []);*/

    return (<>
        {allProducts.map(product =>{
            return <SingleProduct key={product.productId} data={product}></SingleProduct>})}
    </>)
}