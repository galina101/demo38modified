import React from "react";
import { MessageList } from "../components/MessageList";
import { MessageSubmit } from "../components/MessageSubmit";
export function MessagesPage(){
    return (
    <>
    <MessageList></MessageList>
    <MessageSubmit></MessageSubmit></>
        )
}