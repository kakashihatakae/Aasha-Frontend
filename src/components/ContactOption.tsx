import { Email } from "@material-ui/icons";
import { ButtonBase, Typography } from "@mui/material";
import React from "react";

const ContactOption = (): React.ReactElement => (
  <ButtonBase
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      color: "#079092",
      paddingRight: 8,
      paddingLeft: 8,
    }}
  >
    <Email />
    <Typography>Contact</Typography>
  </ButtonBase>
);

export default ContactOption;
