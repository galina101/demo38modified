import React from "react";
import { SellerList } from "../components/SellerList";
import { SellerSubmit } from "../components/SellerSubmit";
import {Seller} from "../models/Seller";
export function ProductsPage(){
   const [allSellers, setAllSellers] = React.useState<Seller[]>([]);

   function updateAllSellers(newSellers: Seller[]) {
       setAllSellers(newSellers);
   }

    return (
    <>
    <SellerList allSellers={allSellers} updateAllSellers={updateAllSellers}></SellerList>
    <SellerSubmit updateAllSellers={updateAllSellers}></SellerSubmit></>
        )
}