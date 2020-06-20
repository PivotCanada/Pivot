import { useContext, useEffect, useState, useCallback } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// TODO : Refactor ...

const Follow = ({ profile }) => {
  const { user, setUser, authenticated } = useContext(UserContext);

  const [followed, setFollowed] = useState(false);
  const [loading, setLoading] = useState(true);

  // TODO : FIX THIS !!!

  const sameUser = user ? user._id == profile._id : false;

  // TODO : Fix this shittt ...

  console.log(authenticated);
  console.log(sameUser);

  //   console.log(profile);
  //   console.log(user);

  const checkFollowed = async (user, profile) => {
    if (user) {
      user.following.forEach((u) => {
        if (u._id === profile._id) {
          setFollowed(true);
        }
      });
      setLoading(false);
    }
  };

  const onSubmit = async (user, profile, followed) => {
    console.log(followed);
    setFollowed((f) => !f);

    await follow(user, profile, followed).then(async (response) => {
      console.log(response);
      if (response.status === "success") {
        // TODO : FIX THIS !!!
        setUser(response.data);
        followed_by(user, profile, followed).then(async (response) => {
          console.log(response);
          if (response.status === "success") {
          }
        });
      }
    });
  };

  const follow = async (user, profile, followed) => {
    let url = "";

    if (followed) {
      url = `https://pivotinfo.herokuapp.com/api/users/unfollow/${user._id}`;
    } else {
      url = `https://pivotinfo.herokuapp.com/api/users/follow/${user._id}`;
    }

    const req = await fetch(url, {
      method: "PUT",
      mode: "cors", // no-cors, *cors, same-origin,
      // headers field seems to be essential ?
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          _id: profile._id,
          firstname: profile.firstname,
          lastname: profile.lastname,
          photo: profile.photo,
          location: profile.location,
          industry: profile.industry,
          website: profile.website,
        },
      }),
    });

    return await req.json();
  };

  const followed_by = async (user, profile, followed) => {
    let url = "";

    if (followed) {
      url = `https://pivotinfo.herokuapp.com/api/users/unfollowed/${profile._id}`;
    } else {
      url = `https://pivotinfo.herokuapp.com/api/users/followed/${profile._id}`;
    }

    const req = await fetch(url, {
      method: "PUT",
      mode: "cors", // no-cors, *cors, same-origin,
      // headers field seems to be essential ?
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          _id: user._id,
          firstname: user.firstname,
          lastname: user.lastname,
          photo: user.photo,
          location: user.location,
          industry: user.industry,
          website: user.website,
        },
      }),
    });

    return await req.json();
  };

  //   console.log(checkFollowed(user, profile));

  useEffect(() => {
    checkFollowed(user, profile);
  }, [user]);

  if (!authenticated || sameUser) {
    return null;
  } else {
    return (
      <Button
        variant="contained"
        color="primary"
        style={{
          width: 100,
          textTransform: "none",
          marginTop: 20,
          width: "100%",
          fontFamily: "Noto Sans, sans-serif",
          fontWeight: 500,
          borderRadius: 2,
        }}
        onClick={() => onSubmit(user, profile, followed)}
        type="button"
      >
        {followed ? "UnFollow" : "Follow"}
      </Button>
    );
  }
};

export default Follow;
