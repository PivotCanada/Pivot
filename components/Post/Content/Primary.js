import { useState, useEffect } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Lora, serif",
    fontWeight: 350,
    fontSize: 17,
    width: "100%",
    margin: 0,
    marginTop: 35,
    letterSpacing: 0.8,
    lineHeight: "150%",
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
