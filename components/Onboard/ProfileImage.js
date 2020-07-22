import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Image from "../Profile/Overview/Image";
import Navigation from "./Navigation";
// Contexts
import { UserContext } from "../../contexts/UserContext";

function ChangeImage({ values, handleChange, setStep }) {
  const useStyles = makeStyles((theme) => ({
    wrapper: {
      width: "100%",
      height: 400,
      display: "flex",
      margin: 0,
      justifyContent: "center",
      borderRadius: 5,
      backgroundColor: "white",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 10,
      marginTop: 10,
      width: 275,
    },
    header: {
      textAlign: "left",
      width: "100%",
      margin: 0,
      fontSize: 28,
      color: "black",
      fontWeight: 700,
      marginBottom: 10,
      marginTop: 15,

      fontFamily: "Open Sans, sans-serif",
    },
    text: {
      textAlign: "left",
      margin: 0,
      width: "100%",
      color: "#A1A1A1",
      fontWeight: 500,
      fontSize: 16,
      fontFamily: "Open Sans, sans-serif",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: 15,
      fontFamily: "Open Sans, sans-serif",
      width: 150,
      margin: 0,
      marginTop: 15,
    },
  }));
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [image, setImage] = useState("");
  const defaultImage =
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

  async function onChange(file) {
    // image not equal to image for setImage method, diff

    if (file) {
      setImage(URL.createObjectURL(file));
      const form_data = new FormData();
      form_data.append("upload", file, file.name);
      let res = await fetch(
        `https://pivotinfo.herokuapp.com/api/users/avatar/${user._id}`,
        {
          method: "PUT",
          body: form_data,
        }
      );
      let data = await res;
      console.log(data);
    }
  }

  useEffect(() => {}, [image]);

  return (
    <form className={classes.wrapper}>
      <div className={classes.container}>
        <Image image={image ? image : defaultImage} size={150} />
        <h1 className={classes.header}>Profile Image</h1>
        <p className={classes.text}>Do you want to set a profile image</p>
        <label htmlFor="contained-button-file">
          <div
            style={{
              display: "flex",
              width: 275,
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              component="span"
            >
              Change Image
            </Button>
            <Button
              className={classes.button}
              variant={"contained"}
              style={{ width: 100 }}
              color={"primary"}
              onClick={() => setStep((s) => s + 1)}
            >
              {!image ? "Skip" : "Next"}
            </Button>
          </div>
        </label>
        <input
          accept="image/*"
          id="contained-button-file"
          type="file"
          onChange={(e) => onChange(e.target.files[0])}
          style={{ display: "none" }}
        />
      </div>
    </form>
  );
}

export default ChangeImage;
