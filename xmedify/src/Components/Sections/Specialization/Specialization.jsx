import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from "../../IconCard/IconCard";

export default function Specialization() {
  const data = [
    { icon: "/SpecializationIcon/Drugstore.png", title: "Dentistry" },
    { icon: "/SpecializationIcon/primary-care.png", title: "Primary Care" },
    { icon: "/SpecializationIcon/cardiology.png", title: "Cardiology" },
    { icon: "/SpecializationIcon/mri.png", title: "MRI Resonance" },
    { icon: "/SpecializationIcon/blood-test.png", title: "Blood Test" },
    { icon: "/SpecializationIcon/piscologist.png", title: "Piscologist" },
    { icon: "/SpecializationIcon/Drugstore.png", title: "Laboratory" },
    { icon: "/SpecializationIcon/X-Ray.png", title: "X-Ray" },
  ];

  return (
    <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={4}>
          Find by specialisation
        </Typography>

        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          mb={5}
          justifyContent={"center"}
        >
          {data.map((item) => (
            <Grid item xs={4} md={3} key={item.title}>
              <IconCard
                img={item.icon}
                title={item.title}
                bgColor={"#FFFFFF"}
                shadow={true}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" size="large" disableElevation>
          View All
        </Button>
      </Container>
    </Box>
  );
}
