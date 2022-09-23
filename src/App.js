import React from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./component";

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
