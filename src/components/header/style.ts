import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    paddingTop: "5px",
    position: "fixed",
    minHeight: "3rem",
    backgroundColor: "#fff",
    borderBottom: "solid 1px #eee",
    margin: "0 0 15px"
  },
  logo: {
    margin: "12px"
  },
  currentTitme: {
    padding: "0 24px 0",
    margin: "0",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: "24px",
    lineHeight: "2.65",
    fontFamily: "verdana"
  },
  link: {}
});

export default useStyles;
