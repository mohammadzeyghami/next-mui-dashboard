import { NotificationIcon } from "@/assets/icons/svgs/Icons";
import { Box, Stack, Typography } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status, data } = useSession();
  console.log(useSession());
  const session = status === "authenticated";

  return (
    <Stack flexDirection={"row"} justifyContent={"space-between"}>
      <Stack></Stack>
      <Stack flexDirection={"row"} gap={1.5}>
        {/* portfolio */}

        {/*set condition to show this or login  */}
        {session ? (
          <Stack flexDirection={"row"}>
            <Stack flexDirection={"column"} alignItems={"center"} mr={"10px"}>
              <Typography variant="h5">{data?.user?.name}</Typography>
              <Typography
                variant="body2"
                color={"gray"}
                sx={{ cursor: "pointer" }}
              >
                <Link
                  style={{ textDecoration: "none", color: "#000" }}
                  href={`/api/auth/signout`}
                  onClick={(event) => {
                    event.preventDefault();
                    signOut();
                  }}
                >
                  Sing Out
                </Link>
              </Typography>
            </Stack>
            <Image
              src={data?.user?.image}
              alt="userImage"
              width={60}
              height={60}
              style={{ borderRadius: "100%" }}
            />
          </Stack>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              color: "#000",
              marginRight: "30px",
              marginTop: "9px",
            }}
            href={`/api/auth/signin`}
            onClick={(event) => {
              event.preventDefault();
              signIn();
            }}
          >
            Sign In
          </Link>
        )}

        <Box mt={"4px"}>
          <NotificationIcon fontSize={"35px"} />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Navbar;
