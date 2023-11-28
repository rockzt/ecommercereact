import React, {useEffect, useState} from 'react';
import {getProducts} from "./asyncMock.js";
import ItemList from "../ItemList/ItemList.jsx";


const ItemListContainer = ({item}) => {
    // State Logic
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
    }, []);

    return (
        <div>
            <ItemList products={products} />
        </div>
    )

};

export default ItemListContainer;
