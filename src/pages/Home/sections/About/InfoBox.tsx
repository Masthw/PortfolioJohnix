import { Box, Typography, SvgIconProps } from "@mui/material";
import { forwardRef } from "react";
import theme from "../../../../theme";
import { keyframes } from "@emotion/react";


interface InfoBoxProps {
  icon: React.ElementType<SvgIconProps>;
  title: string;
  description: string;
  animationClass?: string;
}

const growAndShrink = keyframes`
  0% {
    transform: scale(0.0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const InfoBox = forwardRef<HTMLDivElement, InfoBoxProps>(
  ({ icon: IconComponent, title, description, animationClass = "" }, ref) => {
    return (
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
          animation: animationClass ? `${growAndShrink} 1.2s ease-out forwards` : 'none',
          transition: "background-color 0.3s ease-out",
          transform: "scale(0.0)",
          opacity: 0,
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          },
        }}
      >
        <IconComponent style={{ fontSize: "40px", marginBottom: "8px" }} />
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
      </Box>
    );
  }
);

export default InfoBox;

