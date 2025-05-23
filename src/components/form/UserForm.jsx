import React, { useEffect, useState } from "react";
import { Button } from "antd";

const UserForm = ({ action, dataToUpdate }) => {
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    role: "",
    country: "",
    city: "",
    address: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onFinish = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (action === "update" && dataToUpdate) {
      setFormData({
        firstName: dataToUpdate.firstName || "",
        lastName: dataToUpdate.lastName || "",
        phone: dataToUpdate.phone || "",
        email: dataToUpdate.email || "",
        role: dataToUpdate.role || "",
        country: dataToUpdate.country || "",
        city: dataToUpdate.city || "",
        address: dataToUpdate.address || "",
      });
    }
  }, [action, dataToUpdate]);

  return (
    <form
      method="POST"
      onSubmit={onFinish}
      className="text-white bg-primary-darkBg"
    >
      <h3 className="my-4 font-semibold font-roboto capitalize text-white">
        Persona Details
      </h3>
      <div className="grid grid-cols-3 gap-4 mb-2">
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            <span className="text-red-500 mr-1">*</span>
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
            required
          />
        </div>
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            <span className="text-red-500 mr-1">*</span>
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
            required
          />
        </div>
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            <span className="text-red-500 mr-1">*</span>
            Telephone
          </label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
            required
          />
        </div>
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            <span className="text-red-500 mr-1">*</span>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
            required
          />
        </div>
        {action !== "update" && (
          <div>
            <label
              id="5"
              className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
            >
              <span className="text-red-500 mr-1">*</span>
              Password
            </label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
              required
            />
          </div>
        )}
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            <span className="text-red-500 mr-1">*</span>
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full h-12 border border-gray-800 px-2 py-2.5 rounded bg-primary-darkLight outline-none"
            required
          >
            <option value="" className="capitalize">
              ---Select---
            </option>
            {[
              {
                id: 1,
                value: "admin",
                label: "Admin",
              },
            ]?.map((el) => (
              <option key={el?.value} value={el?.value} className="capitalize">
                {el?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr className="my-10" />
      <h3 className="mb-4 font-semibold font-roboto capitalize text-white">
        Address Details
      </h3>
      <div className="flex-1 grid grid-cols-3 gap-x-4 items-center w-full">
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
          />
        </div>

        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
          />
        </div>
        <div>
          <label
            id="5"
            className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
          >
            Location
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-2 py-2.5 h-12 rounded bg-primary-darkLight border border-gray-800 outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <Button
          type="primary"
          htmlType="submit"
          className="w-96 h-10"
          loading={false}
        >
          {action === "update" ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
