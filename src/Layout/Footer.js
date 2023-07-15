import React from 'react'
import { Box, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", bgcolor: "black", color: "white", padding: "20px" }}>
            <Box sx={{
                margin: "10px", "& svg": { fontSize: "40px", cursor: "pointer", padding: "5px" }, "& svg:hover": {
                    color: "goldenrod", transform: "translateX(5px)", transition: "all 400ms"
                }
            }}>
                <InstagramIcon />
                <TwitterIcon />
                <WhatsAppIcon />
            </Box>
            <Typography variant='h5' sx={{
                "@media (max-width:600px)": {
                    fontSize: '1.2rem'
                }
            }}>
                All Rights Reserved &copy; TheIndianOven
            </Typography>
        </Box>
    )
}

export default Footer
