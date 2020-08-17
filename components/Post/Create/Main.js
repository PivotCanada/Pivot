import { useContext, useState, useEffect } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Components
import UserCard from "./UserCard";
import Industry from "./Industry";
import MicroLink from "../Content/MicroLink";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";

// Utils
import { createPost } from "./utils/createPost";
import { addChild } from "./utils/addChild";
// Hooks
import useWidth from "../../../hooks/useWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "50vh",
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    overflowX: "hidden",
  },
  textField: {
    width: "17rem",
    marginTop: 20,
    flexGrow: 1,
    flexShrink: 1,
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  button: {
    marginTop: 45,
    marginBottom: "3rem",
    textTransform: "none",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    width: "100%",
    fontFamily: "Open Sans, sans serif",
  },
}));

const Main = ({ role, context }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState([]);
  const { user } = useContext(UserContext);
  const { setShowCreate } = useContext(ModalContext);

  useEffect(() => {
    console.log(role);
    console.log(context);
  }, [role, link]);

  const onSubmit = async (text) => {
    setLoading(true);

    let post = {
      text: text,
      author: {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        photo: user.photo,
      },
      tags: tags,
      role: role,
      context: context,
    };

    await createPost(post).then(async (response) => {
      if (response.status === "success") {
        let post = response.data;
        if (role === "child") {
          await addChild(context, post._id).then((response) => {
            console.log(response);
          });
        }
        // fetchPosts();
        setLoading(false);

        Router.reload();
      } else {
        setLoading(false);
      }
    });
  };

  const examineContent = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    var link = "";

    if (text.match(urlRegex) !== null) {
      link = text.match(urlRegex)[0];
      setLink(link);
    }

    if (link !== "") {
      setText(formatText(text));
    } else {
      setText(text);
    }
  };

  const formatText = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    var formatted_text = text;

    if (text.match(urlRegex) !== null) {
      formatted_text = text.replace(text.match(urlRegex), "");
    }

    return formatted_text;
  };

  const onChange = (text) => {
    examineContent(text);
    console.log(text);
    // if (text.includes("i")) {
    //   console.log(text.split("#"));
    // }
  };

  if (context) {
    return (
      <div className={classes.root}>
        <div className={classes.innerWrapper}>
          <UserCard user={user} />
          <TextField
            multiline
            rows={4}
            className={classes.textField}
            variant="outlined"
            type="text"
            label="What's on your mind?"
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
          {link ? <MicroLink link={link} /> : null}
          <Industry tags={tags} setTags={setTags} />
          <Button
            disabled={text.length === 0}
            variant={"contained"}
            color={"primary"}
            className={classes.button}
            onClick={() => onSubmit(text)}
          >
            Create
          </Button>
        </div>
      </div>
    );
  }
};

export default Main;
