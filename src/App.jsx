import {useState, createContext} from "react";
import Navegationbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import CategoriesData from "./components/CategoriesData/CategoriesData.jsx";
import MercadoLibre from "./components/MercadoLibre/MercadoLibre.jsx";
import IncrementCount from "./components/IncrementCount/IncrementCount.jsx";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

/*Initializing Context*/
const Context = createContext()
function App() {
    /*Creating context*/

  return (
    <>
        <BrowserRouter>
            <Context.Provider value={'Testing Value Sent from Context'}>
                {/*Showing always*/}
                <div>
                    <Navegationbar/>
                </div>
                <br/>
                <br/>
                {/*Relaying on routes*/}
                <Routes>
                    <Route path='/' element={<ItemListContainer item={'displaying item list'}/>}/>
                    <Route path='/detail/:productId/' element={<ItemDetailContainer/>}/>
                    <Route path='/*' element={<h1>404 Not Found</h1>}/>
                </Routes>
            </Context.Provider>
        </BrowserRouter>

        <br/>

        <div>
                <IncrementCount initValue={0} incrementBy={2}>
                    <h4>Counter Section</h4>
                </IncrementCount>
                <IncrementCount initValue={0} incrementBy={2} component={<button>Botón</button>}/>
        </div>
        <div>

        </div>
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
