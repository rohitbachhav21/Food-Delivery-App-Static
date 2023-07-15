import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
    return (
        <Layout>
            <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold" } }}>
                <Typography>
                    <p>

                    </p>
                </Typography>
            </Box>
            <Box sx={{
                m: 3, width: "600px", boxShadow: "revert", ml: 10, "@media (max-width:600px)": {
                    width: "300px", ml: 7
                }
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label="contact-details">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: "black", color: "white", align: "center" }}>
                                    Contact Details
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> 1800-10-2000 (tollfree)
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <EmailIcon sx={{ color: "sky", pt: 1 }} /> support@theindianoven.com
                                </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                                </TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    )
}

export default Contact
