import { useState, useEffect, useContext } from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
// Components
import Image from "./Image";
// Contexts
import { UserContext } from "../../../contexts/UserContext";

function ChangeImage({ size, right = 0 }) {
  const useStyles = makeStyles((theme) => ({
    imageContainer: {
      display: "flex",
      marginRight: right,
      width: size,
      height: size,
      maxWidth: size,
      maxHeight: size,
      alignItems: "center",
    },
    image: {
      borderRadius: "50%",
      maxWidth: "100%",
      maxHeight: "100%",
      minWidth: "100%",
      minHeight: "100%",
      objectFit: "cover",
    },
  }));
  const classes = useStyles();
  const [image, setImage] = useState("");
  const { user } = useContext(UserContext);

  async function handleChange(image) {
    // image not equal to image for setImage method, diff

    if (image) {
      setImage(URL.createObjectURL(image));
      console.log(image);
      const form_data = new FormData();
      form_data.append("upload", image, image.name);
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
    if (user) {
      setImage(user.photo);
    }
  }, [user]);

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
        onChange={(e) => handleChange(e.target.files[0], user._id)}
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
    </form>
  );
}

export default ChangeImage;
