import { Box, Container, Grid } from "@mui/material";
import React from "react";

export const Toptab = () => {
  // function submit(){
  //   if () {

  //   } else {

  //   }
  // }
  return (
    <>
      <Box
        sx={{ bgcolor: "#F0F2F5", paddingBottom: "60px", paddingTop: "60px" }}
      >
        <Container maxWidth="lg">
          <h1>Best Name Change Consultant</h1>
          <Grid container spacing={2} sx={{ paddingTop: "20px" }}>
            <Grid item xs={8}>
              <iframe></iframe>
            </Grid>
            <Grid item xs={4}>
              <div className="indiv">
                <div className="topdiv">
                  <label> Your Name</label>
                  <input
                    type="text"
                    // placeholder="Name please..."
                    className="input"
                  ></input>
                </div>
                <div className="topdiv">
                  <label>Email Address</label>
                  <input
                    type="Email"
                    // placeholder="Email Address..."
                    className="input"
                  ></input>
                </div>
                <div className="topdiv">
                  <label>*Mobile</label>
                  <input
                    type="Number"
                    // placeholder="Mobile no please..."
                    className="input"
                  ></input>
                </div>
                <div className="topdiv">
                  <label>Message</label>
                  <input
                    type="text"
                    // placeholder="Place your mesage here..."
                    className="topinput"
                  ></input>
                </div>
                <button className="submit">Submit</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
