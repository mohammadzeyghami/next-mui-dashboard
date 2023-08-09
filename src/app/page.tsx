"use client";
import { Typography } from "../lib/mui";
import MainLayout from "../Layout/MainLayout";
import { Stack } from "../lib/mui";
import Button from "@/components/Button";
import theme from "../../theme";

export default function Home() {
  console.log("hey seafawe");
  return (
    <MainLayout>
      <Stack>
        <Button size="sm">
          <Typography>hey</Typography>
        </Button>
      </Stack>
    </MainLayout>
  );
}
