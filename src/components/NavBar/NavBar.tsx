import {
  AppBar,
  IconButton,
  MenuItem,
  styled,
  Toolbar,
  Drawer,
  List,
  ListItem,
  Box,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import theme from "../../theme";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-between",
    },
  }));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('header')?.offsetHeight || 0;
    if (section) {
      const position = section.offsetTop - navbarHeight;
    window.scrollTo({ top: position, behavior: "smooth" });
    }
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "space-evenly",
            }}
          >
            <MenuItem onClick={() => handleScroll("about-section")}>
              Sobre Mim
            </MenuItem>
            <MenuItem onClick={() => handleScroll("skills-section")}>
              Habilidades
            </MenuItem>
            <MenuItem onClick={() => handleScroll("projects-section")}>
              Meu Trabalho
            </MenuItem>
          </Box>
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          ".MuiDrawer-paper": {
            width: "10rem",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
           
          },
        }}
      >
        <List sx={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }}>
          <ListItem component="a" onClick={() => handleScroll("about-section")}>
            <ListItemText primary="Sobre Mim" />
          </ListItem>
          <Divider
            sx={{ backgroundColor: theme.palette.primary.contrastText }}
          />
          <ListItem
            component="a"
            onClick={() => handleScroll("skills-section")}
          >
            <ListItemText primary="Habilidades" />
          </ListItem>
          <Divider
            sx={{ backgroundColor: theme.palette.primary.contrastText}}
          />
          <ListItem
            component="a"
            onClick={() => handleScroll("projects-section")}
          >
            <ListItemText primary="Projetos" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
