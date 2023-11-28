import styles from "../ItemList/ItemList.module.css";
import Item from "../Item/Item.jsx";
import React from "react";

const ItemList = ({products}) => {
    return(
        <div className={styles.cardsContainer}>
            {
                products.map(product => {
                    return (
                        <Item key={product.id} {...product}/>
                    )
                })
            }
        </div>
    )
}
export default  ItemList