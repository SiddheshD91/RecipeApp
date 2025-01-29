import { useState } from "react";
import Search from "./components/Search";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import "./components/App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("658615");
  return (
    <div>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/* <FoodList foodData={foodData} setFoodId={setFoodId} />
      <FoodDetail foodId={foodId} /> */}
      <Container foodData={foodData} foodId={foodId} setFoodId={setFoodId} />
    </div>
  );
}

export default App;
