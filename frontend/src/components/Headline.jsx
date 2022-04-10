import React from "react";
import { Grid, Typography } from "@mui/material"

function Headline() {
    return (
      <Typography variant="h1"> 
          <Grid container sx={{justifyContent: "space-between"}}>
              <Grid item xs={6}>
                  Cinemacoon
              </Grid>
              <Grid item xs={6} sx={{textAlign: "right"}}>
                  Top of 2021
              </Grid>
          </Grid>
      </Typography>
    )
}

export default Headline