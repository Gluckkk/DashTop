import { Typography, Box, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box mb="20px">
      <Typography
        variant="h2"
        color={theme.palette.neutral.light}
        fontweight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.firstAccentColor.main}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
