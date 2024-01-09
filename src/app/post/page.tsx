"use client";
import { MultiTemplate } from "@/templates/MultiTemplate";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <MultiTemplate>
      <Box className="bg-red-200">left</Box>
      <Box className="bg-blue-200">
        <Box>title</Box>
        <Box>container</Box>
      </Box>
      <Box className="bg-green-200">right</Box>
    </MultiTemplate>
  );
}
