import { IData } from "@/Interfaces/server";
import CategoriesPage from "@/components/templates/CategoriesPage";
import { GetServerSideProps } from "next";

const Categories = ({ data }: { data: IData[] }) => {
  return <CategoriesPage data={data} />;
};

export default Categories;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    query: { difficulty, cookingTime },
  } = ctx;
  const res = (await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`)
  ).json()) as IData[];
  let data = res;
  if (difficulty) {
    data = res.filter(
      (item) => item.details[2].Difficulty.toLowerCase() === difficulty
    );
  }
  if (cookingTime) {
    data = data.filter((item) => {
      const recipeCookingTime = item.details[4]["Cooking Time"].toLowerCase();
      const [timeDetails] = recipeCookingTime.split(" ") as string[];
      if (cookingTime === "less" && timeDetails && +timeDetails <= 30) {
        return item;
      } else if (cookingTime === "over" && timeDetails && +timeDetails > 30) {
        return item;
      }
    });
  }
  return {
    props: { data },
  };
};
