import styles from "../Item/Item.module.css";
import Button from "../Button/Button.jsx";
import React from "react";
import {Link} from "react-router-dom";

const Item = ({id, productName, category, qty, sku, img}) => {
    return(
        <div className={styles.card}>
            <h2 className={styles.cardTitle}>{productName}</h2>
            <br/>
            <img className={styles.cardimg} src={img} alt={productName}/>
            <br/>
            <br/>
            <p className={styles.cardSubtitle}>{category}</p>
            <p className={styles.cardText}><b>Qty:</b>{qty}</p>
            <Button label={'Add To Cart'} color={'blue'} callback={() => console.log(`Adding product ${sku}`)}/>
            <p><small>SKU: {sku}</small></p>
            <Link to={`/detail/${id}`}> View Detail</Link>
        </div>
    )
}
export default Item