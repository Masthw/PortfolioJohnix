import { Container, Typography, Box, Grid, styled } from "@mui/material";
import SkillCard from "./SkillCard";

const Skills = () => {
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

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="primary" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <SkillCard title="JavaScript" />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard title="React" />
            </Grid>
            <Grid item xs={12} md={4}>
              <SkillCard title="Flutter" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
