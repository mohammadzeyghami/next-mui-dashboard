import MainLayout from "@/Layout/MainLayout";
import UserTable from "@/components/Table/UserTable";
import React from "react";

const page = () => {
  return (
    <MainLayout Page="Users">
      <UserTable />
    </MainLayout>
  );
};

export default page;
