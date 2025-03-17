import React from "react";
import cn from "classnames";
import { useForm } from "@/context/FormContext"; // Імпортуємо хук для доступу до контексту

const CLASSNAMES =
  "border-b-2 border-green-900 bg-green-300 w-max min-w-[50px]";

const getFieldClassName = (value) => {
  const isInvalid = value.length < 5;
  return cn(
    CLASSNAMES,
    isInvalid
      ? "border-orange-600 bg-orange-300 mb-5"
      : "border-green-900 bg-green-300 mb-2",
  );
};

export const Content = () => {
  const { formData } = useForm();

  return (
    <div className="relative right-0 flex h-screen w-full max-w-[668px] flex-col gap-5 bg-white p-10">
      <h1 className="text-2xl font-semibold">10. Applicable law</h1>
      <p>
        This Software Development Agreement and the interpretation of its terms
        shall be governed by and construed in accordance with the laws of the
        State of California and subject to the exclusive jurisdiction of the
        federal and state courts located in Alpine, California.
      </p>
      <p>
        IN WITNESS WHEREOF, each of the Parties has executed this Software
        Development Agreement, both Parties by its duly authorized officer, as
        of the day and year set forth below.
      </p>

      <div className="mt-25 p-5">
        <p className={getFieldClassName(formData.firstName)}>
          {formData.firstName}
        </p>
        <p className={getFieldClassName(formData.lastName)}>
          {formData.lastName}
        </p>
        <p className={getFieldClassName(formData.companyAddress)}>
          {formData.companyAddress}
        </p>
        <p className={getFieldClassName(formData.companyName)}>
          {formData.companyName}
        </p>
      </div>
    </div>
  );
};
