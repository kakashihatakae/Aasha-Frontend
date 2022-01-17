import { Button, outlinedInputClasses, Paper } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import shreyas from "../imgs/shreyas.jpeg";

const Delete: React.FC = () => {
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!e.target.files) return ;
    const image = e.currentTarget.files;
    setFile(image![0]);
    console.log("------------");
    console.log(URL.createObjectURL(file!));
  };

  const onUpload = () => {
    if (!inputRef.current) return;
    console.log("90");
    inputRef.current.click();
  };

  const onSubmit = () => {
    const newMentor: any = new FormData();
    newMentor.append("username", "hello11");
    newMentor.append("email", "shreya11@gmail.com");
    newMentor.append("first_name", "suyash");
    newMentor.append("last_name", "inamdar");
    newMentor.append("image", file);

    axios
      .post("http://localhost:8000/user-profile/", newMentor, {
        headers: { "content-type": "multipart/form-data" },
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div>
        <input
          type="file"
          id="btn-upload"
          name="btn-upload"
          style={{ display: "none" }}
          onChange={uploadFile}
          ref={inputRef}
        />
        {file && <img src={URL.createObjectURL(file)} />}
        <Button onClick={onUpload}>Choose File</Button>
        <Button onClick={onSubmit}>Fuck this</Button>
      </div>
    </>
  );
};

export default Delete;
