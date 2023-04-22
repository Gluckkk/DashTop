import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Box, useTheme } from "@mui/material";

import { mockDataNotifications } from "../../data/mockData";
import { useState } from "react";
import NotificationDialog from "../notificationDialog";

const Notifications = ({ open, setNotificationsIsOpen }) => {
  const theme = useTheme();
  const closeNotificationsHandler = () => {
    setNotificationsIsOpen((prevValue) => !prevValue);
  };
  const [notificationIsOpen, setNotificationIsOpen] = useState(false);
  const [notificationEmail, setNotificationEmail] = useState("");
  const [notificationName, setNotificationName] = useState("");
  const [notificationText, setNotificationText] = useState("");
  const [notificationDate, setNotificationDate] = useState("");

  ///////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={closeNotificationsHandler}
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
      {notificationIsOpen && (
        <NotificationDialog
          open={notificationIsOpen}
          setNotificationIsOpen={setNotificationIsOpen}
          name={notificationName}
          email={notificationEmail}
          date={notificationDate}
          text={notificationText}
        />
      )}
      <AppBar
        sx={{
          position: "relative",
        }}
      >
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h2">
            Notifications
          </Typography>
          <IconButton
            color="inherit"
            onClick={closeNotificationsHandler}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mockDataNotifications.map((notification, i) => (
        <Box
          key={notification.id}
          onClick={() => {
            notification.read = true;
            setNotificationIsOpen(true);
            setNotificationEmail(notification.email);
            setNotificationName(notification.name);
            setNotificationText(notification.text);
            setNotificationDate(notification.date);
          }}
          backgroundColor={
            notification.read
              ? theme.palette.background.default
              : theme.palette.primary.light
          }
          p="20px 25px"
          m="5px 30px"
          display="flex"
          justifyContent="space-between"
          sx={{
            "&:hover": {
              backgroundColor: `${theme.palette.primary.lighter}`,
              cursor: "pointer",
            },
          }}
        >
          <Typography color={theme.palette.firstAccentColor.main} variant="h5">
            {notification.name}
          </Typography>
          <Box display="flex" gap="40px" pr="40px">
            <Typography
              color={theme.palette.firstAccentColor.main}
              variant="h5"
            >
              {notification.email}
            </Typography>
            <Typography
              color={theme.palette.firstAccentColor.main}
              variant="h5"
            >
              {notification.date}
            </Typography>
          </Box>
        </Box>
      ))}
    </Dialog>
  );
};

export default Notifications;
