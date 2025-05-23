import { sidebarItems } from "../../assets/data/Pages";
import { useLocation, useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (name, path) => {
    navigate(path);
  };

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-48 h-full bg-primary-darkBg z-0 duration-700 border-r border-primary-border`}
    >
      <div className="relative flex flex-col h-full px-4">
        <div className="flex-1">
          <div className="flex items-center pt-6 pb-10">
            <img
              className="w-5 h-5 object-cover rounded-full mr-3"
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaiKiPcLJj7ufrj6M2KaPwyCT4lDSFA5oog&s"
            />

            <div className="flex flex-col justify-start items-start w-full">
              <span className="text-[11px] md:text-sm text-left font-bold leading-[14px] capitalize">
                Jean Cyifuzo
              </span>
            </div>
          </div>
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className={`p-3 cursor-pointer hover:bg-primary-active font-nunito flex items-center space-x-6 text-white transition-all duration-500 ease-in-out ${
                location.pathname.includes(item.path)
                  ? "bg-primary-active rounded-lg hover:rounded-lg text-primary w-full"
                  : ""
              }`}
              onClick={() => handleTabClick(item?.name, item?.path)}
            >
              <div className="fixed">{item.icon}</div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  true
                    ? "max-w-[150px] opacity-100 pl-2"
                    : "max-w-0 opacity-0 pl-0"
                }`}
              >
                <span className="text-sm whitespace-nowrap">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className="h-32 flex items-center space-x-6 p-3 cursor-pointer"
          onClick={handleLogOut}
        >
          <div className="fixed">
            <RiLogoutBoxRLine size={23} />
          </div>
          <span
            className={`text-white overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap ${
              true ? "max-w-[150px] opacity-100 pl-2" : "max-w-0 opacity-0 pl-0"
            } ${
              true ? "max-w-[150px] opacity-100 pl-2" : "max-w-0 opacity-0 pl-0"
            }`}
          >
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
