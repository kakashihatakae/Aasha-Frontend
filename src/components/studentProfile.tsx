import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import shreyas from "../../imgs/shreyas.jpeg";
import { mentorProfileProps } from "../pages/studentprofiles/studentProfileList";

const StudentProfile: React.FC<mentorProfileProps> = (props) => (
  <Card
    sx={{
      height: "auto",
      minWidth: 220,
      width: "95%",
    }}
  >
    <CardActionArea sx={{ height: "auto" }}>
      <CardMedia
        component="img"
        image={props.image}
        alt="hello"
        height={210}
        width={250}
        sx={{ objectPosition: "top", position: "absolute", top: 0 }}
      />
      <CardContent
        sx={{
          marginTop: 25,
        }}
      >
        <Typography
          sx={{
            marginTop: 0,
            fontSize: 18,
            width: "100%",
          }}
          noWrap={true}
        >
          {`${props.firstname} ${props.lastname}`}
        </Typography>
        <Typography sx={{ marginTop: 1 }} color="#a61c00">
          {props.company}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {props.jobrole}
        </Typography>
        <Typography sx={{ marginTop: 1 }} color="#a61c00">
          {props.university}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {props.program_of_study}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions sx={{ flex: 1 }}>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Button size="small" onClick={() => window.open(props.calendlylink)}>
          Schedule a meeting
        </Button>
      </div>
    </CardActions>
  </Card>
);

export default StudentProfile;
