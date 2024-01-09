import { Box, Grid } from "@mui/material";
import React from "react";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}
export const MultiTemplate: FC<Props> = (props) => {
  const { children } = props;
  const childrenArray = React.Children.toArray(children);

  return (
    <Grid container>
      <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Box className="">{childrenArray[0]}</Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className="h-screen">{childrenArray[1]}</Box>
      </Grid>
      <Grid item md={3} sx={{ display: { xs: "none", md: "block" } }}>
        <Box className="">{childrenArray[2]}</Box>
      </Grid>
    </Grid>
  );
};
