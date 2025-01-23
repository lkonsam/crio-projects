import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Offers() {
  const offers = [
    { image: "/OfferImage/offer1.png", title: "Offer1" },
    { image: "/OfferImage/offer2.png", title: "Offer2" },
    { image: "/OfferImage/offer1.png", title: "Offer3" },
    { image: "/OfferImage/offer2.png", title: "Offer4" },
    { image: "/OfferImage/offer1.png", title: "Offer5" },
    { image: "/OfferImage/offer2.png", title: "Offer6" },
  ];

  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
          style={{
            paddingBottom: "40px", // Adds extra padding below the slider
          }}
        >
          {offers.map((ele, index) => (
            <SwiperSlide key={index}>
              <Box
                component={"img"}
                src={ele.image}
                alt={ele.title}
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
