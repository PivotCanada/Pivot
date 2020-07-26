import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Image from "../Profile/Overview/Image";
import Navigation from "./Navigation";
import { UserContext } from "../../contexts/UserContext";

function ChangeImage({ values, handleChange }) {
  const useStyles = makeStyles((theme) => ({}));
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const [image, setImage] = useState("");

  async function onChange(file) {
    // image not equal to image for setImage method, diff

    if (file) {
      setImage(URL.createObjectURL(file));
      const form_data = new FormData();
      form_data.append("upload", file, file.name);
      let res = await fetch(
        `http://localhost:5000/api/users/avatar/${user._id}`,
        {
          method: "PUT",
          body: form_data,
        }
      );
      let data = await res;
      console.log(data);
    }
  }

  useEffect(() => {
    setImage(
      "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    );
  }, []);

  return (
    <form
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Image image={image} size={150} />
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
        style={{ display: "none" }}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          component="span"
        >
          Upload
        </Button>
      </label>
      <Navigation type={"next"} />
    </form>
  );
}

export default ChangeImage;
