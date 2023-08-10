import { NotificationIcon } from "@/assets/icons/svgs/Icons";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Stack></Stack>
      <Stack flexDirection={"row"} gap={1.5}>
        {/* portfolio */}

        {/*set condition to show this or login  */}
        <Stack flexDirection={"row"}>
          <Stack flexDirection={"column"} alignItems={"center"} mr={"10px"}>
            <Typography variant="h5">Hamidreza</Typography>
            <Typography
              variant="body2"
              color={"gray"}
              sx={{ cursor: "pointer" }}
            >
              Sign out
            </Typography>
          </Stack>
          <Box
            borderRadius={"100%"}
            width={45}
            height={45}
            bgcolor={"#000"}
          ></Box>
        </Stack>

        <Box mt={"4px"}>
          <NotificationIcon fontSize={"35px"} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
