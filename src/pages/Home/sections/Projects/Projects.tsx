import { Container, Typography, Box, Grid, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";


const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 2),
    minHeight: "100vh",
  }));

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="primary.contrastText" gutterBottom marginBottom={5}>
            Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <img
                src={Avatar}
                alt="Project 1"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12}  md={4}>
              <img
                src={Avatar}
                alt="Project 2"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src={Avatar}
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
