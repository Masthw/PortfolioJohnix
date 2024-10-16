import { Container, Typography, Box, styled, Grid, Divider } from "@mui/material";
import InfoBox from "./InfoBox";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState({
    education: false,
    experience: false,
  });
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4, 1),
    [theme.breakpoints.up("md")]: {
      // >mobile
      padding: theme.spacing(2, 2)
    },
  }));

 useEffect(() => {
    const observeElement = (
      ref: React.RefObject<HTMLDivElement>,
      key: keyof typeof isVisible
    ) => {
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        threshold: 0.5,
      });

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    observeElement(educationRef, "education");
    observeElement(experienceRef, "experience");
  }, []);

  return (
    <>
      <StyledAbout>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2" color="primary" gutterBottom>
             Sobre Mim
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              <Grid item xs={12} md={6}>
                <InfoBox
                ref={educationRef}
                  icon={SchoolIcon}
                  title="Educação"
                  description={"Produção Audiovisual - FSG"}
                  animationClass={isVisible.education ? "slide-left" : ""}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoBox
                ref={experienceRef}
                  icon={WorkspacePremiumIcon}
                  title="Experiência"
                  description="Criação e edição de vídeos"
                  animationClass={isVisible.experience ? "slide-right" : ""}
                />
              </Grid>
            </Grid>
            <Typography variant="body1" color="textPrimary" sx={{ mt: 10 }}>
            Sou estudante de Produção Audiovisual, apaixonado por contar histórias através de imagens e vídeos. Atualmente, dedico-me a capturar momentos únicos com a fotografia e a dar vida a projetos criativos na edição de vídeos. Com um olhar apurado e em constante evolução, busco sempre aprimorar minhas habilidades e transformar visões em realidade através da arte visual.
            </Typography>
            <Divider sx={{ marginTop: 5, height: 1.5, backgroundColor: 'primary.main' }} />
          </Box>
        </Container>
      </StyledAbout>
    </>
  );
};

export default About;
