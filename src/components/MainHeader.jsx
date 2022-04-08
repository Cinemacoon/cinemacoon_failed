import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import {headerSx} from "./theme"

function MainHeader() {
    return (
      <Typography variant="h3"> 
      <Box sx={{textAlign: "center"}}>
      <Grid container xs={9} sx={{bgcolor: "primary.main", padding: "0.5% 0", m: "auto", mb: "0.5%"}}>
              <Grid item xs={4} sx={{...headerSx}}>
                  
              </Grid>
              <Grid container xs={2} sx={{...headerSx, minWidth: 230}}>
                  <Grid item xs sx={{maxwidth: 30}}/>
                  <Grid item sx={{minWidth: 100}}>Ratings</Grid>
                  <Grid item sx={{minWidth: 100}}>Votes</Grid>
              </Grid>
              <Grid container xs sx={{...headerSx, justifyContent: "center"}}>
                  <Grid item>
                      Watch Online
                  </Grid>
              </Grid>
              <Grid container xs={2} sx={{...headerSx, justifyContent: "center"}}>
                  <Grid item>
                      Download
                  </Grid>
              </Grid>
          </Grid>
          </Box>
      </Typography>
    )
}

export default MainHeader