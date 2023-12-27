import { Container, Grid } from "@mui/material";
import React from "react";
import img from "../image/namechangelogo.png";
export const Footer2nd = () => {
  return (
    <>
      <Container maxWidth="lg">
        <div>
          <Grid container spacing={2} sx={{ borderBottom: "2px solid grey" }}>
            <Grid item xs={12} md={6}>
              <div className="foot">
                <div>info@namechange.in</div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "end" }}>
              <div className="foot1">
                <div>+91-9540005026</div>
              </div>
            </Grid>
            {/* </div> */}
          </Grid>
          <div className="foot2">
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={8}
                lg={8}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <div>
                      <img src={img} className="imagefoot"></img>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={9}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p className="pptext">Contact Us</p>
                    <p className="pptext">Terms & Conditions</p>
                    <p className="pptext">Privacy Policy</p>
                    <p className="pptext">Blogs</p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={4} lg={4} sx={{ textAlign: "end" }}>
                All Rights Reserved © 2023
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </>
  );
};
