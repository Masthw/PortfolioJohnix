import {
  Container,
  Typography,
  Box,
  Grid,
  styled,
  IconButton,
} from "@mui/material";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useRef,
  useState,
} from "react";
import Avatar from "../../../../assets/images/avatar.jpg";
import Foto1P1 from "../../../../assets/images/projeto1/Foto1.jpg";
import Foto2P1 from "../../../../assets/images/projeto1/Foto2.png";
import Foto3P1 from "../../../../assets/images/projeto1/Foto3.png";
import Foto1P2 from "../../../../assets/images/projeto2/Foto1.jpeg";
import Foto2P2 from "../../../../assets/images/projeto2/Foto2.jpeg";
import Slider from "react-slick";
import CollectionsIcon from "@mui/icons-material/Collections";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./styles/stylesProjects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState({
    project1: false,
    project2: false,
    project3: false,
  });

 
  const imagesProject1 = [Foto1P1, Foto2P1, Foto3P1];
  const imagesProject2 = [Foto1P2, Foto2P2];

  const project1Ref = useRef<HTMLDivElement | null>(null);
  const project2Ref = useRef<HTMLDivElement | null>(null);
  const project3Ref = useRef<HTMLDivElement | null>(null);

  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 2),
    minHeight: "100vh",
  }));

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === project1Ref.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, project1: true }));
        }
        if (entry.target === project2Ref.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, project2: true }));
        }
        if (entry.target === project3Ref.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, project3: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.5,
    });

    if (project1Ref.current) observer.observe(project1Ref.current);
    if (project2Ref.current) observer.observe(project2Ref.current);
    if (project3Ref.current) observer.observe(project3Ref.current);

    return () => {
      if (project1Ref.current) observer.unobserve(project1Ref.current);
      if (project2Ref.current) observer.unobserve(project2Ref.current);
      if (project3Ref.current) observer.unobserve(project3Ref.current);
    };
  }, []);

  const NextArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          bottom: "0px",
          right: "0px",
          zIndex: 10,
          color: "white",
          transform: "translateY(50%)",
        }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon sx={{ fontSize: "1.0rem" }} />
      </IconButton>
    );
  };

  const PrevArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <IconButton
        sx={{
          position: "absolute",
          bottom: "0px",
          left: "0px",
          zIndex: 10,
          color: "white",
          transform: "translateY(50%)",
        }}
        onClick={onClick}
      >
        <ArrowBackIosIcon sx={{ fontSize: "1.0rem" }} />
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
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined
    ) => (
      <div
        style={{
          position: "relative",
          marginTop: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const handleProjectClick = (projectId: number) => {
    window.location.href = `/project/${projectId}`; 
  };

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            color="primary.contrastText"
            gutterBottom
            marginBottom={5}
          >
            Meu Trabalho
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div
                ref={project1Ref}
                className={isVisible.project1 ? "popIn project-delay-1" : ""}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "0.5rem",
                  }}
                >
                  <CollectionsIcon
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "white",
                      fontSize: "1rem",
                      zIndex: 1,
                      opacity: isVisible.project1 ? 1 : 0,
                    }}
                  />
                  <Slider {...settings}>
                    {imagesProject1.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => handleProjectClick(1)}
                      >
                        <img
                          src={image}
                          alt={`Project 1 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-1" : ""
                          } carousel-image`}
                        />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                ref={project2Ref}
                className={
                  isVisible.project1 ? "popIn project-delay-2" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                  }}
                >
                  <CollectionsIcon
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      color: "white",
                      fontSize: "1rem",
                      zIndex: 1,
                      opacity: isVisible.project1 ? 1 : 0,
                    }}
                  />
                  <Slider {...settings}>
                    {imagesProject2.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => handleProjectClick(2)}
                      
                      >
                        <img
                          src={image}
                          alt={`Project 2 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-2" : ""
                          } carousel-image`}
                        />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div ref={project3Ref}>
                <img
                  src={Avatar}
                  alt="Project 3"
                  className={isVisible.project1 ? "popIn project-delay-3" : ""}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
