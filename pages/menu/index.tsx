import { IData } from "@/Interfaces/server";
import MenuPage from "@/components/templates/MenuPage";
import { GetStaticProps } from "next";

const Menu = ({ data }: { data: IData[] }) => {
  return <MenuPage data={data} />;
};

export default Menu;
export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = (await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/`)
  ).json()) as IData[];

  return {
    props: { data: response },
    revalidate: 24 * 60 * 60, // 24hr
  };
};
