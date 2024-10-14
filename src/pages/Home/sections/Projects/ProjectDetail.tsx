import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Box, IconButton, Container, Grid, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Foto1P1 from "../../../../assets/images/projeto1/Foto1.jpg";
import Foto2P1 from "../../../../assets/images/projeto1/Foto2.jpg";
import Foto3P1 from "../../../../assets/images/projeto1/Foto3.jpg";
import Foto1P2 from "../../../../assets/images/projeto2/Foto1.jpg";
import Foto2P2 from "../../../../assets/images/projeto2/Foto2.jpg";
import Foto1P3 from "../../../../assets/images/projeto3/Foto1.jpg";
import Foto2P3 from "../../../../assets/images/projeto3/Foto2.jpg";
import Foto3P3 from "../../../../assets/images/projeto3/Foto3.jpg";
import Foto4P3 from "../../../../assets/images/projeto3/Foto4.jpg";


const projectImages: { [key: string]: string[]} = {
  "1": [Foto1P1, Foto2P1, Foto3P1],
  "2": [Foto1P2, Foto2P2],
  "3": [Foto1P3, Foto2P3, Foto3P3, Foto4P3],
}

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(8, 2),
  minHeight: "100vh",
}));

const ProjectDetail = () => {
  const { projectId } = useParams<{projectId: string}>();
  const navigate = useNavigate();

  const images = projectId && projectImages[projectId] ? projectImages[projectId] : [];

  const NextArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{ position: "absolute", top: "50%", right: 20, zIndex: 10, color: "white", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    );
  };

  const PrevArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{ position: "absolute", top: "50%", left: 20, zIndex: 10, color: "white", transform: "translateY(-50%)" }}
        onClick={onClick}
      >
        <ArrowBackIosIcon />
      </IconButton>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    dotsClass: "slick-dots", 
  };

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", }}>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12}>
            <Box sx={{ position: "relative" }}>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Project ${projectId} - Image ${index + 1}`}
                      style={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain" }}
                    />
                  </div>
                ))}
              </Slider>
            </Box>
            <IconButton
                onClick={() => navigate(-1)}
                sx={{ position: "absolute", top: 20, left: 20, color: "white" }}
              >
                Voltar
              </IconButton>
          </Grid>
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default ProjectDetail;
