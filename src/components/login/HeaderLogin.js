import { LOGO } from "../../utils/constants";
const HeaderLogin = () => {
  return (
    <div
      className="
  absolute w-screen h-17 px-4 py-2 flex justify-between bg-gradient-to-b from-black z-10"
    >
      <img className="h-6 sm:h-8 md:h-12" src={LOGO} alt="logo"></img>
    </div>
  );
};

export default HeaderLogin;
