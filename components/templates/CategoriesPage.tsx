import { IData } from "@/Interfaces/server";
import { Fragment } from "react";
import Card from "../modules/Card";
import styles from "./CategoriesPage.module.css";
import CategoryFilter from "./CategoryFilter";

const CategoriesPage = ({ data }: { data: IData[] }) => {
  return (
    <Fragment>
      <CategoryFilter />
      <div className={`${styles.container} ${styles.foodCard}`}>
        {data.map((item) => (
          <Card
            {...item}
            key={item.id}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default CategoriesPage;
