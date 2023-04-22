import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { Link } from "react-router-dom";
import DashboardTransactionDialog from "../dashboardTransactionDialog";
import { useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const [transactionIsOpen, setTransactionIsOpen] = useState(false);
  const [transactionTxId, setTransactionTxId] = useState("");
  const [transactionUser, setTransactionUser] = useState("");
  const [transactionCost, setTransactionCost] = useState("");
  const [transactionDate, setTransactionDate] = useState("");

  return (
    <Box m="20px">
      {transactionIsOpen && (
        <DashboardTransactionDialog
          open={transactionIsOpen}
          setTransactionIsOpen={setTransactionIsOpen}
          txId={transactionTxId}
          user={transactionUser}
          cost={transactionCost}
          date={transactionDate}
        />
      )}
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondAccentColor.default,
              color: theme.palette.neutral.light,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="130px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary.light}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: theme.palette.firstAccentColor.dark,
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary.light}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: theme.palette.firstAccentColor.dark,
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary.light}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{
                  color: theme.palette.firstAccentColor.dark,
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={theme.palette.primary.light}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{
                  color: theme.palette.firstAccentColor.dark,
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.primary.light}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={theme.palette.neutral.light}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={theme.palette.firstAccentColor.main}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: theme.palette.firstAccentColor.main,
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.primary.light}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${theme.palette.primary.main}`}
            colors={theme.palette.neutral.light}
            p="15px"
          >
            <Typography
              color={theme.palette.neutral.light}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${theme.palette.primary.main}`}
              p="15px"
              sx={{
                "&:hover": {
                  backgroundColor: theme.palette.primary.lighter,
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                setTransactionIsOpen(true);
                setTransactionTxId(transaction.txId);
                setTransactionUser(transaction.user);
                setTransactionCost(transaction.cost);
                setTransactionDate(transaction.date);
              }}
            >
              <Box>
                <Typography
                  color={theme.palette.firstAccentColor.main}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={theme.palette.neutral.light}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={theme.palette.neutral.light}>{transaction.date}</Box>
              <Box
                backgroundColor={theme.palette.firstAccentColor.main}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.primary.light}
          p="30px"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.primary.lighter,
            },
          }}
        >
          <Link to="/pie" style={{ outline: "none", textDecoration: "none" }}>
            <Typography
              variant="h5"
              fontWeight="600"
              color={theme.palette.neutral.light}
            >
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={theme.palette.firstAccentColor.main}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography color={theme.palette.neutral.light}>
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Link>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.primary.light}
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.primary.lighter,
            },
          }}
        >
          <Link to="/bar" style={{ outline: "none", textDecoration: "none" }}>
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
              color={theme.palette.neutral.light}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Link>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={theme.palette.primary.light}
          padding="30px"
          sx={{
            "&:hover": {
              backgroundColor: theme.palette.primary.lighter,
            },
          }}
        >
          <Link
            to="/geography"
            style={{ outline: "none", textDecoration: "none" }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ marginBottom: "15px" }}
              color={theme.palette.neutral.light}
            >
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
