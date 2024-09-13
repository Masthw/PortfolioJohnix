import { Box, Typography, keyframes } from "@mui/material";
import { forwardRef } from "react";
import theme from "../../../../theme";

interface SkillCardProps {
  title: string;
  delay?: number;
  animationClass?: string;
}


const growAndShrink = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`;


const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>(
  ({ title, delay = 0, animationClass = "" }, ref) => (
    <Box
      ref={ref} 
      className={animationClass} 
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={2}
      borderRadius="8px"
      boxShadow="0 4px 8px rgba(0,0,0,0.1)"
      sx={{
        backgroundColor: "background.paper",
        animation: `${growAndShrink} 0.8s ease ${delay}s forwards`,
        transform: "scale(0.5)",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
        },
      }}
    >
      <Typography variant="body1" gutterBottom>
        {title}
      </Typography>
    </Box>
  )
);

export default SkillCard;
