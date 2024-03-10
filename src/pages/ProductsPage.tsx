import React from "react";
import { ProductList } from "../components/product/ProductList";
import { ProductSubmit } from "../components/product/ProductSubmit";
import { ProductUpdate } from "../components/product/ProductUpdate";
import {Product} from "../models/Product";
import {ProductDelete} from "../components/product/ProductDelete";
import{deleteProduct as deleteProductAPI}  from "../services/ProductAPIService";

export function ProductsPage(){
   const [allProducts, setAllProducts] = React.useState<Product[]>([]);
    const [showUpdate, setShowUpdate] = React.useState(false);
    const [showDelete, setShowDelete] = React.useState(false);

   function updateAllProducts(newProducts: Product[]) {
       setAllProducts(newProducts);
   }

   function toggleUpdate() {
       setShowUpdate(!showUpdate);
   }

   function toggleDelete() {
       setShowDelete(!showDelete);
   }

    return (
    <>
        <ProductSubmit updateAllProducts={updateAllProducts}></ProductSubmit>
    <ProductList allProducts={allProducts} updateAllProducts={updateAllProducts} toggleUpdate={toggleUpdate}></ProductList>
    {showUpdate && <ProductUpdate updateAllProducts={updateAllProducts}></ProductUpdate>}
    </>
    )
}