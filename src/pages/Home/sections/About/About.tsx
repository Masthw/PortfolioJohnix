import { Container, Typography, Box, styled, Grid } from "@mui/material";
import InfoBox from "./InfoBox";
import SchoolIcon from "@mui/icons-material/School";
import { useEffect, useRef, useState } from "react";
import "./styles/animationsAbout.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("md")]: {
      // >mobile
      paddingTop: 0,
      padding: theme.spacing(8, 4),
    },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <>
      <StyledAbout ref={aboutRef}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" color="primary" gutterBottom>
              About Me
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6}>
                <InfoBox
                  icon={SchoolIcon}
                  title="Education"
                  description={"1+ years Front-end Development"}
                  animationClass={isVisible ? "slide-left" : ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoBox
                  icon={SchoolIcon}
                  title="Education"
                  description="Bachelor's Degree in Electrical Engineering"
                  animationClass={isVisible ? "slide-right" : ""}
                />
              </Grid>
            </Grid>
            <Typography variant="body1" color="textPrimary" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum. Donec et venenatis dolor. Integer
              imperdiet, purus vel ultricies auctor, augue lacus elementum elit,
              et cursus lacus leo at purus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vivamus lacinia odio vitae
              vestibulum. Donec et venenatis dolor. Integer imperdiet, purus vel
              ultricies auctor, augue lacus elementum elit, et cursus lacus leo
              at purus.
            </Typography>
          </Box>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
