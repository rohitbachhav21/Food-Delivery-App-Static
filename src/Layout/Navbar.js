import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { useState } from "react";
import Drawer from '@material-ui/core/Drawer';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawer} sx={{ textAlign: "center" }}>
            <Typography
                color={"goldenrod"}
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, padding: "20px", backgroundColor: "black" }}
            >
                <StorefrontIcon />
                TheIndianOven
            </Typography>

            <ul className="mobile-nav-menu">
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/menu"}>Menu</Link>
                </li>

                <li>
                    <Link to={"/about"}>About</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
            </ul>

        </Box>
    );

    return (
        <div>
            <Box>
                <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ margin: 2, display: { sm: "none" } }}
                            onClick={handleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            color={"goldenrod"}
                            variant="h6"
                            component={"div"}
                            sx={{ flexGrow: 1 }}
                        >
                            <StorefrontIcon />
                            TheIndianOven
                        </Typography>
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <ul className="nav-menu">
                                <li>
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li>
                                    <Link to={"/menu"}>Menu</Link>
                                </li>

                                <li>
                                    <Link to={"/about"}>About</Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawer} sx={{
                        display: { sx: "block", sm: "none" }

                    }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Box ><Toolbar /></Box>
            </Box>
        </div>
    );
};

export default Navbar;
