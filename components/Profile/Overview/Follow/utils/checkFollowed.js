const checkFollowed = async (user, setFollowed, profile) => {
  if (user) {
    user.following.forEach((u) => {
      if (u._id === profile._id) {
        setFollowed(true);
      }
    });
    setLoading(false);
  }
};

export default checkFollowed;
