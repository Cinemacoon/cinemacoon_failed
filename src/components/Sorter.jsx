import React from "react";
import { Typography, Grid } from "@mui/material";
import {sorterSx} from "./theme"


function Sorter() {
    return (
      <Typography variant="body2"> 
      <Grid container xs={9} sx={{justifyContent: "right", textAlign: "right", padding: "0.5% 0", m: "auto"}}>
              <Grid item xs={1} sx={{...sorterSx}}>
                  ru subbed
              </Grid>
              <Grid item xs={1} sx={{...sorterSx}}>
                  genre 
              </Grid>
              <Grid item xs={1} sx={{...sorterSx}}>
                sort by
              </Grid>
          </Grid>
      </Typography>
    )
}

export default Sorter