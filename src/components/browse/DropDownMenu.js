import { TiArrowSortedUp } from "react-icons/ti";

const DropDownMenu = ({ handleSignout }) => {
  return (
    <div className="relative">
      <TiArrowSortedUp className="text-white ml-1" size={25} />
      <div
        className="bg-black bg-opacity-20 absolute mr-20 right-0 z-20 w
      "
      >
        <button onClick={handleSignout} className="w-20 text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default DropDownMenu;
