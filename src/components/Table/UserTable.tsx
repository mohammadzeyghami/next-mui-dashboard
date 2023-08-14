"use client";
import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

import { Stack } from "@mui/material";
import { Rows, Columns } from "./TableTestDatas";
const options = {
  filterType: "checkbox",
};

const UserTable = () => {
  return (
    <Stack sx={{ height: "100%", width: "100%" }}>
      <MUIDataTable
        title={"Employee List"}
        data={Rows}
        columns={Columns}
        options={options}
      />
    </Stack>
  );
};

export default UserTable;
