import React, {useEffect, useState} from 'react';
import styles from './ItemListContainer.module.css';
import Button from "../Button/Button.jsx";
import {getProducts} from "./asyncMock.js";


const ItemList = (props) => {
    console.log(props)
    // State Logic
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, []);
    // Presentation Logic
    const productComponents = products.map(product => {
        return (
                        <div key={product.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{product.productName}</h2>
                            <p className={styles.cardSubtitle}>{product.category}</p>
                            <p className={styles.cardText}><b>Qty:</b>{product.qty}</p>
                            <Button label={'Add To Cart'} color={'blue'} callback={() => console.log(`Adding product ${product.id}`)}/>
                            <p><small>SKU: {product.sku}</small></p>
                        </div>
        )
    })

    return (
        <div className={styles.cardsContainer}>
            {productComponents}
        </div>
    )

};

export default ItemList;
