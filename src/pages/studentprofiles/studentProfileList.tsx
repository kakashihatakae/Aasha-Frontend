import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentProfile from "../../components/studentProfile";
import useMediaQuery from "@mui/material/useMediaQuery";

export interface mentorProfileProps {
  id?: number;
  firstname: string;
  lastname: string;
  company: string;
  jobrole: string;
  university: string;
  program_of_study: string;
  calendlylink?: string;
  image: string;
}

const FILE_GET_PREFIX = "http://34.122.233.47:8080/";

const StudentProfileList: React.FC = () => {
  const [profile, setProfile] = useState<mentorProfileProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const k = () => {
    axios.get("http://34.122.233.47:8080/user/profile").then((res) => {
      setProfile(res.data);
      setIsLoading(false);
    });
  };

  useEffect(k, []);

  if (!isLoading && profile) {
    // console.log(profile[0].lastname);
    console.log(profile);
  }

  const isComputer = useMediaQuery("(min-width:1000px)");
  const isTablet = useMediaQuery("(min-width:550px)");

  const GridItemXSCalculator = (): number => {
    if (isComputer && isTablet) {
      return 3;
    } else if (!isComputer && isTablet) {
      return 6;
    } else {
      return 12;
    }
  };

  const GridItemXS = GridItemXSCalculator();

  return (
    <Box
      sx={{
        flexDirection: "column",
        maxWidth: 1540,
        marginTop: "2%",
        marginBottom: 10,
      }}
      width="85%"
    >
      <Grid
        container
        spacing={3}
        sx={{
          flexDirection:
            (isComputer || !isComputer) && isTablet ? "row" : "column",
          alignItems: "center",
        }}
      >
        {profile.map(
          (profile, index): React.ReactElement => (
            <Grid key={index} item xs={GridItemXS}>
              <StudentProfile
                image={FILE_GET_PREFIX + profile.image}
                firstname={profile.firstname}
                lastname={profile.lastname}
                company={profile.company}
                jobrole={profile.jobrole}
                university={profile.university}
                program_of_study={profile.program_of_study}
                calendlylink={profile.calendlylink}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};

export default StudentProfileList;
