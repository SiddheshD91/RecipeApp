import FoodList from "./FoodList";
import FoodDetail from "./FoodDetail";
import styles from "./container.module.css";

export default function Container({ foodData, foodId, setFoodId }) {
  return (
    <div className={styles.container}>
      <FoodList foodData={foodData} setFoodId={setFoodId} />
      <FoodDetail foodId={foodId} />
    </div>
  );
}
