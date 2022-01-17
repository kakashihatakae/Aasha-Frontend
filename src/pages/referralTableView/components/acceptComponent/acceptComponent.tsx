import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import React from "react";

const AcceptComponent = () => (
  <Box
    style={{
      flexDirection: "column",
      width: "30%",
    }}
  >
    <TextField sx={{ width: "100%" }} multiline rows={7} />
    <ButtonGroup
      sx={{
        marginTop: 4,
        marginLeft: "0%",
      }}
    >
      <Button color="info" variant="contained">
        Accept
      </Button>
    </ButtonGroup>
  </Box>
);

export default AcceptComponent;
