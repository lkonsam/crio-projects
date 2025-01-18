import React from "react";
import styles from './CardComponent.module.css';


export default function CardComponent({data}){


    return (<>
        <div className={styles.card}>
            <img src={data.png} alt={data.common}  className={styles.image} />
            <p className={styles.countryText}>{data.common}</p>
        </div>
    
    </>);


}