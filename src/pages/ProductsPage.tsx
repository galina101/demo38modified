import React from "react";
import { ProductList } from "../components/ProductList";
import { ProductSubmit } from "../components/ProductSubmit";
import {Product} from "../models/Product";
export function ProductsPage(){
   const [allProducts, setAllProducts] = React.useState<Product[]>([]);

   function updateAllProducts(newProducts: Product[]) {
       setAllProducts(newProducts);
   }

    return (
    <>
    <ProductList allProducts={allProducts} updateAllProducts={updateAllProducts}></ProductList>
    <ProductSubmit updateAllProducts={updateAllProducts}></ProductSubmit></>
        )
}