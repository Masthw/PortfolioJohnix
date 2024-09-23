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

    observeElement(javascriptRef, "javascript");
    observeElement(reactRef, "react");
    observeElement(flutterRef, "flutter");
  }, []);

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={4} marginBottom={3}>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="JavaScript"
                delay={0.2}
                ref={javascriptRef}
                animationClass={isVisible.javascript ? "grow-animation" : ""}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="React"
                delay={0.4}
                ref={reactRef}
                animationClass={isVisible.javascript ? "grow-animation" : ""}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard
                title="Flutter"
                delay={0.6}
                ref={flutterRef}
                animationClass={isVisible.javascript ? "grow-animation" : ""}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
