import React from "react";
import welcomeImage from '../images/welcome_banner.jpg';

export function LandingPage(){
    return ( <>
        <h1>Welcome to the Landing Page!</h1>
        <img src={welcomeImage} alt="Welcome"/>
</>
);
}