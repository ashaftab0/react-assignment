import React from "react";
import SpinnerImg from "../assets/images/Preloader.gif";


export default function Spinner() {
    return(
        <div className="spinner-container">
            <div className="spinner-backdrop"></div>
            <div className="spinner-align">
                <img src={SpinnerImg} height="170px" />
            </div>
        </div>
    )
}