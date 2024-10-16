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
  const imagesProject2 = [Foto1P2];
  const imagesProject3 = [Foto1P3, Foto2P3, Foto3P3, Foto4P3];
  const imagesProject4 = [Foto1P4, Foto2P4, Foto3P4];
  const imagesProject5 = [Foto1P5];
  const imagesProject6 = [Foto1P6, Foto2P6, Foto3P6, Foto4P6, Foto5P6];
  const imagesProject7 = [Foto1P7, Foto2P7, Foto3P7, Foto4P7, Foto5P7, Foto6P7, Foto7P7];
  const imagesProject8 = [Foto1P8, Foto2P8, Foto3P8, Foto4P8, Foto5P8];
  const imagesProject9 = [Foto1P9, Foto2P9, Foto3P9, Foto4P9];
  const imagesProject10 = [Foto1P10, Foto2P10, Foto3P10, Foto4P10, Foto5P10, Foto6P10, Foto7P10];
  const imagesProject11 = [Foto1P11, Foto2P11, Foto3P11, Foto4P11, Foto5P11, Foto6P11, Foto7P11, Foto8P11, Foto9P11, Foto10P11];
  const imagesProject12 = [Foto1P12, Foto2P12, Foto3P12, Foto4P12, Foto5P12, Foto6P12, Foto7P12, Foto8P12, Foto9P12, Foto10P12];


  const project1Ref = useRef<HTMLDivElement | null>(null);
  const project2Ref = useRef<HTMLDivElement | null>(null);
  const project3Ref = useRef<HTMLDivElement | null>(null);

  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 2),
    minHeight: "100vh",
    paddingBottom: "2rem",
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
        <ul style={{ margin: "0px", marginRight: "10px" }}> {dots} </ul>
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
          <Grid container spacing={4} alignItems="stretch">
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
                    marginBottom: "10rem",
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
                      <div key={index} onClick={() => handleProjectClick(1)}>
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
                    marginBottom: "10rem",
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                  }}
                >
                  <img
                    src={imagesProject2[0]}
                    onClick={() => handleProjectClick(2)}
                    alt="Project 2 - Image"
                    className={`${
                      isVisible.project1 ? "popIn project-delay-2" : ""
                    } image-standalone`}
                   
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                ref={project3Ref}
                className={
                  isVisible.project1 ? "popIn project-delay-3" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject3.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(3)}>
                        <img
                          src={image}
                          alt={`Project 3 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-3" : ""
                          } carousel-image`}
                        />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={4}>
              <div
                className={
                  isVisible.project1 ? "popIn project-delay-4" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject4.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(4)}>
                        <img
                          src={image}
                          alt={`Project 4 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-4" : ""
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
                className={
                  isVisible.project1 ? "popIn project-delay-5" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
                  }}
                >
                  <img
                    src={imagesProject5[0]}
                    onClick={() => handleProjectClick(5)}
                    alt="Project 5 - Image"
                    className={`${
                      isVisible.project1 ? "popIn project-delay-5" : ""
                    } image-standalone`}
                  />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div
                className={
                  isVisible.project1 ? "popIn project-delay-6" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject6.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(6)}>
                        <img
                          src={image}
                          alt={`Project 6 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-6" : ""
                          } carousel-image`}
                        />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12} md={4}>
              <div
                className={
                  isVisible.project1 ? "popIn project-delay-7" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject7.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(7)}>
                        <img
                          src={image}
                          alt={`Project 7 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-7" : ""
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
                className={
                  isVisible.project1 ? "popIn project-delay-8" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject8.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(8)}>
                        <img
                          src={image}
                          alt={`Project 8 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-8" : ""
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
                className={
                  isVisible.project1 ? "popIn project-delay-9" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject9.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(9)}>
                        <img
                          src={image}
                          alt={`Project 9 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-9" : ""
                          } carousel-image`}
                        />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={4}>
              <div
                className={
                  isVisible.project1 ? "popIn project-delay-10" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject10.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(10)}>
                        <img
                          src={image}
                          alt={`Project 10 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-10" : ""
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
                className={
                  isVisible.project1 ? "popIn project-delay-11" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject11.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(11)}>
                        <img
                          src={image}
                          alt={`Project 11 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-11" : ""
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
                className={
                  isVisible.project1 ? "popIn project-delay-12" : "image"
                }
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "350px" },
                    height: { xs: "auto", md: "350px" },
                    marginBottom: "10rem",
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
                    {imagesProject12.map((image, index) => (
                      <div key={index} onClick={() => handleProjectClick(12)}>
                        <img
                          src={image}
                          alt={`Project 12 - Image ${index + 1}`}
                          className={`${
                            isVisible.project1 ? "popIn project-delay-12" : ""
                          } carousel-image`}
                        />
                      </div>
                    ))}
                  </Slider>
                </Box>
              </div>
            </Grid>
            </Grid>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
