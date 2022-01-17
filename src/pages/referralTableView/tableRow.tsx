import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Divider,
  Fade,
  Grid,
  IconButton,
  styled,
  Table,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import AcceptComponent from "./components/acceptComponent/acceptComponent";
import DropDownInfoCard from "./components/dropdownInfoCard/dropDownInfoCard";

interface dropDownProps {
  linkedIn: string;
  leetcodeProfile: string;
  skills: string;
  projects: string;
  JobId: string;
  JDLink: string;
}

interface rowProps {
  name: string;
  numLeetcode: number;
  jobRole: string;
  deleteHandler: () => void;
  id: number;
  dropDown?: dropDownProps;
}

const ReferralTableRow: React.FC<rowProps> = ({
  name,
  numLeetcode,
  jobRole,
  deleteHandler,
  dropDown,
  id,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);

  return (
    <>
      <TableRow sx={{ backgroundColor: id % 2 ? "#ffd6cc" : "#fff0e6" }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            {openDropDown ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell> {name} </TableCell>
        <TableCell align="center"> {numLeetcode} </TableCell>
        <TableCell align="center"> {jobRole} </TableCell>
        <TableCell align="center">
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              deleteHandler();
            }}
          >
            Reject
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={openDropDown} timeout="auto" unmountOnExit>
            <Box
              sx={{
                margin: 3,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <DropDownInfoCard />
              <Divider orientation="vertical" flexItem />
              <AcceptComponent />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default ReferralTableRow;
