import { createTheme } from '@mui/material/styles';
import { blueGrey } from "@mui/material/colors";

const bgImgDark = "url('../images/fon_7.jpg')"
const bgImgLight = "url('../images/fon_8.jpg')"
// const bgTexturePrimary = "url('../images/always-grey.png')"
// const bgTexturePrimary = "url('../images/navy.png')"
// const bgTexturePrimary = "url('../images/otis-redding.png')"
// const bgTexturePrimary = "url('../images/transparent-square-tiles.png')"
// const bgTexturePrimary = "url('../images/triangles.png')"
const bgTexturePrimary = "url('../images/random-grey-variations-lg.png')"
const bgTextureSecondary = "url('../images/transparent-square-tiles.png')"

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[50],
        },
        secondary: {
            main: blueGrey[900],
        },
        info: {
            main: blueGrey[100],
            dark: blueGrey[300]
        },
        background: {
            default: blueGrey[900]
        }

    },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
              body: {
                backgroundImage: bgTexturePrimary
              }
          }
      }
    },
    typography: {
        // fontFamily: "'Poppins', sans-serif", //неплохо, в среднем немного пожирнее
        fontFamily: "'Mulish', sans-serif", //неплохо, чуть более обычный
        // fontFamily: "'Jost', sans-serif", //неплохо, но мелковато
        // fontFamily: "'Red Hat Display', sans-serif", //неплохо
        // fontFamily: "'Urbanist', sans-serif", // неплохо, возможно тонковато,

        h1: {
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            textTransform: "uppercase"
        },
        h3: {
            fontSize: "1.4rem",
            fontWeight: 800,
        },
        h4: {
            fontSize: "1.3rem",
            fontWeight: 400,
        },
        body1: {
            fontSize: "14px",
            fontWeight: 500
        }
    }
});


const inputSx = {
    input:{color: "primary.main", bgcolor: "rgba(255,255,255,0.1)"}, 
    "& .MuiInputLabel-root":{color: "info.main" }, 
    "& .MuiInputLabel-root.Mui-focused":{color: "primary.main" }, 
    "& .MuiOutlinedInput-root": {"& > fieldset": {borderColor: "info.main"}},
    "& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "primary.main"}},
    "& .MuiOutlinedInput-root.Mui-focused": {"& > fieldset": {borderColor: "info.main"}},
    "& .MuiOutlinedInput-root.Mui-focused:hover": {"& > fieldset": {borderColor: "primary.main"}}
}

const buttonSx = {
    mt: 3, 
    color: "secondary.main", 
    backgroundColor: "info.main", 
    fontSize: "1.1rem",
    fontWeight: 700,
    ":hover": {
       color: "primary.main", 
       backgroundColor: "info.dark"},
    mb: 2, 
    minHeight: '56px', 
    m: "0",
    ":disabled": {bgcolor: "rgba(255,255,255,0.4)", color: "info.dark"}
}

const linkSx = {
    color: "info.main",
    ":hover": {
        color: "info.dark"}
}

const navbarSx = {
    color: "secondary.main",
    fontWeight: 700
}

const sorterSx = {
    color: "info.main"
}

const headerSx = {

}

const mainSx = {
    bgcolor: "primary.main",
    backgroundImage: bgTextureSecondary
}

const titleSx = {
    fontSize: "1.25rem", 
    fontWeight: 700
}

const ratesSx = {
    fontSize: "1.25rem", 
    minWidth: 230, 
    fontWeight: 600
}

const aggLogoSx = {
    maxWidth: 28,
    borderRadius: "50%",
    ":hover": {
        opacity: "70%"}
}

const onlLogoSx = {
    padding: "2px", 
    maxWidth: 70,
    borderRadius: "50%",
    ":hover": {
        opacity: "70%"}
}

const coonSx = {
    maxHeight: 80
}


export { theme, inputSx, buttonSx, linkSx, navbarSx, sorterSx, headerSx, mainSx, titleSx, ratesSx, aggLogoSx, onlLogoSx, coonSx}