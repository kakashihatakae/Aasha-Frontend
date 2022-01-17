import { Button, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import axios from "axios";

interface loginInfo {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState<loginInfo>({
    username: "",
    password: "",
  });

  const onLogin = () => {
    axios.post("http://127.0.0.1:8000/login/", loginInfo);

    setLoginInfo({
      username: "",
      password: "",
    });
  };

  return (
    <div
      style={{
        // width: 2000
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "90%", height: 350, maxWidth: 500, marginTop: 8 }}>
        <Box
          sx={{
            margin: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{ flexDirection: "column", display: "flex", height: 230 }}
          >
            <TextField
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
              value={loginInfo.username}
              label="username "
            />

            <TextField
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              sx={{ marginTop: 4 }}
              label="password"
              value={loginInfo.password}
            />
          </div>

          <Button onClick={onLogin}> Login</Button>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
