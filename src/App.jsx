import Navegationbar from "./components/Navbar/Navbar.jsx";
import ItemList from "./components/ItemListContainer/ItemListContainer.jsx";
import CategoriesData from "./components/CategoriesData/CategoriesData.jsx";
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
            <ItemList item={'displaying item list'}/>
        </div>
    </>
  )
}

export default App
