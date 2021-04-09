import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    marginBottom: theme.spacing(1),
    "& .MuiListItemText-root": {
      flex: 1,
    },
  },

  phone: {
    textAlign: "center",
  },

  email: {
    textAlign: "right",
    paddingRight: 5,
  },
}));

export default useStyles;
