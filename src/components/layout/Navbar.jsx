import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currectPath = location.pathname?.split("/")[1];

  return (
    <div className="fixed top-0 left-0 right-0  flex items-center z-10 shadow border-b border-primary-border ml-48">
      <div className="flex items-center justify-between flex-1 pl-4 pr-10 text-center h-14">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg capitalize">
            {currectPath}
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col justify-start items-start w-full">
            <span className="text-[11px] md:text-sm text-left font-bold leading-[14px] capitalize">
              kakaka
            </span>

            <span className="text-[9px] md:text-xs text-left font-normal capitalize min-w-[5rem]">
              Admin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
