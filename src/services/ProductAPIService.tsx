import { Product } from "../models/Product";

const apiBaseURL : string = "http://localhost:9005/"
export function getAllProductsAPI(){
    return fetch(apiBaseURL + "product")
        .then (response => {
            if (!response.ok){
                throw new Error("HTTP error! Status:${response.status}");
            }
            return response;
        })
}
export function postProduct(data:Product){
    console.log(data);
    console.log(JSON.stringify(data));

    return fetch(apiBaseURL + "product/",
    {method:"POST",
    mode:"cors",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(data)});
}

export function putProduct(data:Product){
    console.log(data);
    console.log(JSON.stringify(data));

    return fetch(apiBaseURL + "product/"+ data.productId,
        {method:"PUT",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)});
}
export function deleteProduct(data:Product){
    console.log(data);
    console.log(JSON.stringify(data));



    return fetch(apiBaseURL + "product/"+ data.productId,
        {method:"DELETE",
            mode:"cors",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)});



}