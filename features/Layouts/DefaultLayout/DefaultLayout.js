import Footer from "@/features/Common/modules/Footer/Footer";
import Navigation from "@/features/Common/modules/Navigation/Navigation";

const DefaultLayout = ({children}) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
