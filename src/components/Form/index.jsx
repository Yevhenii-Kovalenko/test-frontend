import React, { useState, useEffect } from "react";
import { useForm } from "@/context/FormContext";
import TextField from "./TextField";

export const Form = ({ setInvalidCount }) => {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState({});

  // Функція валідації для поля
  const validateField = (field, value) => {
    return value.length >= 5;
  };

  // Оновлення стану помилок
  const validateAndSetErrors = () => {
    const updatedErrors = Object.keys(formData).reduce((acc, key) => {
      acc[key] = !validateField(key, formData[key] || "");
      return acc;
    }, {});
    setErrors(updatedErrors);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    validateAndSetErrors();
  }, [formData]);

  useEffect(() => {
    const invalidCount = Object.values(errors).filter(Boolean).length;
    setInvalidCount(invalidCount);
  }, [errors]);

  return (
    <form className="p-4">
      <TextField
        label="First name"
        value={formData.firstName}
        onChange={(val) => handleChange("firstName", val)}
        error={errors.firstName}
      />
      <TextField
        label="Last name"
        value={formData.lastName}
        onChange={(val) => handleChange("lastName", val)}
        error={errors.lastName}
      />
      <TextField
        label="Company address"
        value={formData.companyAddress}
        onChange={(val) => handleChange("companyAddress", val)}
        error={errors.companyAddress}
      />
      <TextField
        label="Company name"
        value={formData.companyName}
        onChange={(val) => handleChange("companyName", val)}
        error={errors.companyName}
      />
    </form>
  );
};
