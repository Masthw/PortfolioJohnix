import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ }) => ({
   display: 'flex',
   justifyContent: 'space-evenly'
  }));

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <StyledToolbar>  
          <MenuItem onClick={() => handleScroll("about-section")}>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
