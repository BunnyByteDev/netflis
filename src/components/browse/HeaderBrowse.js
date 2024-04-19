import { useState } from "react";
import { LOGO, USER_AVATAR } from "../../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";

const HeaderBrowse = () => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleClick = () => {
    navigate("/browse");
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowDropDown(false);
    }, 2000);
  };

  return (
    <div
      className="
  absolute 
  w-screen 
  h-17
  px-4
  py-2 
  flex justify-between
  bg-gradient-to-b from-black
  z-10"
    >
      <img
        onClick={handleClick}
        className="
      h-6
      sm:h-8
      md:h-12
      cursor-pointer
      "
        src={LOGO}
        alt="logo"
      />

      <div className="">
        <div
          className="pr-12"
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className="h-8 rounded-md cursor-pointer"
            alt="userIcon"
            src={USER_AVATAR}
          />
        </div>
        {showDropDown && <DropDownMenu handleSignout={handleSignout} />}{" "}
      </div>
    </div>
  );
};

export default HeaderBrowse;
