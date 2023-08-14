"use client";
import {
  ContentsIcon,
  HomeIcon,
  IdeaIcon,
  VectorIcon,
} from "@/assets/icons/svgs/Icons";
import { Icon, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import Link from "next/link";
import { useState } from "react";
interface Iprops {
  Page: string;
}

const Sidebar = ({ Page }: Iprops) => {
  const [active, setActive] = useState<string>(Page);
  const sidebarItems = [
    {
      name: "Home",
      Icon: HomeIcon,
    },
    {
      name: "Home",
      Icon: HomeIcon,
    },
  ];

  return (
    <Stack
      flexDirection={"column"}
      height={"100%"}
      borderRight={1}
      borderColor={theme.palette.background.gray}
    >
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <IdeaIcon color={theme.palette.common.blue} fontSize={"28px"} />{" "}
        <Typography variant="h3">Idea Dashboard</Typography>
      </Stack>

      <Stack mt={"74px"}>
        <Link style={{ textDecoration: "none", width: "80%" }} href={"/"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            mb={"30px"}
            sx={{
              py: "10px",
              bgcolor: active === "Home" ? theme.palette.common.gray : "#fff",
              borderRadius: "10px",
            }}
          >
            <HomeIcon
              color={
                active === "Home"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
            />
            <Typography
              color={
                active === "Home"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
              mt={"5px"}
              variant="h5"
              sx={{ textDecoration: "none" }}
            >
              Home
            </Typography>
          </Stack>
        </Link>

        <Link
          style={{ textDecoration: "none", width: "80%", borderRadius: "3px" }}
          href={"/users"}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            mb={"30px"}
            sx={{
              py: "10px",
              bgcolor: active === "Users" ? theme.palette.common.gray : "#fff",
              borderRadius: "10px",
            }}
          >
            <VectorIcon
              color={
                active === "Users"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
            />
            <Typography
              color={
                active === "Users"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
              variant="h5"
            >
              Users
            </Typography>
          </Stack>
        </Link>

        <Link
          style={{ textDecoration: "none", width: "80%" }}
          href={"/contents"}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            mb={"30px"}
            sx={{
              py: "10px",
              bgcolor:
                active === "Contents" ? theme.palette.common.gray : "#fff",
              borderRadius: "10px",
            }}
          >
            <ContentsIcon
              color={
                active === "Contents"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
            />
            <Typography
              color={
                active === "Contents"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
              variant="h5"
            >
              Contents
            </Typography>
          </Stack>
        </Link>
        <Link
          style={{ textDecoration: "none", width: "80%" }}
          href={"access_premission"}
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            mb={"30px"}
            sx={{
              py: "10px",
              bgcolor:
                active === "Access_Premission"
                  ? theme.palette.common.gray
                  : "#fff",
              borderRadius: "10px",
            }}
          >
            <IdeaIcon
              color={
                active === "Access_Premission"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
            />

            <Typography
              color={
                active === "Access_Premission"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
              variant="h5"
            >
              Access Premission
            </Typography>
          </Stack>
        </Link>
        <Link style={{ textDecoration: "none", width: "80%" }} href={"/charts"}>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
            mb={"30px"}
            sx={{
              py: "10px",
              bgcolor: active === "charts" ? theme.palette.common.gray : "#fff",
              borderRadius: "10px",
            }}
          >
            <IdeaIcon
              color={
                active === "charts"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
            />

            <Typography
              color={
                active === "charts"
                  ? theme.palette.common.blue
                  : theme.palette.background.gray
              }
              variant="h5"
            >
              Charts
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
