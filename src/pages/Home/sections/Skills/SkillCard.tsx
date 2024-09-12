import { Box, Typography } from "@mui/material";
import theme from "../../../../theme";

interface SkillCardProps {
  title: string;
  description?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title }) => (
  <Box
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
        }}>
    <Typography variant="body1" gutterBottom>
      {title}
    </Typography>
  </Box>
);

export default SkillCard;
