import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function AppForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const handleDateChange = (setFunction) => (event) => {
    const value = event.target.value;
    const len = value.length;
    if (len === 2 || len === 5) {
      setFunction(value + "/");
    } else {
      setFunction(value);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <input
        type="text"
        placeholder="Company Name"
        {...register("Company Name", { required: true })}
        className={`border rounded-md p-2 mb-2 ${
          errors["Company Name"] ? "border-red-500" : "border-gray-400"
        }`}
        onBlur={() => validateInput("Company Name")}
      />
      {errors["Company Name"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <select
        {...register("Title", { required: true })}
        className="border rounded-md p-2 mb-2 text-gray-400 hover:border-blue-500"
      >
        <option value="" disabled selected>
          Title (Mr, Mrs, Miss, Dr)
        </option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      {errors.Title && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="First name (Client POC)"
        {...register("First name (Client POC)", {
          required: true,
          maxLength: 80,
        })}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors["First name (Client POC)"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="Last name (Client POC)"
        {...register("Last name (Client POC)", {
          required: true,
          maxLength: 100,
        })}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors["Last name (Client POC)"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors.Email && (
        <span className="text-red-500">This field is required</span>
      )}

      <PhoneInput
        country={"us"}
        onChange={(phone) => setValue("Mobile number", phone)}
        inputProps={{
          name: "phone",
          required: true,
        }}
        containerClass="mb-2"
        inputClass="border rounded-md p-2 text-black"
      />
      {errors["Mobile number"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="Project Summary (1-3 sentences)"
        {...register("Project Summary (1-3 sentences)", { required: true })}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors["Project Summary (1-3 sentences)"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="Project Title"
        {...register("Project Title", { required: true })}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors["Project Title"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="Estimated Start Date"
        {...register("Estimated Start Date", { required: true })}
        value={startDate}
        onChange={handleDateChange(setStartDate)}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors["Estimated Start Date"] && (
        <span className="text-red-500">This field is required</span>
      )}

      <input
        type="text"
        placeholder="Estimated End Date"
        {...register("Estimated End Date", { required: true })}
        value={endDate}
        onChange={handleDateChange(setEndDate)}
        className="border rounded-md p-2 mb-2 text-black hover:border-blue-500"
      />
      {errors["Estimated End Date"] && (
        <span className="text-red-500">This field is required</span>
      )}
      <input
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
      />
    </form>
  );
}
