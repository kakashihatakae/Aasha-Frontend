import { AccountBox, School } from "@material-ui/icons";
import {
  AppBar,
  Button,
  createTheme,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContactOption from "../../components/ContactOption";
import MenuBar from "./Menu";
import { ReactComponent as AshaLogo } from "../../imgs/ashaText.svg";

const NavBar: React.FC = () => (
  <>
    <AppBar
      sx={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "inline-flex",
          justifyContent: "space-between",
          width: "80%",
          height: 5,
          // backgroundColor: "tan",
          maxWidth: 1540,
        }}
      >
        {/* <Typography variant="h4" color="error" fontWeight="bold">
          Aasha
        </Typography> */}
        <div>
          <AshaLogo style={{ height: 60, width: 100 }} />
        </div>

        <MenuBar />
      </Toolbar>
    </AppBar>
    <Toolbar />
  </>
);

export default NavBar;
