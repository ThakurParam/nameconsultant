import React from "react";
import img from "../image/namechangelogo.png";
import { Button, Grid } from "@mui/material";
export const Navbar = () => {
  return (
    <>
      <div className="div">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <img src={img}  className="image22"></img>
          </Grid>
          <Grid item xs={6}>
            <Button>Home</Button>
            <Button>About Us</Button>
            <Button>ContactUS</Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
