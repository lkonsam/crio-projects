import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import NavBar from "../../Components/NavBar/NavBar";
import { Box, Container, Stack } from "@mui/material";
import HeroSlider from "../../Components/HeroSlider/HeroSlider";
import SearchHospital from "../../Components/SearchHospital/SearchHospital";
import HeroServices from "../../Components/HeroServices/HeroServices";
import Offers from "../../Components/Sections/Offers/Offers";
import Specialization from "../../Components/Sections/Specialization/Specialization";
import Specialists from "../../Components/Sections/Specialists/Specialists";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PatientCaring from "../../Components/Sections/PatientCaring/PatientCaring";
import Blogs from "../../Components/Sections/Blogs/Blogs";
import OurFamilies from "../../Components/Sections/OurFamilies/OurFamilies";
import FAQs from "../../Components/Sections/FAQs/FAQs";

export default function Home() {
  return (
    <>
      <Box>
        <Box
          sx={{
            background:
              "linear-gradient(#E7F0FF , rgba(232, 241, 255, 0.47) 90%, #fff 10%)",
          }}
          mb={4}
        >
          <NavBar />

          <Container maxWidth="xl">
            <HeroSlider />
            <Stack
              p={{ xs: 2.5, md: 8 }}
              mt={{ xs: -2, md: 0, lg: -6, xl: -10 }}
              position="relative"
              zIndex={99}
              bgcolor="#fff"
              borderRadius="15px"
              spacing={10}
              boxShadow="0 0 12px rgba(0,0,0,0.1)"
            >
              <SearchHospital />
              <HeroServices />
            </Stack>
          </Container>
        </Box>
        <Offers />
        <Specialization />
        <Specialists />
        <PatientCaring />
        <Blogs />
        <OurFamilies />
        <FAQs />
      </Box>
    </>
  );
}
