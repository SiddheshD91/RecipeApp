import { useEffect, useState } from "react";
import styles from "./FoodDetail.module.css";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState([]);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "eb901c886f4e46d3a1f14dd09b60b896";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  console.log(food);
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>FoodName: {food.title}</h1>
      <img src={food.image} className={styles.img} />
      <h1 className={styles.title}>Vegan: {food.vegan ? "Yes" : "No"}</h1>
      <h1 className={styles.title}>
        Healthy: {food.veryHealthy ? "Yes" : "No"}
      </h1>
      <h1 className={styles.title}>
        Gluten Free: {food.glutenFree ? "Yes" : "No"}
      </h1>
      <h1>Ingredients:</h1>
      <ul>
        {food.extendedIngredients
          ? food.extendedIngredients.map((item) => (
              <li key={item.name} className={styles.listitem}>
                {item.name}
              </li>
            ))
          : "no"}
      </ul>
      <h1 className={styles.title}>Instructions:</h1>
      <ul>
        {food.analyzedInstructions
          ? food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.step} className={styles.listitem}>
                {step.step}
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
}
