import { BackwardOutlined } from "@ant-design/icons";

const BackButton = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="hover:text-blue-800 text-black focus:ring-0 px-[1px] focus:ring-blue-300 font-medium rounded-full text-sm border border-none md:border-[#03022980] hover:border-blue-800 "
    >
      <BackwardOutlined />
    </button>
  );
};

export default BackButton;
