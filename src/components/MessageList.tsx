import React, {useEffect, useRef, useState} from "react";
import { Message } from "../models/Message";
import { getAllMessagesAPI } from "../services/MessageAPIService";
import { json } from "stream/consumers";
import { SingleMessage } from "./SingleMessage";

export function MessageList(){
    const [allMessages, setAllMessages] = useState<Message[]>([])
    const webSocket = useRef<WebSocket | null>(null);

    useEffect(()=>{
        getAllMessagesAPI()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllMessages(json);
        });
    }, []);


    //This code can be used to refresh the messages every 5 seconds
   /* useEffect(() => {
        // Replace 'ws://localhost:8080' with your WebSocket server URL
        webSocket.current = new WebSocket('ws://localhost:8080');

        webSocket.current.onmessage = (message) => {
            const newMessage = JSON.parse(message.data);
            setAllMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        return () => {
            if (webSocket.current) {
                webSocket.current.close();
            }
        };
    }, []);*/

    return (<>
    {allMessages.map(message =>{return <SingleMessage key={message.message_id} data={message}></SingleMessage>})}
    </>)
}