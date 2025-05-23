import React, { useEffect, useState } from "react";
import { Button, Form } from "antd";
import "../models/model.css";
import DynamicFormList from "./DynamicFormList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./../../assets/styles/datepicker.css";
import UploadFile from "../file/UploadFile";

const EventForm = ({ action, dataToUpdate }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [tickeFields, setTicketFields] = useState([
    { type: "", price: "", quantity: "" },
  ]);

  const initialState = {
    title: "",
    location: "",
    description: "",
    category: "",
    doorOpen: "",
    time_start: "",
    time_end: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const onFinish = async (e) => {
    setHasError(false);
    setErrorMessage(null);
    e.preventDefault();

    if (action !== "update") {
      for (const field of tickeFields) {
        if (
          !field.type.trim() ||
          !field.price.trim() ||
          !field.quantity.trim()
        ) {
          setHasError(true);
          setErrorMessage("All Ticket fields must be filled out.");
          return;
        }
      }
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = date ? date.toISOString().split("T")[0] : null;
    setSelectedDate(formattedDate);
  };

  useEffect(() => {
    if (dataToUpdate) {
      setFormData({
        title: dataToUpdate.title || "",
        location: dataToUpdate.location || "",
        description: dataToUpdate.description || "",
        category: dataToUpdate.category?._id || "",
        doorOpen: dataToUpdate.doorOpen || "",
        time_start: dataToUpdate.time_start || "",
        time_end: dataToUpdate.time_end || "",
      });
      setSelectedDate(dataToUpdate.date ? new Date(dataToUpdate.date) : null);
    }
  }, [dataToUpdate]);

  return (
    <form
      method="POST"
      onSubmit={onFinish}
      className="text-white bg-primary-darkBg"
    >
      <h3 className="mb-10 my-3 font-semibold font-poppins capitalize text-xl text-center">
        Create a new event
      </h3>
      <div className="flex">
        <div className="w-2/5">
          <div className="mb-2">
            <UploadFile setHasError={setHasError} />
          </div>
          {hasError && (
            <span className="text-sm text-default-error">{errorMessage}</span>
          )}
          <div className="flex flex-col space-y-4 pt-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full h-14  px-2 py-2.5 rounded bg-primary-darkLight border border-gray-800 outline-none"
              placeholder="Event Name / Title"
              required
            />

            <div className="relative w-full h-full">
              <div className="absolute inset-y-0 right-3 flex items-center pzl-3 pointer-events-none z-10">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>

              <DatePicker
                selected={selectedDate ? new Date(selectedDate) : null}
                onChange={handleDateChange}
                placeholderText="Select date"
                className="w-full h-14  px-2 py-2.5 rounded bg-primary-darkLight border border-gray-800 outline-none"
                calendarClassName="react-datepicker"
                minDate={new Date()}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <label
                  id="1"
                  for="start-time"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Start time:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="time"
                    className="w-full px-2 py-2.5 rounded bg-primary-darkLight border border-gray-800 outline-none"
                    min="24:00"
                    max="24:00"
                    name="time_start"
                    value={formData.time_start}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  id="2"
                  for="end-time"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  End time:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="time"
                    className="w-full px-2 py-2.5 rounded bg-primary-darkLight border border-gray-800 outline-none"
                    min="24:00"
                    max="24:00"
                    name="time_end"
                    value={formData.time_end}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            {action !== "update" && (
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-2 py-2.5 h-14 rounded bg-primary-darkLight border border-gray-800 outline-none"
                placeholder="Type location.."
                required
              />
            )}
          </div>
        </div>
        <div className="flex-1 ml-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label
                id="4"
                className="block text-sm font-semibold pb-1 font-nunito dark:text-default"
              >
                About your event
              </label>
              <textarea
                rows="8"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-2 pb-2.5 rounded bg-primary-darkLight border border-gray-800 outline-none"
                required
              />
            </div>
            <div>
              <label
                id="5"
                className="block text-sm font-semibold font-nunito dark:text-default"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-12 border border-gray-800 px-2 py-2 rounded bg-primary-darkLight outline-none"
                required
              >
                <option value="" className="capitalize">
                  Select
                </option>
                {[]?.map((el) => (
                  <option key={el?._id} value={el?._id} className="capitalize">
                    {el?.name?.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            {action !== "update" ? (
              <>
                <h3 className="my-4 font-semibold font-roboto capitalize">
                  Ticket options
                </h3>
                <DynamicFormList
                  fields={tickeFields}
                  setFields={setTicketFields}
                  ticketToUpdate={null}
                />
              </>
            ) : (
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-2 py-2.5 h-14 mt-6 rounded bg-primary-darkLight border border-gray-800 outline-none"
                placeholder="Type location.."
                required
              />
            )}
          </div>
        </div>
      </div>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        className="mt-4"
      >
        <Button type="primary" htmlType="submit" className="w-96 h-12">
          {action === "update" ? "Update" : "Submit"}
        </Button>
      </Form.Item>
    </form>
  );
};

export default EventForm;
