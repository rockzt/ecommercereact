import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "./asyncMock.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  // State Logic
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    // Calling firestore
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(collectionRef)
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const fields = doc.data();
          return { id: doc.id, ...fields };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    /*const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error  => {
                console.log(error)
            })*/
  }, [categoryId]);

  return (
    <div>
      <br />
      <h1>{greeting}</h1>
      <br />
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
