import { CgCloseO } from "react-icons/cg";

const DynamicFormList = ({ fields, setFields, ticketToUpdate }) => {
  const addField = () => {
    setFields([...fields, { type: "", price: "", quantity: "" }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newFields = [...fields];
    newFields[index][field] = value;
    setFields(newFields);
  };

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={index} className="grid grid-cols-3 items-center gap-4">
          <input
            type="text"
            placeholder="Ticket Category"
            value={field.type}
            onChange={(e) => handleChange(index, "type", e.target.value)}
            className="flex-1 h-12 bg-primary-darkLight border border-gray-800 outline-none text-white px-4 rounded-md"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={field.price}
            onChange={(e) => handleChange(index, "price", e.target.value)}
            className="flex-1 h-12 bg-primary-darkLight border border-gray-800 outline-none text-white px-4 rounded-md"
            required
          />

          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Quantity"
              value={field.quantity}
              onChange={(e) => handleChange(index, "quantity", e.target.value)}
              className="w-40 h-12 bg-primary-darkLight border border-gray-800 outline-none text-white px-4 rounded-md"
              required
            />
            <div>
              {index > 0 && (
                <CgCloseO
                  onClick={() => removeField(index)}
                  size={30}
                  color="red"
                />
              )}
            </div>
          </div>
        </div>
      ))}

      {ticketToUpdate === null && (
        <button
          onClick={addField}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Add Ticket Category
        </button>
      )}
    </div>
  );
};

export default DynamicFormList;
