import { Box, Typography, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        textAlign: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap", 
           
        }}
      >
        <Typography variant="body1" sx={{ marginRight: "8px" }}>
          Developed by Masth
        </Typography>

        <Link href="https://github.com/Masthw" target="_blank" color="inherit">
          <IconButton color="inherit">
            <GitHubIcon />
          </IconButton>
        </Link>

        <Link href="https://www.linkedin.com/in/matheus-dos-santos-soares-512bb8214/" target="_blank" color="inherit">
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Link>

        <Link href="mailto:matheussoaressdev@gmail.com" color="inherit">
          <IconButton color="inherit">
            <EmailIcon />
          </IconButton>
        </Link>
      </Box>

      <Typography variant="body2" sx={{ marginTop: "8px" }}>
      &copy; 2024 Todos os direitos reservados 
      </Typography>
    </Box>
  );
};

export default Footer;
