import React, {useEffect, useRef, useState} from "react";
import { Seller } from "../models/Seller";
import { getAllSellersAPI } from "../services/SellerAPIService";
import { json } from "stream/consumers";
import { SingleSeller } from "./SingleSeller";

export function SellerList(){
    const [allSellers, setAllSellers] = useState<Seller[]>([])
    const webSocket = useRef<WebSocket | null>(null);

    useEffect(()=>{
        getAllSellersAPI()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllSellers(json);
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
    {allSellers.map(seller =>{return <SingleSeller key={seller.sellerId} data={seller}></SingleSeller>})}
    </>)
}