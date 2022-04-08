import React from "react";
import { Grid, Box, Container} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme";
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <ThemeProvider className="themeProvider" theme={theme}>
                <Box sx={{position: "absolute", bottom: 0, minHeight: "50px", textAlign: "center", color: "info.main", width: "100%"}}>
                    <Typography variant="body2" align="center">
                        Victor Sukovaty ©  {new Date().getFullYear()}
                    </Typography>
                </Box>
        </ThemeProvider>
        
    )
}

export default Footer