"use client";
import React, { useState } from "react";
import MUIDataTable, { MUIDataTableProps } from "mui-datatables";

import { Stack } from "@mui/material";
import { Rows, Columns } from "./TableTestDatas";
const options: any = {
  filterType: "checkbox",
};

const UserTable = () => {
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        mt: "50px",
      }}
    >
      <MUIDataTable
        title={"User List"}
        data={Rows}
        columns={Columns}
        options={options}
      />
    </Stack>
  );
};

export default UserTable;
