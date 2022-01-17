import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReferralTableRow from "./tableRow";

// name: string;
// numLeetCode: number;
// jobRole: string;
// linkedLink: string;
// leetcodeLink: string;
// skills: string;
// projects: string;
// jobId: string;
// jobDescriptionLink: string;

const TableView: React.FC = () => {
  const [table, setTable] = useState<
    {
      id: number;
      name: string;
      numLeetCode: number;
      jobRole: string;
      linkedLink: string;
      leetcodeLink: string;
      skills: string;
      projects: string;
      jobId: string;
      jobDescriptionLink: string;
    }[]
  >([]);

  const refreshList = () => {
    console.log("weird");
    axios.get("http://127.0.0.1:8000/hello/").then((res) => setTable(res.data));
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://127.0.0.1:8000/hello/delete/${id}`)
      .then(() => refreshList());
  };

  useEffect(refreshList, []);

  return (
    <Paper
      sx={{ width: "80%", overflow: "hidden", marginTop: 8 }}
      elevation={4}
    >
      <TableContainer sx={{ maxHeight: 500 }} component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">Name</TableCell>
              <TableCell align="center">NumLeetcode</TableCell>
              <TableCell align="center">JobRole</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row, index) => (
              <ReferralTableRow
                key={row.id}
                name={row.name}
                numLeetcode={row.numLeetCode}
                jobRole={row.jobRole}
                deleteHandler={() => handleDelete(row.id)}
                id={index}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default TableView;
