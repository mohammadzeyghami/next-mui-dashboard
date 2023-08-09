// this is layout you can use this in those page you want
"use client";
import React from "react";
import { Stack } from "../lib/mui";
import theme from "../../theme";
interface Iprops {
  children: React.ReactNode;
}
const MainLayout = ({ children }: Iprops) => {
  return (
    <Stack
      mx={"auto"}
      maxWidth={"1850px"}
      mt={"20px"}
      width={"100%"}
      height={"95vh"}
      flexDirection={"row"}
    >
      <Stack
        width={"calc(25% - 20px)"}
        mr={"20px"}
        bgcolor={"red"}
        height={"100%"}
      >
        SideBar
      </Stack>
      <Stack
        flexDirection={"column"}
        width={"calc(100% - 200px)"}
        bgcolor={"gray"}
        height={"100%"}
      >
        <Stack width={"100%"} bgcolor={"blue"} height={"50px"}>
          Navbar
        </Stack>
        <Stack height={"calc(100% - 100px)"}>{children}</Stack>
        <Stack width={"100%"} bgcolor={"blue"} height={"50px"}>
          Footer
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
