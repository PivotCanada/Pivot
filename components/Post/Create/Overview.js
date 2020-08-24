// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Author from "./Author";
import Image from "../../Profile/Overview/Image";

const Overview = ({ author, date }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    date: {
      color: "#363636",

      fontFamily: "Noto Sans JP, sans-serif",
      fontWeight: 300,
      letterSpacing: "1.5%",
      fontSize: 14,
      padding: 0,
      margin: 0,
      marginBottom: 5,
    },
    innerWrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: 0,
      marginLeft: 20,
      justifyContent: "center",

      height: 70,
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

    let day_of_month = date.getDate();

    let year = date.getFullYear();

    return day + ", " + month + " " + day_of_month + ", " + year;
  };

  return (
    <div className={classes.wrapper}>
      <Image image={author.photo} size={65} />
      <div className={classes.innerWrapper}>
        <Author author={author} />
        <p className={classes.date}>{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default Overview;
