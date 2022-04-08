import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Box, Container} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Logo from "./Logo";
import Footer from "./../Footer";
import { theme, inputSx, buttonSx, linkSx } from "../theme";
import axios from "axios"

function SignUp() {
  
  const [form, setForm] = useState({
      username: "",
      userValid: false,
      email: "",
      emailValid: false,
      password: "",
      passValid: false
  });

  const [buttonState, setButtonState] = useState(true)
  
  function inputChange (e) {
      const inputName = e.target.name
      const inputValue = e.target.value
      let userError = ""
      let emailError = ""
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
      let passError = ""
      

      if (inputName === "username" && inputValue.length === 0) {
        userError = true
      } else {userError = false}

      if (inputName === "email" && reg.test(inputValue) === false) {
        emailError = true
      } else {emailError = false}

      if (inputName === "password" && inputValue.length <6) {
        passError = true
      } else {passError = false}

      console.log(inputValue + userError)
      setForm({...form, [inputName]: inputValue, userValid: userError, emailValid: emailError, passValid: passError})
      console.log(form)

      if (form.username.length > 0 && reg.test(form.email) === true && form.email.length > 0 && !passError && form.password.length > 0) {
        setButtonState(false)
        console.log(buttonState)
      } else (setButtonState(true))
  }


    const registerSubmit = async () => {

      try {
            await axios.post("https://cinemacoon.herokuapp.com/api/auth/reg", {...form}, {
                headers: {
                    "Content-Type": "application/json"
                }
                
            })
            .then(response => console.log(response))

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
                  autoComplete="given-name"
                  name="username"
                  type="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  value={form.username}
                  error={form.userValid}
                  autoFocus
                  sx={{...inputSx}}
                  onChange={inputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  error={form.emailValid}
                  autoComplete="email"
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
                  value={form.password}
                  error={form.passValid}
                  // helperText="Please, enlarge your password"
                  id="password"
                  autoComplete="new-password"
                  sx={{...inputSx}}
                  onChange={inputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                size="large"
                type="submit"
                onClick={registerSubmit}
                fullWidth
                variant="contained"
                disabled={buttonState}
                disableElevation="true"
                sx={{...buttonSx}}
                >
                Sign Up
                </Button>
              </Grid>
                <Grid container xs={10} justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2" underline="none" sx={{...linkSx}}>
                    Already have an account? Sign in
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

export default SignUp