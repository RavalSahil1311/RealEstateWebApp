import Featuredproperties from "@/features/Home/components/FeaturedProperties/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam/MeetTheTeam";
import DefaultLayout from "@/features/Layouts/DefaultLayout/DefaultLayout";

export default function Home({ featuredproperties }) {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <Featuredproperties featuredproperties={featuredproperties}/>
        <MeetTheTeam/>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const { hits } = require("@/features/data/properties");
  return {
    props: { featuredproperties: hits.slice(0,5) },
  };
}
