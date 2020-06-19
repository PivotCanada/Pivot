import { useContext, useState } from "react";
import Router from "next/router";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Components
import UserCard from "./UserCard";
import Industry from "./Industry";
// Contexts
import { UserContext } from "../../../contexts/UserContext";
import { ModalContext } from "../../../contexts/ModalContext";

// Utils
import { createPost } from "./utils/createPost";
// Hooks
import useWidth from "../../../hooks/useWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 75,

    border: "1px solid #e0e0e0",
    borderRadius: 5,
    padding: 20,
    marginTop: 50,
    marginBottom: 10,
    width: "100%",
    maxWidth: 500,
  },
  textField: {
    width: "100%",
    flexGrow: 1,
    flexShrink: 1,

    border: "none",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    backgroundColor: "white",
    borderRadius: 10,
  },
  cardWrapper: {
    display: "flex",

    alignItems: "start",
    backgroundColor: "white",
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    backgroundColor: "white",

    marginLeft: 20,
    width: "75%",
  },
  innerinnerWrapper: {
    display: "flex",
    marginTop: 10,

    justifyContent: "space-between",
    backgroundColor: "white",

    width: "100%",
  },
  button: {
    textTransform: "none",
    marginTop: 21,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    width: 80,
    height: 30,
    fontFamily: "Open Sans, sans serif",
  },
}));

const Main = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);
  const [show, setShow] = useState(false);
  const { user } = useContext(UserContext);
  const { setShowCreate } = useContext(ModalContext);

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
    };

    await createPost(post).then((response) => {
      console.log(response);
      if (response.status === "success") {
        setLoading(false);
        Router.reload();
      } else {
        setLoading(false);
      }
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.innerWrapper}>
        <div className={classes.cardWrapper}>
          <UserCard user={user} />
          <div className={classes.inputWrapper}>
            <TextField
              multiline
              maxRows={4}
              className={classes.textField}
              type="text"
              label="What's on your mind?"
              value={text}
              onChange={(e) => {
                setText(e.target.value);

                if (e.target.value.length > 0) {
                  setShow(true);
                } else {
                  setShow(false);
                }
              }}
            />
            <div
              style={{ display: show ? "flex" : "none" }}
              className={classes.innerinnerWrapper}
            >
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
        </div>
      </div>
    </div>
  );
};

export default Main;
