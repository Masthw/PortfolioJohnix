import { useState } from "react";
import { IconButton, Typography, Box, Link, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import StyledButton from "../../../../components/StyledButton/StyledButton"; 
import "./styles/animations.css"; 

const ContactMe = () => {
  const [showIcons, setShowIcons] = useState(false);
  const theme = useTheme(); 

  const handleClick = () => {
    setShowIcons(true);  
  };

  return (
    <>
      {!showIcons ? (
        <StyledButton onClick={handleClick}>
          <EmailIcon />
          <Typography sx={{ marginLeft: 1 }}>Contact me</Typography>
        </StyledButton>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Link
            href="mailto:maverick17xd@gmail.com"
            color="inherit"
            className="bounce-icon"
            sx={{
              animationDelay: "0s",
             color: theme.palette.primary.contrastText,
              borderRadius: "50%",
              '&:hover' : {
            backgroundColor: theme.palette.secondary.light
        },
            }}
          >
            <IconButton color="inherit">
              <EmailIcon />
            </IconButton>
          </Link>

          <Link
            href="https://www.linkedin.com/in/johnattan-de-oliveira-e-silva-a6b22628b/"
            target="_blank"
            color="inherit"
            className="bounce-icon"
            sx={{
              animationDelay: "0.2s",
              color: theme.palette.primary.contrastText,
              borderRadius: "50%",
              '&:hover' : {
            backgroundColor: theme.palette.secondary.light
        },
            }}
          >
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Link>

          <Link
            href="https://www.instagram.com/jdoes.galeria?igsh=ZGUyZXUzbzUzcWpo"
            target="_blank"
            color="inherit"
            className="bounce-icon"
            sx={{
              animationDelay: "0.4s",
              color: theme.palette.primary.contrastText,
              borderRadius: "50%",
              '&:hover' : {
            backgroundColor: theme.palette.secondary.light
        },
            }}
          >
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </Link>
        </Box>
      )}
    </>
  );
};

export default ContactMe;
