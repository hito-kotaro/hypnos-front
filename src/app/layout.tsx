"use client";
import "@/ui/globals.css";
import { Box, ThemeProvider } from "@mui/material";
import { theme } from "@/ui/muiTheme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="ja">
        <body className="bg-primary m-0">
          <Box className="">{children}</Box>
        </body>
      </html>
    </ThemeProvider>
  );
}
