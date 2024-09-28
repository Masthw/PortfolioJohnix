import { Container, Typography, Box, Grid, styled } from "@mui/material";
import SkillCard from "./SkillCard";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState({
    daVinciResolve: false,
    adobeLigthroom: false,
    adobePhotoshop: false,
  });

  const daVinciResolveRef = useRef<HTMLDivElement | null>(null);
  const adobeLigthroomRef = useRef<HTMLDivElement | null>(null);
  const adobePhotoshopRef = useRef<HTMLDivElement | null>(null);

  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 2),
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
        threshold: 0.1,
      });

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    observeElement(daVinciResolveRef, "daVinciResolve");
    observeElement(adobeLigthroomRef, "adobeLigthroom");
    observeElement(adobePhotoshopRef, "adobePhotoshop");
  }, []);

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Habilidades
          </Typography>
          <Grid container spacing={4} marginBottom={3}>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="DaVinci Resolve"
                delay={0.2}
                ref={daVinciResolveRef}
                animationClass={isVisible.daVinciResolve ? "grow-animation" : ""}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="Adobe Lightoom"
                delay={0.4}
                ref={adobeLigthroomRef}
                animationClass={isVisible.daVinciResolve ? "grow-animation" : ""}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="Adobe Photoshop"
                delay={0.6}
                ref={adobePhotoshopRef}
                animationClass={isVisible.daVinciResolve ? "grow-animation" : ""}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
