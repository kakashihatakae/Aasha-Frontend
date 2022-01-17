import { People } from "@material-ui/icons";
import { ButtonBase, Typography } from "@mui/material";
import React from "react";

const MentorProfileOption = () => (
  <ButtonBase
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      color: "#079092",
      paddingRight: 8,
      paddingLeft: 8,
    }}
  >
    <People />
    <Typography>Mentor Profiles</Typography>
  </ButtonBase>
);

export default MentorProfileOption;
