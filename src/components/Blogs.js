import { Box, Container, Grid } from "@mui/material";
import React from "react";
import image1 from "../image/image1.png";
import image2 from "../image/image2.png";

export const Blogs = () => {
  return (
    <>
      <h1>Blogs</h1>
      <Container maxWidth="lg" sx={{ pt: 5, pb: 7 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2.5}>
            <Box sx={{ borderRadius: "5px", bgcolor: "wheat" }}>
              <Box sx={{ borderRadius: "15px" }}>
                <img src={image1} className="imagesize"></img>
              </Box>
              <Box>
                <Box>
                  <p>Name change Birth</p>
                  <p>Certificate</p>
                </Box>
                <Box sx={{ paddingBottom: "0.5px" }}>
                  <h4>cxxvx</h4>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={2.5}>
            <Box sx={{ borderRadius: "10px", bgcolor: "wheat" }}>
              <Box>
                <img src={image2} className="imagesize"></img>
              </Box>
              <Box sx={{ pt: 2, pb: 7 }}>
                <h4>helldsd</h4>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Grid item xs={6}></Grid> */}
      </Container>
    </>
  );
};
