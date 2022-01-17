import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Toolbar } from "@mui/material";
import TableView from "./pages/referralTableView/Table";
import aasha from "./imgs/aasha.png";
import ReferralRequestForm from "./pages/referralRequestForm/form";
import NavBar from "./pages/navbar/navBar";
import { Box } from "@mui/system";
import StudentProfileList from "./pages/studentprofiles/studentProfileList";
import Login from "./pages/login_signup/login";
import Delete from "./pages/delete";
import ContactOption from "./components/ContactOption";
import MentorProfileOption from "./components/MentorProfileOption";
import MenuBar from "./pages/navbar/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<StudentProfileList />} />
            <Route path="/contact" element={<></>} />
            {/* <Toolbar /> */}
            {/* <TableView /> */}
            {/* <ReferralRequestForm /> */}
            {/* <StudentProfileList /> */}
            {/* <Login /> */}
            {/* <Delete /> */}
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
