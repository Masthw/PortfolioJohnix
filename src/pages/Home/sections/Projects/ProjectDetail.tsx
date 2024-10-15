import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Box, IconButton, Container, Grid, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Foto1P1 from "../../../../assets/images/projeto1/Foto1.jpg";
import Foto2P1 from "../../../../assets/images/projeto1/Foto2.jpg";
import Foto3P1 from "../../../../assets/images/projeto1/Foto3.jpg";
import Foto1P2 from "../../../../assets/images/projeto2/Foto1.jpg";
import Foto1P3 from "../../../../assets/images/projeto3/Foto1.jpg";
import Foto2P3 from "../../../../assets/images/projeto3/Foto2.jpg";
import Foto3P3 from "../../../../assets/images/projeto3/Foto3.jpg";
import Foto4P3 from "../../../../assets/images/projeto3/Foto4.jpg";
import Foto1P4 from "../../../../assets/images/projeto4/Foto1.jpg";
import Foto2P4 from "../../../../assets/images/projeto4/Foto2.jpg";
import Foto3P4 from "../../../../assets/images/projeto4/Foto3.jpg";
import Foto1P5 from "../../../../assets/images/projeto5/Foto1.jpg";
import Foto1P6 from "../../../../assets/images/projeto6/Foto1.jpg";
import Foto2P6 from "../../../../assets/images/projeto6/Foto2.jpg";
import Foto3P6 from "../../../../assets/images/projeto6/Foto3.jpg";
import Foto4P6 from "../../../../assets/images/projeto6/Foto4.jpg";
import Foto5P6 from "../../../../assets/images/projeto6/Foto5.jpg";
import Foto1P7 from "../../../../assets/images/projeto7/Foto1.jpg";
import Foto2P7 from "../../../../assets/images/projeto7/Foto2.jpg";
import Foto3P7 from "../../../../assets/images/projeto7/Foto3.jpg";
import Foto4P7 from "../../../../assets/images/projeto7/Foto4.jpg";
import Foto5P7 from "../../../../assets/images/projeto7/Foto5.jpg";
import Foto6P7 from "../../../../assets/images/projeto7/Foto6.jpg";
import Foto7P7 from "../../../../assets/images/projeto7/Foto7.jpg";
import Foto1P8 from "../../../../assets/images/projeto8/Foto1.jpg";
import Foto2P8 from "../../../../assets/images/projeto8/Foto2.jpg";
import Foto3P8 from "../../../../assets/images/projeto8/Foto3.jpg";
import Foto4P8 from "../../../../assets/images/projeto8/Foto4.jpg";
import Foto5P8 from "../../../../assets/images/projeto8/Foto5.jpg";
import Foto1P9 from "../../../../assets/images/projeto9/Foto1.jpg";
import Foto2P9 from "../../../../assets/images/projeto9/Foto2.jpg";
import Foto3P9 from "../../../../assets/images/projeto9/Foto3.jpg";
import Foto4P9 from "../../../../assets/images/projeto9/Foto4.jpg";
import Foto1P10 from "../../../../assets/images/projeto10/Foto1.jpg";
import Foto2P10 from "../../../../assets/images/projeto10/Foto2.jpg";
import Foto3P10 from "../../../../assets/images/projeto10/Foto3.jpg";
import Foto4P10 from "../../../../assets/images/projeto10/Foto4.jpg";
import Foto5P10 from "../../../../assets/images/projeto10/Foto5.jpg";
import Foto6P10 from "../../../../assets/images/projeto10/Foto6.jpg";
import Foto7P10 from "../../../../assets/images/projeto10/Foto7.jpg";
import Foto1P11 from "../../../../assets/images/projeto11/Foto1.jpg";
import Foto2P11 from "../../../../assets/images/projeto11/Foto2.jpg";
import Foto3P11 from "../../../../assets/images/projeto11/Foto3.jpg";
import Foto4P11 from "../../../../assets/images/projeto11/Foto4.jpg";
import Foto5P11 from "../../../../assets/images/projeto11/Foto5.jpg";
import Foto6P11 from "../../../../assets/images/projeto11/Foto6.jpg";
import Foto7P11 from "../../../../assets/images/projeto11/Foto7.jpg";
import Foto8P11 from "../../../../assets/images/projeto11/Foto8.jpg";
import Foto9P11 from "../../../../assets/images/projeto11/Foto9.jpg";
import Foto10P11 from "../../../../assets/images/projeto11/Foto10.jpg";
import Foto1P12 from "../../../../assets/images/projeto12/Foto1.jpg";
import Foto2P12 from "../../../../assets/images/projeto12/Foto2.jpg";
import Foto3P12 from "../../../../assets/images/projeto12/Foto3.jpg";
import Foto4P12 from "../../../../assets/images/projeto12/Foto4.jpg";
import Foto5P12 from "../../../../assets/images/projeto12/Foto5.jpg";
import Foto6P12 from "../../../../assets/images/projeto12/Foto6.jpg";
import Foto7P12 from "../../../../assets/images/projeto12/Foto7.jpg";
import Foto8P12 from "../../../../assets/images/projeto12/Foto8.jpg";
import Foto9P12 from "../../../../assets/images/projeto12/Foto9.jpg";
import Foto10P12 from "../../../../assets/images/projeto12/Foto10.jpg";

const projectImages: { [key: string]: string[]} = {
  "1": [Foto1P1, Foto2P1, Foto3P1],
  "2": [Foto1P2],
  "3": [Foto1P3, Foto2P3, Foto3P3, Foto4P3],
  "4": [Foto1P4, Foto2P4, Foto3P4],
  "5": [Foto1P5],
  "6": [Foto1P6, Foto2P6, Foto3P6, Foto4P6, Foto5P6],
  "7": [Foto1P7, Foto2P7, Foto3P7, Foto4P7, Foto5P7, Foto6P7, Foto7P7],
  "8": [Foto1P8, Foto2P8, Foto3P8, Foto4P8, Foto5P8],
  "9": [Foto1P9, Foto2P9, Foto3P9, Foto4P9],
  "10": [Foto1P10, Foto2P10, Foto3P10, Foto4P10, Foto5P10, Foto6P10, Foto7P10],
  "11": [Foto1P11, Foto2P11, Foto3P11, Foto4P11, Foto5P11, Foto6P11, Foto7P11, Foto8P11, Foto9P11, Foto10P11],
  "12": [Foto1P12, Foto2P12, Foto3P12, Foto4P12, Foto5P12, Foto6P12, Foto7P12, Foto8P12, Foto9P12, Foto10P12],
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
            {projectId === "2" || projectId === "5" ? (
                <img
                  src={images[0]}
                  alt={`Project ${projectId} - Image 1`}
                  style={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain" }}
                />
              ) : (
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
              )}
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
