import Navegationbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import CategoriesData from "./components/CategoriesData/CategoriesData.jsx";
import MercadoLibre from "./components/MercadoLibre/MercadoLibre.jsx";
function App() {
  return (
    <>
      <div>
          <Navegationbar/>
      </div>
        <br/>
        <div>
            <CategoriesData/>
        </div>
        <br/>
        <div>
            <ItemListContainer item={'displaying item list'}/>
        </div>
        <div>
            <MercadoLibre />
        </div>
    </>
  )
}

export default App
