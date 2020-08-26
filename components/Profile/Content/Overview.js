import Link from "next/link";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
// Components
import Author from "./Author";
import Image from "../Overview/Image";

const Overview = ({ author, date }) => {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      padding: 10,
      width: "100%",
      display: "flex",

      marginBottom: 20,
      textDecoration: "none",
      color: "black",
      "&:hover": {
        opacity: 0.6,
        cursor: "pointer",
      },

      borderRadius: 2,
    },
    description: {
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
      width: "85%",
      minHeight: 80,
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

  let text =
    "Professor Animesh joined the Faculty of Management in 2007. He received his doctorate in Information Systems from R. H. Smith School of Business, University of Maryland and holds an Masters in Information Systems Management from Carnegie Mellon University. He has a Bachelors in Business Studies from Delhi University.";

  const format = (text, bound, length) => {
    if (text.length > bound) {
      let list = text.split(" ");
      return list.slice(0, length).join(" ") + " ...";
    }
  };

  return (
    <Link href={`/profiles/${author._id}`}>
      <a className={classes.wrapper} href={`/profiles/${author._id}`}>
        <Image image={author.photo} size={90} />
        <div className={classes.innerWrapper}>
          <Author author={author} />
          <p className={classes.description}>{format(text, 50, 34)}</p>
        </div>
      </a>
    </Link>
  );
};

export default Overview;
