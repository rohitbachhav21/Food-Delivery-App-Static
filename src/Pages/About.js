import React from 'react'
import Layout from '../Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
    return (
        <Layout>
            <Box sx={{
                p: 2,
                my: 10, textAlign: "center", "& h4": {
                    fontWeight: "bold", my: 2, fontSize: "2rem"
                }, "& p": { textAlign: "justify" }, "@media (max-width:600px)": {
                    mt: 0, "& h4": {
                        fontSize: "1.5rem"
                    }
                }
            }}>
                <Typography variant="h4">
                    Welcome to MyRestaurant
                </Typography>
                <p>At The Indian Oven, we invite you on a culinary journey that celebrates the rich flavors and vibrant traditions of Indian cuisine. Nestled in the heart of Pune, our restaurant is a haven for food enthusiasts seeking an unforgettable dining experience.</p><br />
                <p>Step into our warm and inviting space, where the tantalizing aroma of spices fills the air, setting the stage for a feast that will awaken your taste buds. Our team of skilled chefs meticulously craft each dish with a perfect blend of authentic Indian spices and locally sourced, fresh ingredients, ensuring an explosion of flavors in every bite.</p><br />
                <p>From the fiery tang of our tandoori delights to the fragrant aroma of our biryanis, each dish at The Indian Oven is a testament to our commitment to quality and culinary excellence. Whether you're a vegetarian, a meat lover, or have dietary preferences, our diverse menu offers a plethora of options to satisfy every palate.</p><br />
                <p>We believe that dining is not just about nourishing the body but also about creating lasting memories. Immerse yourself in the warm ambiance of our restaurant, where our attentive staff provides impeccable service, making you feel like a cherished guest. Whether you're enjoying an intimate dinner for two, celebrating a special occasion with friends and family, or hosting a corporate event, The Indian Oven is the perfect destination.</p><br />
                <p>We pride ourselves not only on serving delectable food but also on showcasing the cultural richness and diversity of India. Our restaurant showcases exquisite Indian artwork, creating an immersive setting that transports you to the vibrant streets of Delhi or the serene backwaters of Kerala.</p><br />
                <p>At The Indian Oven, we are committed to creating an exceptional dining experience that leaves a lasting impression. Come and indulge in the flavors, aromas, and hospitality that define Indian cuisine. We look forward to welcoming you to our culinary haven, where every meal is a celebration of India's culinary heritage.</p><br />
            </Box>
        </Layout>
    )
}

export default About
