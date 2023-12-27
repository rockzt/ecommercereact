import {useState, createContext} from "react";
import Navegationbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import CategoriesData from "./components/CategoriesData/CategoriesData.jsx";
import MercadoLibre from "./components/MercadoLibre/MercadoLibre.jsx";
// import IncrementCount from "./components/IncrementCount/IncrementCount.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import {Notification, NotificationProvider} from "./notification/NotificationService.jsx";
/*Initializing Context and setting up  reference*/
export const Context = createContext({
    cart : [],
    addItem: () => {},
    isInCart: () => {}
})
function App() {
    const [cart, setCart] = useState([])
    console.log(cart)
    /*Make sure do not add the same object twice, checking by productId*/
    const addItem = (productToAdd) => {
        // Check item has been previously added
        if(!isInCart(productToAdd.productId)){
            // Add item to cart
            setCart(prev => [...prev, productToAdd])
            console.log(`Product: ${productToAdd.productName} -  Qty: ${productToAdd.count} added to cart!!.`)
        }else {
            alert(`${productToAdd.productName} is already in the cart!!`)
        }
    }

    // Validates if products exists within cart
    const isInCart = (productId) => {
        return cart.some(prod => prod.productId === productId)
    }

  return (
    <>
        <NotificationProvider>
            <BrowserRouter>
                <Context.Provider value={{cart, addItem, isInCart}}>
                    {/*Showing always*/}
                    <div>
                        <Navegationbar cartCount={Object.keys(cart).length}/>
                    </div>
                    <br/>
                    <br/>
                    {/*Relaying on routes*/}
                    <Routes>
                        <Route path='/' element={<ItemListContainer greeting={'Top products'}/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>}/>
                        <Route path='/detail/:productId/' element={<ItemDetailContainer addItem={addItem}/>}/>
                        <Route path='/*' element={<h1>404 Not Found</h1>}/>
                    </Routes>
                </Context.Provider>
            </BrowserRouter>
        </NotificationProvider>

        <br/>
        {/*
        <div>
                <IncrementCount initValue={0} incrementBy={2}>
                    <h4>Counter Section</h4>
                </IncrementCount>
                <IncrementCount initValue={0} incrementBy={2} component={<button>Botón</button>}/>
        </div>
        */}
        <br/>
        <div>
            <CategoriesData/>
        </div>
        <br/>
        <div>
            <MercadoLibre />
        </div>
        <br/>
    </>
  )
}

export default App
