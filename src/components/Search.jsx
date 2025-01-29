import { useEffect, useState } from "react";
import styles from "./Search.module.css";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "eb901c886f4e46d3a1f14dd09b60b896";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `${URL}?query=${query}&apiKey=${API_KEY}&number=${5}`
      );
      const data = await res.json();
      //   console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.container}>
      <label>
        <h1>Search Recipe:</h1>
      </label>
      <input
        className={styles.text}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
