import { Container, Typography, Box, Grid, styled } from "@mui/material";
import SkillCard from "./SkillCard";
import { useEffect, useRef, useState } from "react";


const Skills = () => {
  const [isVisible, setIsVisible] = useState({
    javascript: false,
    react: false,
    flutter: false,
  });

  const javascriptRef = useRef<HTMLDivElement | null>(null);
  const reactRef = useRef<HTMLDivElement | null>(null);
  const flutterRef = useRef<HTMLDivElement | null>(null);

  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(1, 2),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1, 2),
    },
  }));

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target === javascriptRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, javascript: true }));
        }
        if (entry.target === reactRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, react: true }));
        }
        if (entry.target === flutterRef.current && entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, flutter: true }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.5, // Só dispara a animação quando 50% da skill estiver visível
    });

    if (javascriptRef.current) observer.observe(javascriptRef.current);
    if (reactRef.current) observer.observe(reactRef.current);
    if (flutterRef.current) observer.observe(flutterRef.current);

    return () => {
      if (javascriptRef.current) observer.unobserve(javascriptRef.current);
      if (reactRef.current) observer.unobserve(reactRef.current);
      if (flutterRef.current) observer.unobserve(flutterRef.current);
    };
  }, []);

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="JavaScript"
                delay={0.1}
                ref={javascriptRef}
                animationClass={isVisible.javascript ? "grow-animation" : ""}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="React"
                delay={0.3}
                ref={reactRef}
                animationClass={isVisible.react ? "grow-animation" : ""}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="Flutter"
                delay={0.5}
                ref={flutterRef}
                animationClass={isVisible.flutter ? "grow-animation" : ""}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
