import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SpecialistCard from "./SpecialistCard";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Specialists() {
  const specialist_data = [
    {
      img: "/SpecialistsImage/lesley.png",
      title: "Dr. Lesley Hull",
      designation: "Medicine",
    },
    {
      img: "/SpecialistsImage/ahmad.png",
      title: "Dr. Ahmad Khan",
      designation: "Neurologist",
    },
    {
      img: "/SpecialistsImage/heena.png",
      title: "Dr. Heena Sachdeva",
      designation: "Orthopadics",
    },
    {
      img: "/SpecialistsImage/ankur.png",
      title: "Dr. Ankur Sharma",
      designation: "Medicine",
    },
    {
      img: "/SpecialistsImage/ahmad-stevens.png",
      title: "Dr. Ahmad Stevens",
      designation: "Neurologist",
    },
    {
      img: "/SpecialistsImage/ahmad-stevens.png",
      title: "Dr. Ahmad Stevens",
      designation: "Neurologist",
    },
  ];

  return (
    <Box py={4} id="find-doctors">
      <Typography variant="h2" textAlign="center" mb={3} px={2}>
        Our Medical Specialist
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
        style={{
          paddingBottom: 40,
        }}
        // navigation={true}
      >
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
