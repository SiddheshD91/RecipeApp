import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  //   console.log(foodData);
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
