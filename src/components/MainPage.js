import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { SolverUtil } from "./SolverUtil";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useStyles } from "./MainPageStyles";

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
  const classes = useStyles();
  useEffect(() => {
    console.log(matrix);
  }, [flag, matrix]);

  const RowComponent = ({ row }) => {
    function handleChange(e, col) {
      const re = /^[0-9\b]+$/;
      if (re.test(e.target.value)) {
        matrix[row][col] = Number(e.target.value);
        setMatrix(matrix);
        setFlag(!flag);
      }
    }
    return (
      <TableRow
        style={
          (row + 1) % 3 === 0
            ? {
                borderBottom: "2px solid rgb(0, 0, 0)",
                borderRadius: "10px",
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
              className={classes.input}
              value={
                matrix[row][value] !== 0 && matrix[row][value] !== "NaN"
                  ? matrix[row][value]
                  : ""
              }
              onChange={(e) => {
                handleChange(e, value);
              }}
            />
          </TableCell>
        ))}
      </TableRow>
    );
  };

  const solve = () => {
    console.log("Button Pressed");
    SolverUtil(matrix, setMatrix);
    setFlag(!flag);
  };

  const reset = () => {
    let temp = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],

      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    setMatrix(temp);
    setFlag(!flag);
  };
  return (
    <div
      style={{
        marginTop: "55px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Sudoku Solver</h1>
      <Table className={classes.centerItems} aria-label="simple table">
        <TableBody>
          {range.map((value) => (
            <RowComponent row={value} />
          ))}
        </TableBody>
      </Table>
      <div className={classes.centerItems} style={{ marginTop: "20px" }}>
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          onClick={solve}
          style={{ borderRadius: "20px", width: "200px" }}
        >
          Solve
        </Button>
        <Tooltip
          title={
            <h1
              style={{
                fontSize: "17px",
                fontWeight: "normal",
              }}
            >
              Clear
            </h1>
          }
          arrow
        >
          <IconButton aria-label="clear" onClick={reset}>
            <ClearIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default MainPage;
