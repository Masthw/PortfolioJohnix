import { Container, Typography, Box, styled } from "@mui/material";

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "50vh",
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


  return (
    <> 
    <StyledAbout>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h2" color="primary" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" color="textPrimary" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum. Donec et venenatis dolor. Integer
          imperdiet, purus vel ultricies auctor, augue lacus elementum elit, et
          cursus lacus leo at purus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum. Donec et venenatis dolor. Integer
          imperdiet, purus vel ultricies auctor, augue lacus elementum elit, et
          cursus lacus leo at purus.
        </Typography>
      </Box>
    </Container>
    </StyledAbout>
    </>
  );
};

export default About;
