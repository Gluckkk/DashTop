import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box, DialogContent, useTheme } from "@mui/material";
import { DialogTitle } from "@mui/material";

const NotificationDialog = ({
  open,
  setNotificationIsOpen,
  name,
  email,
  date,
  text,
}) => {
  const theme = useTheme();

  const closeNotificationHandler = () => {
    setNotificationIsOpen((prevValue) => !prevValue);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Dialog
      open={open}
      onClose={closeNotificationHandler}
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
          {`Notification from ${name}`}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={closeNotificationHandler}
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
        <Typography
          color={theme.palette.firstAccentColor.main}
          variant="h2"
          sx={{ mb: 2 }}
        >
          {email}
        </Typography>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {date}
        </Typography>
        <Box
          p="10px 5px"
          borderRadius="4px"
          backgroundColor={theme.palette.firstAccentColor.main}
          sx={{ mt: 2 }}
        >
          <Typography variant="h4">{text}</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationDialog;
