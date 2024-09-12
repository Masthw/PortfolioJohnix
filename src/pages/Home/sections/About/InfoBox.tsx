import { Box, Typography, SvgIconProps } from "@mui/material";
import theme from "../../../../theme";


interface InfoBoxProps {
  icon: React.ElementType<SvgIconProps>;
  title: string;
  description: string;
  animationClass?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  icon: IconComponent,
  title,
  description,
  animationClass = "",
}) => {
    return (
      <Box
        className={animationClass}
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        borderRadius="8px"
        boxShadow="0 4px 8px rgba(0,0,0,0.1)"
        sx={{
          backgroundColor: "background.paper",
          transition: "background-color 0.3s ease",
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
};

export default InfoBox;
