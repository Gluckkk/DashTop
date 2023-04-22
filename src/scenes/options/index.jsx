import Dialog from "@mui/material/Dialog";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokensAccent } from "../../theme";
import { useEffect, useState } from "react";
import { colorsRender } from "../../theme";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";

const Options = ({ open, setOptionsIsOpen }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [isAccentChanged, setIsAccentChanged] = useState(false);
  const closeOptionsHandler = () => {
    setOptionsIsOpen((prevValue) => !prevValue);
  };
  //changing active accent color
  const activeColorHandle = (keyActive, statusType) => {
    Object.keys(tokensAccent).forEach((key) => {
      if (key === keyActive) {
        tokensAccent[keyActive][`${statusType}Status`] = "active";
      } else {
        tokensAccent[key][`${statusType}Status`] = "";
      }
      setIsAccentChanged((prevValue) => !prevValue);
    });
  };

  //creating a function for dynamic array of possible accent colors
  const colorsArray = (statusType) => {
    let array = [];

    Object.keys(tokensAccent).forEach((key) => {
      array.push({
        key: key,
        color: tokensAccent[key][500],
        status: tokensAccent[key][`${statusType}Status`],
      });
    });
    return array.map((colors) => (
      <Box
        key={colors.key}
        sx={{
          width: `${colors.status === "active" ? "30px" : "25px"}`,
          height: `${colors.status === "active" ? "30px" : "25px"}`,

          backgroundColor: `${colors.color}`,
          border: `solid ${theme.palette.neutral.dark}`,
          "&:hover": { height: 30, width: 30 },
        }}
        onClick={() => {
          activeColorHandle(colors.key, statusType);
        }}
      ></Box>
    ));
  };

  // rendering accent colors and making it changeable
  let firstAccentColors, secondAccentColors;
  const render = () => {
    firstAccentColors = colorsArray("first");
    secondAccentColors = colorsArray("second");
  };
  render();

  useEffect(() => {
    render();
    colorsRender();
    colorMode.resetTheme();
  }, [isAccentChanged]);

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={closeOptionsHandler}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: theme.palette.background.default,
          backgroundImage: "none",
        },
        "& .MuiToolbar-root": {
          backgroundColor: theme.palette.secondAccentColor.default,
        },
        "& .MuiAccordion-root": {
          backgroundColor: theme.palette.primary.main,
        },
      }}
    >
      <AppBar
        sx={{
          position: "relative",
        }}
      >
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h2" component="div">
            OPTIONS
          </Typography>
          <IconButton
            color="inherit"
            onClick={closeOptionsHandler}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={theme.palette.firstAccentColor.main}
              variant="h5"
            >
              First Accent Color
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box mb="25px">
              <Box position="fixed" display="flex" gap="15px">
                {firstAccentColors}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              color={theme.palette.firstAccentColor.main}
              variant="h5"
            >
              Second Accent Color
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box mb="25px">
              <Box position="fixed" display="flex" gap="15px">
                {secondAccentColors}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Dialog>
  );
};

export default Options;
