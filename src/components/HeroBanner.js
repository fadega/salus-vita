import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" }}} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" 
      sx={{ fontSize:{lg:'55px',xs:'45px'}}}
      >
         Salus - Vita
      </Typography>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mt="30px" mb="20px">
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the moste effective <br /> workout plans
      </Typography>

      <Button variant="contained" color="error" sx={{backgroundColor:"#ff2625", padding:'10px'}}href="#exercises">
        Explore Exercises 
      </Button>
      <Typography fontWeight={600} color="#ff2625"
        sx={{ 
          opacity:0.1,
          display:{lg:'block',xs:'none'},
       
        }}
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" 
      className="hero-banner-img"/>
    </Box>
  );
};

export default HeroBanner;
