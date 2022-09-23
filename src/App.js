import React from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./component";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
