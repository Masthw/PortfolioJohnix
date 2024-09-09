import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import TypingText from "./TypingText";
import { useEffect, useState } from "react";
import "./styles/animations.css";


const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
      // <=mobile
      paddingTop: "100px",
    },
    [theme.breakpoints.up("md")]: {
      // >mobile
      paddingTop: 0,
    },
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "1%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    willChange: "opacity, transform"
  }));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                {!loading && ( 
        
                    <StyledImg src={Avatar} className="slide-left" />
                  
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {!loading && (
            <div className="slide-right"> 
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="center"
                  pb={2}
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "5rem",
                    },
                  }}
                >
                  Johnattan de Oliveira e Silva
                </Typography>

                <Box width="100%" textAlign="center">
                  <TypingText delay={1000} />
                </Box>
                <Grid
                  container
                  display="flex"
                  justifyContent="center"
                  spacing={3}
                  pt={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                  >
                    <StyledButton onClick={() => console.log("Download")}>
                      <DownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                  >
                    <StyledButton onClick={() => console.log("contact")}>
                      <EmailIcon />
                      <Typography> Contact me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
