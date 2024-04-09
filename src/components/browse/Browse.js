import HeaderBrowse from "./HeaderBrowse";
import MainContainer from "./MainContainer/MainContainer";
import FooterBrowse from "./secondaryContainer/FooterBrowse";
import SecondaryContainer from "./secondaryContainer/SecondaryContainer";

const Browse = () => {
  return (
    <div
      className="bg-black
    bg-cover "
    >
      <HeaderBrowse />
      <MainContainer />
      <SecondaryContainer />
      <FooterBrowse />
    </div>
  );
};

export default Browse;
