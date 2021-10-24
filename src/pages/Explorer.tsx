import Footer from "components/footer";
import Header from "components/HeaderMenu";
import { HeaderSection } from "components/HeaderSection";
import { TablesSection, WalletsBoxs } from "containers";

const Explorer = () => {
  return (
    <>
      <Header />
      <HeaderSection
        pageTitle="Arab Block Explorer"
        showSubcribeBox={false}
        subTitlePage="Simple, Smart, Fast"
        typeHeader="Page"
      />
      <WalletsBoxs />
      <TablesSection />
      <Footer />
    </>
  );
};

export default Explorer;
