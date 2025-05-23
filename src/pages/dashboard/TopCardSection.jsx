const TopCardSection = ({ name, amount, bgColor }) => {
  return (
    <>
      <div
        className={`text-gray-900 rounded-lg p-8 flex items-center`}
        style={{ background: bgColor }}
      >
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-2xl font-bold">{amount}</p>
        </div>
      </div>
    </>
  );
};

export default TopCardSection;
