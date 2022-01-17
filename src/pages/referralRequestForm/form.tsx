import { Box, Button, Container, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const ReferralRequestForm: React.FC = () => {
  const [studentInfo, setStudentInfo] = useState<{
    name: string;
    numLeetCode: number;
    jobRole: string;
    linkedLink: string;
    leetcodeLink: string;
    skills: string;
    projects: string;
    jobId: string;
    jobDescriptionLink: string;
  }>({
    name: "",
    numLeetCode: 0,
    jobRole: "",
    linkedLink: "",
    leetcodeLink: "",
    skills: "",
    projects: "",
    jobId: "",
    jobDescriptionLink: "",
  });

  const onSubmit = () => {
    axios.post("http://127.0.0.1:8000/hello/", studentInfo);
    setStudentInfo({
      name: "",
      numLeetCode: 0,
      jobRole: "",
      linkedLink: "",
      leetcodeLink: "",
      skills: "",
      projects: "",
      jobId: "",
      jobDescriptionLink: "",
    });
  };

  console.log(studentInfo);
  return (
    <Paper
      sx={{
        width: "80%",
        margin: 5,
        overflow: "hidden",
      }}
      elevation={3}
    >
      <Container
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: "flex",
          justifyContent: "center",
          width: "90%",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Name"
          sx={{ margin: 2 }}
          required
          value={studentInfo.name}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, name: e.target.value })
          }
        />
        {/* <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      > */}
        <TextField
          id="outlined-basic"
          label="Leetcode Problems"
          variant="outlined"
          sx={{ margin: 2 }}
          helperText="Number of leetcode problems done so far"
          value={studentInfo.numLeetCode}
          onChange={(e) =>
            setStudentInfo({
              ...studentInfo,
              numLeetCode: Number(e.target.value),
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Leetcode profile"
          variant="outlined"
          value={studentInfo.leetcodeLink}
          sx={{ margin: 2 }}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, leetcodeLink: e.target.value })
          }
        />
        {/* </Box> */}

        <TextField
          id="outlined-basic"
          label="LinkedIn link"
          variant="outlined"
          value={studentInfo.linkedLink}
          sx={{ margin: 2 }}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, linkedLink: e.target.value })
          }
        />

        <TextField
          id="outlined-basic"
          label="Link to Job Description"
          variant="outlined"
          value={studentInfo.jobDescriptionLink}
          sx={{ margin: 2 }}
          onChange={(e) =>
            setStudentInfo({
              ...studentInfo,
              jobDescriptionLink: e.target.value,
            })
          }
        />

        {/* <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
        }}
      > */}
        <TextField
          id="outlined-basic"
          label="Job Id"
          variant="outlined"
          value={studentInfo.jobId}
          sx={{ margin: 2 }}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, jobId: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Job role"
          variant="outlined"
          value={studentInfo.jobRole}
          sx={{ margin: 2 }}
          helperText="What type of role do you wanna purse at this company"
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, jobRole: e.target.value })
          }
        />
        {/* </Box> */}

        <TextField
          id="outlined-multiline-static"
          label="Skills"
          value={studentInfo.skills}
          multiline
          rows={5}
          sx={{ margin: 2 }}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, skills: e.target.value })
          }
        />

        <TextField
          id="outlined-multiline-static"
          label="Projects"
          multiline
          value={studentInfo.projects}
          rows={5}
          sx={{ margin: 2 }}
          onChange={(e) =>
            setStudentInfo({ ...studentInfo, projects: e.target.value })
          }
        />
        <Box>
          <Button
            variant="contained"
            sx={{ margin: 2, paddingX: 4 }}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Paper>
  );
};

export default ReferralRequestForm;
