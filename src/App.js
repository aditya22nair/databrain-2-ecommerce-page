import Products from "./components/Products";
import Navbar from "./components/Navbar";
import { useState } from "react";
import {products} from "./Data"
function App() {

  const [data, setData] = useState(products)

  return (
    <div className="App">
      <Navbar data = {data} setData = {setData}/>
      <Products products = {data}/>
    </div>
  );
}

export default App;
