import { useEffect, useState } from "react";

const MercadoLibre = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [value, setValue] = useState("auto");

  const getProducts = () => {
    setLoading(true);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json.results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getProducts();
  };
  return (
    <div>
      <h1>Mercado Libre Section</h1>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Search</button>
      </form>
      {products.map((prod) => {
        return (
          <div key={prod.id}>
            <img src={prod.thumbnail} alt="" />
            <h3>{prod.title}</h3>
            <h4>{prod.price}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default MercadoLibre;
