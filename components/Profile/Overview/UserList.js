// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Card from "../Preview/Card";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    minHeight: "100%",
    width: "100%",
  },
  header: {
    margin: 0,
    padding: 0,
    marginBottom: 15,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Noto Sans, sans-serif",
    color: "grey",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const UserList = ({ users, title, width = "100%" }) => {
  const classes = useStyles();
  const empty = users.length === 0;

  if (empty) {
    return null;
  } else {
    return (
      <div className={classes.wrapper}>
        <h3 className={classes.header}>{title}</h3>
        <div className={classes.container} style={{ width: width }}>
          {users.map((user) => {
            return <Card key={user._id} profile={user} />;
          })}
        </div>
      </div>
    );
  }
};

export default UserList;
