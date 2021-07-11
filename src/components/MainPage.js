import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { SolverUtil } from "./SolverUtil";
const MainPage = () => {
  const [matrix, setMatrix] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const [flag, setFlag] = useState(false);
  const range = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const useStyles = makeStyles({
    row: {},
  });
  const classes = useStyles();
  useEffect(() => {
    console.log(matrix);
  }, [flag, matrix]);

  const RowComponent = ({ row }) => {
    function handleChange(e, col) {
      //   console.log("hello");
      matrix[row][col] = Number(e.target.value);
      setMatrix(matrix);
      setFlag(!flag);
      //   console.log(e.target.value, matrix[row][0]);
    }
    return (
      <TableRow
        style={
          (row + 1) % 3 === 0
            ? {
                borderBottom: "2px solid rgb(0, 0, 0)",
              }
            : row === 0
            ? {
                borderTop: "2px solid rgb(0, 0, 0)",
              }
            : {}
        }
      >
        {range.map((value) => (
          <TableCell
            key={value}
            align="center"
            style={
              (value + 1) % 3 === 0
                ? {
                    border: "1px solid grey",
                    borderRight: "2px solid black",
                  }
                : value === 0
                ? {
                    border: "1px solid grey",
                    borderLeft: "2px solid black",
                  }
                : { border: "1px solid grey" }
            }
          >
            <input
              type="text"
              style={{
                outline: "none",
                textAlign: "center",
                width: "40px",
                height: "40px",
                padding: "none",
                border: "hidden",
                fontSize: "40px",
              }}
              value={matrix[row][value] !== 0 ? matrix[row][value] : ""}
              onChange={(e) => {
                handleChange(e, value);
              }}
            />
          </TableCell>
        ))}
      </TableRow>
    );
  };

  const onPressed = () => {
    console.log("Button Pressed");
    SolverUtil(matrix, setMatrix);
    setFlag(!flag);
  };

  return (
    <div style={{ width: "auto", marginLeft: "400px", marginTop: "100px" }}>
      <Table
        className={classes.table}
        aria-label="simple table"
        style={{ width: "100px", border: "black" }}
      >
        <TableBody>
          {range.map((value) => (
            <RowComponent row={value} />
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={onPressed}
      >
        Solve !
      </Button>
    </div>
  );
};

export default MainPage;
