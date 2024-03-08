import React from "react";
import notFoundImage from '../images/404page_not_found.jpg';

export function PageNotFoundPage(){
    return (<>
    <h1>Page Not Found</h1>
            <img src={notFoundImage} alt = "Not Found"/>
        </>
    );
}