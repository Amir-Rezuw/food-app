import { IData } from "@/Interfaces/server";
import DetailsPage from "@/components/templates/DetailsPage";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { URL } from "url";
const Food = ({ data }: { data: IData }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h2>Loading food recipe</h2>;
  }
  return <DetailsPage {...data} />;
};

export default Food;
export const getStaticPaths: GetStaticPaths = async () => {
  const response = (await (
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`)
  ).json()) as IData[];
  const paths = response.map((item) => ({ params: { foodId: `${item.id}` } }));
  return {
    paths: paths,
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_BASE_URL}/${params?.foodId ?? "1"}`
    );
    const food = await (await fetch(url)).json();
    return {
      props: { data: food },
      revalidate: 10,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
