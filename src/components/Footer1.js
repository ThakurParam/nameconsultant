import { Box, Container, Grid } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedCameraOutlinedIcon from "@mui/icons-material/LinkedCameraOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const Footer1 = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#F0F2F5", py: "60px" }}>
        <Container maxWidth="lg" sx={{ bgcolor: "white", padding: "20px" }}>
          {/* <ul className="list0">
            <li>
              <TwitterIcon className="icon" />
              Twitter
            </li>
            <li>
              <FacebookOutlinedIcon />
              Facebook
            </li>
            <li>
              <LinkedCameraOutlinedIcon />
              Instagram
            </li>
            <li>
              <SmartDisplayOutlinedIcon />
              Youtube
            </li>
            <li>
              <PinterestIcon />
              Pinterest
            </li>
            <li>
              <SportsEsportsIcon />
              Discord
            </li>
          </ul> */}
          <Grid container spacing={2}>
            <Grid item lg={2} md={4} xs={12}>
              <div className="itab">
                <div>
                  <TwitterIcon
                    sx={{ bgcolor: "#F0F2F5", p: 1, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <p className="ptext"> Twitter</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} md={4} xs={12}>
              <div className="itab">
                <div>
                  <FacebookOutlinedIcon
                    sx={{ bgcolor: "#F0F2F5", p: 1, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <p className="ptext"> Facebook</p>
                </div>{" "}
              </div>
            </Grid>
            <Grid item lg={2} md={4} xs={12}>
              <div className="itab">
                <div>
                  <LinkedCameraOutlinedIcon
                    sx={{ bgcolor: "#F0F2F5", p: 1, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <p className="ptext"> Instagram</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} md={4} xs={12}>
              <div className="itab">
                <div>
                  <SmartDisplayOutlinedIcon
                    sx={{ bgcolor: "#F0F2F5", p: 1, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  {" "}
                  <p className="ptext"> Youtube</p>
                </div>{" "}
              </div>
            </Grid>
            <Grid item lg={2} md={4} xs={12}>
              <div className="itab">
                <div>
                  <PinterestIcon
                    sx={{ bgcolor: "#F0F2F5", p: 1, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  {" "}
                  <p className="ptext"> Pinterest</p>
                </div>
              </div>
            </Grid>
            <Grid item lg={2} md={4} xs={12}>
              <div className="itab">
                <div>
                  <SportsEsportsIcon
                    sx={{ bgcolor: "#F0F2F5", p: 1, borderRadius: "50%" }}
                  />
                </div>
                <div>
                  <p className="ptext"> Discord</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
