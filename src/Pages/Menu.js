import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import { MenuList } from '../Data/data'

const Menu = () => {
    return (
        <Layout>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {
                    MenuList.map(menu => (
                        <Card sx={{ maxWidth: "400px", display: "flex", m: 2 }}>
                            <CardActionArea>
                                <CardMedia sx={{ minHeight: "400px" }} component={"img"} src={menu.image} alt={menu.name} />
                                <CardContent>
                                    <Typography variant="h5" gutterButton component={'div'}>
                                        {menu.name}
                                    </Typography>
                                    <Typography variant="body2" textAlign={"justify"}>
                                        {menu.description}
                                    </Typography>
                                    <Typography variant="h5" textAlign={"justify"}>
                                        {menu.price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                }
            </Box>
        </Layout >
    )
}

export default Menu
