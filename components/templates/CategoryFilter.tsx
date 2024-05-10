import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import styles from "./CategoriesPage.module.css";
const CategoriesPage = () => {
  const { push, query: urlQueries } = useRouter();
  console.log(urlQueries);

  const [query, setQuery] = useState({
    difficulty: urlQueries?.difficulty ?? "",
    cookingTime: urlQueries?.cookingTime ?? "",
  });

  const setSelectTagValue = (tag: HTMLSelectElement) => {
    setQuery((perviousValue) => ({
      ...perviousValue,
      [tag.name]: tag.value,
    }));
  };

  const setQueryUrl = () => {
    if (query.cookingTime && !query.difficulty) {
      return { cookingTime: query.cookingTime };
    } else if (query.difficulty && !query.cookingTime) {
      return { difficulty: query.difficulty };
    } else if (query.cookingTime && query.difficulty) {
      return query;
    } else {
      return null;
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    push({
      pathname: "/categories",
      query: setQueryUrl(),
    });
  };

  return (
    <form
      className={styles.container}
      onSubmit={submitHandler}>
      <h2>Categories</h2>
      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            onChange={(e) => {
              setSelectTagValue(e.target);
            }}
            name="difficulty"
            value={query.difficulty}>
            <option value={""}>Difficulty</option>
            <option value={"Easy".toLowerCase()}>Easy</option>
            <option value={"Medium".toLowerCase()}>Medium</option>
            <option value={"Hard".toLowerCase()}>Hard</option>
          </select>
          <select
            onChange={(e) => {
              setSelectTagValue(e.target);
            }}
            value={query.cookingTime}
            name="cookingTime">
            <option value={""}>Cooking time</option>
            <option value={"over"}>More than 30 min</option>
            <option value={"less"}>Less than 30 min</option>
          </select>
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default CategoriesPage;
