import React, { useState, useContext } from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Box, Container, FormControlLabel, Checkbox} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Logo from "./Logo";
import Footer from "./../Footer";
import { theme, inputSx, buttonSx, linkSx } from "../theme";
import axios from "axios"
import AuthContext from "./../../context/AuthContext"

function SignIn() {

  const [form, setForm] = useState({
    username: "",
    password: ""
});

const { login } = useContext(AuthContext)

function inputChange (e) {
  const inputName = e.target.name
  const inputValue = e.target.value
  
  console.log(inputValue)
  setForm({...form, [inputName]: inputValue})
  console.log(form)

}


const loginSubmit = async () => {

  try {
        await axios.post("api/auth/login", {...form}, {
            headers: {
                "Content-Type": "application/json"
            }
            
        })
        .then(response => {
            login(response.data.token, response.data.userId)
        })
    } catch (error) {
        console.log(error)
    }
};


  return (
    <ThemeProvider className="themeProvider" theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
          <Box sx={{marginTop: "100px"}}>
            <Logo />
          </Box>
          {/* </Avatar> */}
            <Box component="form" onSubmit={e => e.preventDefault()} sx={{ mt: 3 }}>
            <Grid container spacing={2} sx={{justifyContent: "center"}}>
              <Grid item xs={10}>
                <TextField
                  autoComplete="username"
                  name="username"
                  type="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={form.username}
                  sx={{...inputSx}}
                  onChange={inputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{...inputSx}}
                  value={form.password}
                  onChange={inputChange}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" sx={{color: "info.main"}} />}
                    label="Remember me"
                    sx={{color: "info.main"}} 
                /> 
              </Grid>
              <Grid item xs={10}>
                    <Button
                    size="large"
                    type="submit"
                    fullWidth
                    variant="contained"
                    disableElevation="true"
                    sx={{...buttonSx}}
                    onClick={loginSubmit}
                    >
                    Sign In
                    </Button> 
              </Grid>
                <Grid container xs={10} justifyContent="flex-end" sx={{paddingLeft: "16px"}}> 
                  <Grid item xs={10}>
                    <Link href="/remember" variant="body2" underline="none" sx={{...linkSx}}>
                    Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2" underline="none" sx={{...linkSx}}>
                    Sign Up
                    </Link>
                  </Grid>
                </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default SignIn