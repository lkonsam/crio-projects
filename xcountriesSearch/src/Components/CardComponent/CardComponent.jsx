import React from "react";
import './CardComponent.css';


export default function CardComponent({data}){


    return (<>
        <div className="countryCard">
            <img src={data.png} alt={data.common}  className="image" />
            <p className="countryText">{data.common}</p>
        </div>
    
    </>);


}