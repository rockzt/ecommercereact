import React from "react";
import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import {getProductById} from "../ItemListContainer/asyncMock.js";
import Button from "../Button/Button.jsx";
import styles from "./ItemDetailContainer.module.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import {getDoc, doc} from "firebase/firestore";
import {db} from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = ({addItem}) => {
    const [product, setProduct] = useState(null)
    const {productId} = useParams()
    const [loading, setLoading] = useState()

    useEffect(() => {
        setLoading(true)
        const documentRef = doc(db, 'products', productId)
        getDoc(documentRef)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        /*
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
         */
    }, [productId])


    return(
        <div className={styles.productDescription}>
            <img src={product?.img} alt={product?.productName} className={styles.productImage} />
            <div className={styles.productDetails}>
                <h2 className={styles.productName}>{product?.productName}</h2>
                <p className={styles.category}>Category: {product?.category}</p>
                <p className={styles.quantity}>Quantity: {product?.qty}</p>
                <p className={styles.sku}>SKU: {product?.sku}</p>
            </div>
            {
                product?.qty >0 ? (
                    <ItemCount {...product} productId={productId} addItem={addItem}></ItemCount>
                ) : (
                    <h4>Out of stock</h4>
                )
            }
            {
                /*
            <Button label={'-'} callback={() => {console.log(`Product ID: ${productId} added to cart`)}}/>
            <input type="number"/>
            <Button label={'+'} callback={() => {console.log(`Product ID: ${productId} added to cart`)}}/>
            <br/>
            <Button label={'Add to cart'} callback={() => {console.log(`Product ID: ${productId} added to cart`)}}/>

                 */
            }
        </div>
    )
}
export default ItemDetailContainer