import React from "react";
import {Seller} from "../models/Seller";
import { SellerList } from "../components/seller/SellerList";
import { SellerSubmit } from "../components/seller/SellerSubmit";
export function SellersPage(){
    const [allSellers, setAllSellers] = React.useState<Seller[]>([]);

    function updateAllSellers(newSellers: Seller[]) {
        setAllSellers(newSellers);
    }

    return (
    <>
    <SellerList allSellers={allSellers} updateAllSellers={updateAllSellers}></SellerList>
    <SellerSubmit updateAllSellers={updateAllSellers}></SellerSubmit>
        <br></br>
        <br></br>
    </>
        )
}