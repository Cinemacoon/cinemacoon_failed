import React from "react";
import { Typography, Grid, Box, Card, CardMedia, CardContent, Stack, Link } from "@mui/material";
import {mainSx, titleSx, ratesSx, onlLogoSx, coonSx, aggLogoSx} from "./theme"

function Main(props) {

    return(
      <Typography variant="body1"> 
      <Box sx={{textAlign: "center"}}>
      <Grid container xs={9} sx={{...mainSx, padding: "0", m: "auto", mb: "0.5%"}}>
              <Grid item xs={4} sx={{textAlign: "left"}}>
                  <Card sx={{overflow: "visible", display: "flex", bgcolor: "transparent", boxShadow: "unset"}}>
                      <CardMedia 
                        component="img"
                        src={props.poster}
                        alt="img_poster"
                        sx={{height: 150, width: "auto", m: "0 10px", "&:hover": {boxShadow: "0 0 2px 2px white", transform: "scale(2)"}}}
                      />
                      <CardContent
                      sx={{padding: 0, "&:last-child": {padding: 0}}}
                      >
                          <Stack spacing={{xs:1}} sx={{height: "100%", justifyContent: "center"}}>
                              <Grid item sx={{...titleSx}}>{props.title}</Grid>
                              <Grid item sx={{fontSize: "1.07rem"}}>{props.director}</Grid> 
                              <Grid item>{props.genre}</Grid> 
                          </Stack>
                        
                      </CardContent>
                  </Card>
              </Grid>
              <Grid container xs={2} sx={{...ratesSx}}>
                  <Grid item xs sx={{maxwidth: 30}}>
                        <Stack spacing={{xs:2}} sx={{height: "100%", justifyContent: "center"}}>
                              <Link href={props.imdbLink}><Grid component="img" src="./logo/imdb_logo.png" sx={{...aggLogoSx}}></Grid></Link>
                              <Link href={props.metaLink}><Grid component="img" src="./logo/meta_logo.png" sx={{...aggLogoSx}}></Grid></Link>
                              <Link href={props.rtLink}><Grid component="img" src="./logo/rt_logo.png" sx={{...aggLogoSx}}></Grid></Link>
                        </Stack>
                  </Grid>
                  <Grid item sx={{minWidth: 100}}>
                        <Stack spacing={{xs:2}} sx={{height: "100%", justifyContent: "center"}}>
                              <Grid item>{props.imdbRate}</Grid>
                              <Grid item>{props.metaRate}</Grid> 
                              <Grid item>{props.rtRate}</Grid> 
                        </Stack>
                  </Grid>
                  <Grid item sx={{minWidth: 100}}>
                        <Stack spacing={{xs:2}} sx={{height: "100%", justifyContent: "center"}}>
                              <Grid item>{props.imdbVotes}</Grid>
                              <Grid item>{props.metaVotes}</Grid> 
                              <Grid item>{props.rtVotes}</Grid> 
                        </Stack>
                  </Grid>
              </Grid>
              <Grid container xs sx={{alignItems: "center", justifyContent: "center"}}>
                  <Grid item>
                      <Link href={(typeof props.isNetflix === "undefined") ? null : props.netflixLink}>
                      <Grid 
                      component="img" 
                      src={(typeof props.isNetflix === "undefined") ? null : "./logo/netflix_logo.png"} 
                      sx={(typeof props.isNetflix === "undefined") ? null : {...onlLogoSx}}></Grid>
                      </Link>
                      <Link href={(typeof props.isKp === "undefined") ? null : props.kpLink}>
                      <Grid 
                      component="img" 
                      src={(typeof props.isKp === "undefined") ? null : "./logo/kp_logo.png"} 
                      sx={(typeof props.isKp === "undefined") ? null : {...onlLogoSx}}></Grid>
                      </Link>
                      <Link href={(typeof props.isOkko === "undefined") ? null : props.okkoLink}>
                      <Grid 
                      component="img" 
                      src={(typeof props.isOkko === "undefined") ? null : "./logo/Okko_logo.png"} 
                      sx={(typeof props.isOkko === "undefined") ? null : {...onlLogoSx}}></Grid>
                      </Link>
                      <Link href={(typeof props.isIvi === "undefined") ? null : props.iviLink}>
                      <Grid 
                      component="img" 
                      src={(typeof props.isIvi === "undefined") ? null : "./logo/Ivi_logo.png"} 
                      sx={(typeof props.isIvi === "undefined") ? null : {...onlLogoSx}}></Grid>
                      </Link>
                      <Link href={(typeof props.isApple === "undefined") ? null : props.appleLink}>
                      <Grid 
                      component="img" 
                      src={(typeof props.isApple === "undefined") ? null : "./logo/Apple_logo.png"} 
                      sx={(typeof props.isApple === "undefined") ? null : {...onlLogoSx}}></Grid>
                      </Link>
                      <Grid 
                      component="img" 
                      src={(props.isStream === "yes") ? null : "./images/sad-coon-with-glasses-fat4.png"} 
                      sx={(props.isStream === "yes") ? null : {...coonSx}}></Grid>
                  </Grid>
              </Grid>
              <Grid container xs={2} sx={{alignItems: "center", justifyContent: "center"}}>
                  <Grid item>
                    <Link href={(typeof props.isTorr === "undefined") ? null : props.torrLink}>
                    <Grid component="img" src={(typeof props.isTorr === "undefined") ? null : "./logo/torr_logo_green.png"} sx={{...onlLogoSx}}></Grid>
                    </Link>
                      <Link href={(typeof props.isSub === "undefined") ? null : props.subLink}>
                      <Grid component="img" src={(typeof props.isSub === "undefined") ? null : "./logo/sub_logo.png"} sx={{...onlLogoSx}}></Grid>
                      </Link>
                  </Grid>
              </Grid>
          </Grid>
          </Box>
      </Typography>
    )
}

export default Main