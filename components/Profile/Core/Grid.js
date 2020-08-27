import { useEffect, useState, useContext } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Overview from "../Content/Overview";
// Context
import { UserContext } from "../../../contexts/UserContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 200,
    width: "90%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Container = ({ display, callback, data }) => {
    const classes = useStyles();
    const [profiles, setProfiles] = useState([]);
    const { user } = useContext(UserContext);
  
    useEffect(() => {
      if (callback) {
        callback().then((response) => {
          if (response.status === "success") {
            setProfiles(response.data);
          }
        });
      } else {
        if (user) {
          let filtered = data.filter((profile) => profile._id !== user._id);
          setProfiles(filtered);
        } else {
          setProfiles(data);
        }
      }
    }, [data]);
  
    return (
        <div className={classes.root}>
          <Grid container spacing={3}
          >
          {profiles.map((user) => {
            return (
                <Grid item lg = {4} md = {6} sm = {12}>
                    <Overview author={user} />
              </Grid>
            );
          })}
          </Grid>
        </div>
      );
  };

  export default Container;
