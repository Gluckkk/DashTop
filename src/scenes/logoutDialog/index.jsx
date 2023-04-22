import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogContent, useTheme } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { mockDataUser } from "../../data/mockData";
import user from "../../assets/user.png";

const LogoutDialog = ({ open, setLogoutIsOpen, setChanged }) => {
  const theme = useTheme();

  const closeLogoutHandler = () => {
    setLogoutIsOpen((prevValue) => !prevValue);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Dialog
      open={open}
      onClose={closeLogoutHandler}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: theme.palette.background.default,
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          backgroundColor: `${theme.palette.secondAccentColor.default}`,
        }}
      >
        <Typography sx={{ mr: 5 }} variant="h2">
          Log Out
        </Typography>
        <IconButton
          aria-label="close"
          onClick={closeLogoutHandler}
          sx={{
            position: "absolute",
            right: 6,
            top: 19,
            color: "inherit",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        display="flex"
        sx={{
          textAlign: "center",
          mt: 4,
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="100px"
            height="100px"
            src={user}
            style={{ borderRadius: "50%", marginBottom: "10px" }}
          />
        </Box>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {mockDataUser.name}
        </Typography>

        <Box
          p="10px 5px"
          borderRadius="4px"
          backgroundColor={theme.palette.firstAccentColor.main}
          sx={{
            p: 2,
            mt: 2,
            "&:hover": {
              cursor: "pointer",
              backgroundColor: `${theme.palette.firstAccentColor.dark}`,
            },
          }}
          onClick={() => {
            mockDataUser.login = !mockDataUser.login;
            closeLogoutHandler();
            setChanged((prev) => !prev);
          }}
        >
          <Typography variant="h4">Toggle log out</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutDialog;
