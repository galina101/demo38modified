import React, { useEffect, useState } from "react";
import { Message } from "../models/Message";
import { getAllMessagesAPI } from "../services/MessageAPIService";
import { json } from "stream/consumers";
import { SingleMessage } from "./SingleMessage";

export function MessageList(){
    const [allMessages, setAllMessages] = useState<Message[]>([])
    
    useEffect(()=>{
        getAllMessagesAPI()
        .then(response=>{return response.json()})
        .then(json=>{
            setAllMessages(json);
        });
    }, []);
    
    return (<>
    {allMessages.map(message =>{return <SingleMessage key={message.message_id} data={message}></SingleMessage>})}
    </>)
}