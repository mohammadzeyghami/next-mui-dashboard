import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/material";
import MainLayout from "./Layout/MainLayout";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <MainLayout>
      <Stack>hey this is test</Stack>
    </MainLayout>
  );
}
