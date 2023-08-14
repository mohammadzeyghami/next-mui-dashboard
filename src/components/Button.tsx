import React from "react";
import { Stack } from "../lib/mui";
interface Iprops {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}
const Button = ({ size = "sm", children }: Iprops) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ cursor: "pointer", bgcolor: "#2644D5", borderRadius: "84px" }}
      width={
        size === "sm" ? 110 : size === "md" ? 160 : size === "lg" ? 320 : ""
      }
      height={size === "sm" ? 55 : size === "md" ? 60 : size === "lg" ? 60 : ""}
    >
      {children}
    </Stack>
  );
};

export default Button;
