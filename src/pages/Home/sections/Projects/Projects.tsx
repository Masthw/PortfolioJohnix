import { Container, Typography, Box, Grid, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Avatar from "../../../../assets/images/avatar.jpg";
import "./styles/stylesProjects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState({
    project1: false,
    project2: false,
    project3: false,
  });
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
            Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <div ref={project1Ref}>
              <img
                src={Avatar}
                alt="Project 1"
                className={isVisible.project1 ? "popIn project-delay-1" : ""}
                style={{ width: "100%", borderRadius: "8px" }}
              />
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
            <div ref={project2Ref}>
              <img
                src={Avatar}
                alt="Project 2"
                className={isVisible.project1 ? "popIn project-delay-2" : ""}
                style={{ width: "100%", borderRadius: "8px" }}
              />
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
