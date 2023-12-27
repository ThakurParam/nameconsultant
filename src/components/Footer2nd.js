import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../image/namechangelogo.png";
export const Footer2nd = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div>
          <div className="foot">
            <div>info@namechange.in</div>
            <div>+91-9540005026</div>
          </div>
          <div className="foot2">
            <Grid container spacing={2}>
              <Grid
                item
                xs={8}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <img src={img} className="imagefoot"></img>
                </div>
                <p>Contact Us</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Blogs</p>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "end" }}>
                All Rights Reserved © 2023
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
};
