import HeroBanner from "@/features/Home/components/HeroBanner/HeroBanner";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";

export default function Home({ featuredproperties }) {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const { hits } = require("@/features/data/properties");
  return {
    props: { featuredproperties: hits }
  };
}