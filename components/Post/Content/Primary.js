import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans serif",
    fontWeight: 300,
    fontSize: 14,
    width: "100%",
    margin: 0,
    marginTop: 5,
  },
}));

const Primary = ({ text }) => {
  const classes = useStyles();
  const [content, setContent] = useState("");

  const format = () => {
    let words = text.split(" ");
    for (var t in words) {
      let word = words[t];
      if (urlFormat(word)) {
        words[t] = "link not supported";
      }
    }
    setContent(words.join(" "));
  };

  function urlFormat(word) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    if (word.match(urlRegex)) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    format();
  });

  return (
    <p onClick={format} className={classes.description}>
      {content}
    </p>
  );
};

export default Primary;
