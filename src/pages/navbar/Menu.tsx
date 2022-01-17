import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ContactOption from "../../components/ContactOption";
import MentorProfileOption from "../../components/MentorProfileOption";

const noUnderline = {
  textDecoration: "none",
};

const MenuBar = (): React.ReactElement => (
  <Box sx={{ flexDirection: "row", display: "flex" }}>
    <Link to="/" style={noUnderline}>
      <MentorProfileOption />
    </Link>

    <Link to="/contact" style={noUnderline}>
      <ContactOption />
    </Link>
    {/* //   <Button
  //     color="error"
  //     sx={{ borderRadius: 2 }}
  //     startIcon={<AccountBox />}
  //   >
  //     Student profiles
  //   </Button>
  //   <Button color="error" sx={{ borderRadius: 2 }} startIcon={<School />}>
  //     University Profiles
  //   </Button> */}
  </Box>
);
export default MenuBar;
