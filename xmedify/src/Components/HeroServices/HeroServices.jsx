import { Box, Grid, Typography } from "@mui/material";
import IconCard from "../IconCard/IconCard";
import { useMemo } from "react";

export default function HeroServices() {
  const Services = useMemo(
    () => [
      { img: "/HeroIcons/Doctor.png", title: "Doctors" },
      { img: "/HeroIcons/Drugstore.png", title: "Labs" },
      {
        img: "/HeroIcons/Hospital.png",
        title: "Hospitals",
        active: true,
      },
      { img: "/HeroIcons/Capsule.png", title: "Medical Store" },
      { img: "/HeroIcons/Ambulance.png", title: "Ambulance" },
    ],
    []
  );

  return (
    <Box>
      <Typography
        component="h4"
        fontSize={20}
        color="#102851"
        fontWeight={500}
        textAlign="center"
        mb={2}
      >
        You may be looking for
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 1, md: 2 }}
        justifyContent={"center"}
      >
        {Services.map((service) => (
          <Grid item key={service.title} xs={4} md={2.4}>
            <IconCard
              img={service.img}
              title={service.title}
              active={service.active || false}
              bgColor="#FAFBFE"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
