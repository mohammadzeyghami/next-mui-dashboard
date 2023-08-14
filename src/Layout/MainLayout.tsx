// this is layout you can use this in those page you want

import React from "react";
import { Stack } from "../lib/mui";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface Iprops {
  children: React.ReactNode;
  Page: string;
}
const MainLayout = ({ Page, children }: Iprops) => {
  return (
    <Stack
      mx={"auto"}
      maxWidth={"1850px"}
      mt={"20px"}
      width={"100%"}
      height={"90vh"}
      py={"24px"}
      px={"15px"}
      flexDirection={"row"}
    >
      <Stack
        width={"calc(25% - 20px)"}
        mx={"20px"}
        my={"auto"}
        // height={"calc(100% - 50px)"}
        height={"100%"}
      >
        <Sidebar Page={Page} />
      </Stack>
      <Stack
        flexDirection={"column"}
        width={"calc(100% - 100px)"}
        height={"100%"}
      >
        <Stack width={"100%"} height={"50px"}>
          <Navbar />
        </Stack>
        <Stack height={"calc(100% - 100px)"}>{children}</Stack>
        <Stack width={"100%"} height={"50px"}>
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainLayout;
