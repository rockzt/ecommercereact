import React, {useEffect, useState} from "react";
import styles from "../MercadoLibre/MercadoLibre.module.css";
import Button from "../Button/Button.jsx";
import LoadingMessage from "../LoadingMessage/LoadingMessage.jsx";
//External Styles
import stylesc from "../Item/Item.module.css";
import stylesdiv from "../ItemList/ItemList.module.css";

const MercadoLibre = () => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [value, setValue] = useState('auto')

    const getProducts = () => {
        setLoading(true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
            .then(response => {
                return response.json()
            })
            .then( json => {
                console.log(json.results)
                setProducts(json.results)
            })
            .catch(error => {
                console.error(error)
            }).finally( () =>{
                setLoading(false)
            })
    }

    useEffect(() => {
        getProducts()
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        getProducts()
    }
    /*if(loading) {
        return <LoadingMessage message={'Loading Mercado Libre Section'}/>
    }*/
    return (
        <div>
            <br/>
            <h1>Mercado Libre Section</h1>
            <form onSubmit={handleSubmit} className={styles.bar}>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <br/>
                <Button label={'Search'} callback={() => console.log(`Term Searched ${value}`)}/>
            </form>
            <br/>

            {loading ? <LoadingMessage message={'Loading Mercado Libre Section'}/> : null}

            <div className={stylesdiv.cardsContainer}>
            {
            products.map(prod => {
                return (
                    <div className={stylesc.card} key={prod.id}>
                        <h5 className={stylesc.cardTitle}>{prod.title}</h5>
                        <br/>
                        <img src={prod.thumbnail} alt={prod.thumbnail}/>
                        <br/>
                        <br/>
                        <p className={stylesc.cardSubtitle}>$ {prod.price}</p>
                        <p className={stylesc.cardText}><b>Qty:</b>1</p>
                        <Button label={'Add To Cart'} color={'blue'} callback={() => console.log(`Adding product ${prod.title}`)}/>
                    </div>
                )
            })
            }
            </div>
        </div>
    )
}
export default  MercadoLibre