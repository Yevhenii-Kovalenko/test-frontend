"use client";
import { FormProvider } from "@/context/FormContext";
import { Content } from "@/components/Content";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <FormProvider>
      <div className="flex items-start justify-between bg-[#F1F3FE] px-10 py-8">
        <Sidebar />
        <Content />
      </div>
    </FormProvider>
  );
}
