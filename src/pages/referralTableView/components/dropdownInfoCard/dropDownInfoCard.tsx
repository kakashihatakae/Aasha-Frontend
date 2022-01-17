import { Box, Link, Paper, Typography } from "@mui/material";
import React from "react";

const DropDownInfoCard = () => (
  <Paper
    sx={{
      maxWidth: "60%",
      maxHeight: 300,
      overflow: "auto",
    }}
    elevation={3}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ marginLeft: 3 }}>
        <Typography
          sx={{
            marginTop: 2,
            fontSize: 20,
            fontWeight: "normal",
          }}
        >
          {"Links"}
        </Typography>
        <Link
          sx={{
            marginTop: 1,
            fontSize: 12,
            fontWeight: "normal",
          }}
          underline="hover"
          href="https://www.linkedin.com/in/shreyas-bhujbal/"
        >
          {"LinkedIn"}
        </Link>
        <Link
          sx={{
            marginTop: 1,
            marginLeft: "10%",
            fontSize: 12,
            fontWeight: "normal",
          }}
          underline="hover"
          href="https://www.linkedin.com/in/shreyas-bhujbal/"
        >
          {"Leetcode"}
        </Link>
      </Box>

      <Box
        sx={{
          marginRight: 3,
          justifyContent: "start",
          width: "40%",
        }}
      >
        <Typography
          sx={{
            marginTop: 2,
            marginLeft: "5%",
            fontSize: 20,
            fontWeight: "normal",
          }}
        >
          {"JobId"}
        </Typography>
        <Link
          sx={{
            marginTop: 1,
            marginLeft: "5%",
            fontSize: 12,
            fontWeight: "normal",
          }}
          underline="hover"
          href="https://www.linkedin.com/in/shreyas-bhujbal/"
        >
          {"JD"}
        </Link>
      </Box>
    </Box>
    <Typography variant="h5" sx={{ marginLeft: 3, marginTop: 2 }}>
      skills
    </Typography>

    <Typography
      variant="subtitle2"
      sx={{ marginLeft: 3, marginRight: 3, marginBottom: 2 }}
    >
      is a ruined building on the Norfolk coast of England. Despite its name, it
      is in the parish of Cley next the Sea, not the adjoining village of
      Blakeney, and was probably not a chapel. The building stood on a mound or
      "eye" (pictured) on the seaward end of the coastal marshes, less than 200
      m (220 yd) from the sea and just north of the current channel of the River
      Glaven where it turns to run parallel to the shoreline. It consisted of
      two rectangular rooms of unequal size, and appears to be intact in a 1586
      map. Only the foundations and part of a wall still remain. A small hearth,
      probably used for smelting iron, is the only evidence of a specific
      activity. Much of the structural material was reused in nearby buildings
      long ago. The ruins are protected as a scheduled monument and Grade II
      listed building due to their historical importance, but are not actively
      managed. A realignment of the Glaven's course through the marshes
      accelerated the ruins' likely loss
    </Typography>

    <Typography variant="h5" sx={{ marginLeft: 3 }}>
      projects
    </Typography>

    <Typography
      variant="subtitle2"
      sx={{ marginLeft: 3, marginRight: 3, marginBottom: 3 }}
    >
      is a ruined building on the Norfolk coast of England. Despite its name, it
      is in the parish of Cley next the Sea, not the adjoining village of
      Blakeney, and was probably not a chapel. The building stood on a mound or
      "eye" (pictured) on the seaward end of the coastal marshes, less than 200
      m (220 yd) from the sea and just north of the current channel of the River
      Glaven where it turns to run parallel to the shoreline. It consisted of
      two rectangular rooms of unequal size, and appears to be intact in a 1586
      map. Only the foundations and part of a wall still remain. A small hearth,
      probably used for smelting iron, is the only evidence of a specific
      activity. Much of the structural material was reused in nearby buildings
      long ago. The ruins are protected as a scheduled monument and Grade II
      listed building due to their historical importance, but are not actively
      managed. A realignment of the Glaven's course through the marshes
      accelerated the ruins' likely loss
    </Typography>
  </Paper>
);

export default DropDownInfoCard;
