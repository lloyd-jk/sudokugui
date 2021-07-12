import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  button: {
    // background: "#007FFF",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  centerItems: {
    display: "flex",
    justifyContent: "center",
  },
  input: {
    outline: "none",
    textAlign: "center",
    width: "40px",
    height: "40px",
    padding: "none",
    border: "hidden",
    fontSize: "40px",
  },
});
