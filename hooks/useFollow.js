import { useEffect, useState } from "react";

const Follow = (user, profile, setLoading) => {
  const [followed, setFollowed] = useState(false);
  const [sameUser, setSameUser] = useState(false);

  const checkSame = (user, profile) => {
    if (user) {
      setSameUser(user._id == profile._id);
    } else {
      setSameUser(false);
    }
  };

  const checkFollowed = async (user, profile) => {
    if (user) {
      user.following.forEach((id) => {
        if (id === profile._id) {
          setFollowed(true);
        }
      });
      setLoading(false);
    }
  };

  const onFollow = async (user, profile, followed) => {
    setFollowed((f) => !f);

    await follow(user, profile, followed).then(async (response) => {
      console.log(response);
      if (response.status === "success") {
        // TODO : FIX THIS !!!
        // setUser(response.data);
        followed_by(user, profile, followed).then(async (response) => {
          console.log(response);
          if (response.status === "success") {
          }
        });
      }
    });
  };

  const follow = async (user, profile) => {
    let url = "";

    if (followed) {
      url = `https://pivotinfo.herokuapp.com/api/users/unfollow/${user._id}`;
    } else {
      url = `https://pivotinfo.herokuapp.com/api/users/follow/${user._id}`;
    }

    const req = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: profile._id }),
    });

    return await req.json();
  };

  // FIX THIS

  const followed_by = async (user, profile) => {
    let url = "";

    if (followed) {
      url = `https://pivotinfo.herokuapp.com/api/users/unfollowed/${profile._id}`;
    } else {
      url = `https://pivotinfo.herokuapp.com/api/users/followed/${profile._id}`;
    }

    const req = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user._id,
      }),
    });

    return await req.json();
  };

  useEffect(() => {
    checkFollowed(user, profile);
    checkSame(user, profile);
  }, [user]);

  return { checkFollowed, checkSame, onFollow, followed, sameUser };
};

export default Follow;
