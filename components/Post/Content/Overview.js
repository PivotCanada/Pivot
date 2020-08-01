// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Author from "./Author";

const Overview = ({ author, date }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      width: "100%",
      display: "flex",
      marginTop: 10,
      justifyContent: "space-between",
    },
    date: {
      color: "grey",
      opacity: 0.7,
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      fontSize: 10,
      padding: 0,
      margin: 0,
      width: "100%",
      textAlign: "right",
      marginBottom: 5,
    },
  }));

  const classes = useStyles();

  const formatDate = (dateObject) => {
    let date = new Date(dateObject);

    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month = months[date.getMonth()];

    let day = days[date.getDay()];

    let year = date.getFullYear();

    return day + " " + month + " " + year;
  };

  return (
    <div className={classes.wrapper}>
      <Author author={author} />
      <p className={classes.date}>{formatDate(date)}</p>
    </div>
  );
};

export default Overview;
