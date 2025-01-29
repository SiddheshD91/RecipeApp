import styles from "./FoodItem.module.css";

export default function FoodItem({ food, setFoodId }) {
  //   console.log(food.id);
  return (
    <div className={styles.card}>
      <img className={styles.img} src={food.image} />
      <p className={styles.title}>{food.title}</p>
      <button
        className={styles.button}
        onClick={() => {
          setFoodId(food.id);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}
