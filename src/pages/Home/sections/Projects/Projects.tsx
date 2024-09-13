import { Container, Typography, Box, Grid, styled } from "@mui/material";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8, 2),
    minHeight: "100vh",
  }));

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <img
                src="/path-to-your-image-1.jpg"
                alt="Project 1"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12}  md={4}>
              <img
                src="/path-to-your-image-2.jpg"
                alt="Project 2"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="/path-to-your-image-3.jpg"
                alt="Project 3"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
