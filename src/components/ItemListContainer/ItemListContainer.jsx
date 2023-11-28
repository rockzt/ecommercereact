import React, { useState } from 'react';
import styles from './ItemListContainer.module.css';
import button from "../Button/Button.jsx";
import Button from "../Button/Button.jsx";
const ItemList = (props) => {
    console.log(props.item)
    const [products, setUsers] = useState([
        { id: 1, sku: 'P01', productName: 'Republic Of Gamer', category: 'Laptops', qty: 2 },
        { id: 2, sku: 'P02', productName: '10.5 Samsung', category: 'Tablets', qty: 3 },
        { id: 3, sku: 'P03', productName: 'Iphone 12 Pro Max', category: 'Cellphones', qty: 4 },
        { id: 4, sku: 'P04', productName: 'Ergonomic Logitech', category: 'Keyboards', qty: 1 },
        { id: 5, sku: 'P05', productName: 'HP JetBlack', category: 'Printers', qty: 2 },
        { id: 6, sku: 'P06', productName: 'Razer Limited Edition', category: 'Headphones', qty: 6 },
    ]);
    return (
            <div className={styles.cardsContainer}>
                {products &&
                    products.map((user) => (
                        <div key={user.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{user.productName}</h2>
                            <p className={styles.cardSubtitle}>{user.category}</p>
                            <p className={styles.cardText}><b>Qty:</b>{user.qty}</p>
                            <Button label={'Add To Cart'} color={'blue'} callback={() => console.log(`Adding product ${user.id}`)}/>
                            <p><small>SKU: {user.sku}</small></p>
                        </div>
                    ))}
            </div>
    );
};

export default ItemList;
