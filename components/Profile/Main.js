import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import RoomIcon from "@material-ui/icons/Room";
import StoreIcon from "@material-ui/icons/Store";
import Chip from "@material-ui/core/Chip";
import Follow from "./Follow";
import Followers from "./Followers";
import Following from "./Following";

import PostCard from "../Post/Main/Card";
import CreatePost from "../Post/Create/MainProfile";

import Posts from "../Home/Posts";

import { useRef, useEffect, useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { fetchUserPosts } from "./utils/fetchUserPosts";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",

    width: "100%",
    height: "100%",
    marginTop: 25,
  },

  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  bodyPost: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  bodyContacts: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },

  overview: {
    width: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    margin: 0,
    padding: 0,
    marginLeft: "5%",
  },

  title: {
    textDecoration: "none",
    color: "grey",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: 18,
    textAlign: "left",
    width: "100%",
    margin: 0,
    marginBottom: 25,
    marginTop: 30,
  },

  storyTitle: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 22,
    textAlign: "left",
    width: "100%",
    margin: 0,
    marginBottom: 55,
    marginTop: 5,
  },

  imageContainer: {
    display: "flex",
    width: 150,
    height: 150,
    alignItems: "center",
  },
  image: {
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  articleImage: {
    width: "85%",
    padding: 10,
    marginTop: 30,
    marginBottom: 30,
    objectFit: "cover",
  },
  article: {
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    width: "50%",
    marginLeft: "7%",
  },
  innerWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    margin: 0,
    marginTop: 30,
  },
  text: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    fontSize: 16,
    width: "95%",
    lineHeight: "32px",
    marginBottom: 40,
  },
  author: {
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 14,
    width: "80%",
    margin: 0,
  },
  subheader: {
    color: "black",
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 700,
    fontSize: 16,
    width: "80%",
    margin: 0,
  },
  date: {
    color: "black",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 500,
    fontSize: 13,
    width: "100%",
    marginTop: 10,
    lineHeight: 1.5,
  },

  link: {
    color: "black",
    fontFamily: "Frank Ruhl Libre, serif",
    fontWeight: 500,
    fontSize: "18px",
    width: "80%",
    marginTop: 10,
  },
  button: {
    marginTop: 25,
    marginBottom: 20,
    width: 200,
    textTransform: "none",
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: 9,
    backgroundColor: "#E5E5E5",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  chipArray: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 35,
    marginTop: 15,
  },
  followBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  followBoxWrapper: {
    display: "flex",
    marginTop: 20,
    width: 250,
    justifyContent: "space-between",
  },
  followBoxHeader: {
    fontFamily: "Noto Sans, sans-serif",
    fontWeight: 400,
    fontSize: 11,
    color: "grey",
    textAlign: "center",
    margin: 0,
  },
  followBoxText: {
    fontFamily: "Noto Sans, sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: "black",
    textAlign: "center",
    margin: 0,
  },
  buttonGroup: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
}));

function Article({ story }) {
  const overviewRef = useRef(null);
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("posts");
  const def =
    "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80";

  const fetchPosts = async (id) => {
    await fetchUserPosts(story._id).then((response) => {
      console.log(response);
      if (response.status === "success") {
        setPosts(response.data);
      }
    });
  };

  useEffect(() => {
    fetchPosts(story._id);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.overview}>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={story.photo ? story.photo : def}
          />
        </div>
        <div className={classes.followBoxWrapper}>
          <div className={classes.followBox}>
            <p className={classes.followBoxText}>{story.following.length}</p>
            <p className={classes.followBoxHeader}>following</p>
          </div>
          <div className={classes.followBox}>
            <p className={classes.followBoxText}>{posts.length}</p>
            <p className={classes.followBoxHeader}>posts</p>
          </div>
          <div className={classes.followBox}>
            <p className={classes.followBoxText}>{story.followed_by.length}</p>
            <p className={classes.followBoxHeader}>followers</p>
          </div>
        </div>
        <Follow profile={story} />

        <div className={classes.innerWrapper}>
          <h2 className={classes.author}>
            {story.firstname} {story.lastname}
          </h2>
          <h2 className={classes.date}>
            Entreprenuer, Engineer. Building the next genration of electric
            motors.
          </h2>
        </div>
        <div className={classes.chipArray}>
          <Chip
            icon={<RoomIcon />}
            label={story.location}
            className={classes.chip}
          />
          <a
            style={{ textDecoration: "none" }}
            href={"https://" + story.website}
            target="_blank"
          >
            <Chip
              icon={<PublicIcon />}
              label={story.website}
              className={classes.chip}
            />
            <Chip
              icon={<StoreIcon />}
              label={story.industry}
              className={classes.chip}
            />
          </a>
          {/* <Chip label={story.industry} className={classes.chip} /> */}
        </div>

        <Following profile={story} />
        <Followers profile={story} />
      </div>
      <div className={classes.article}>
        <div className={classes.buttonGroup}>
          <ButtonGroup
            color="primary"
            aria-label="outlined secondary button group"
          >
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setContent("story")}
            >
              Story
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setContent("posts")}
            >
              Posts
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setContent("likes")}
            >
              Likes
            </Button>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => setContent("contacts")}
            >
              Contacts
            </Button>
          </ButtonGroup>
        </div>

        {user !== null && user._id === story._id ? <CreatePost /> : null}

        {content === "story" ? (
          <div className={classes.body}>
            <h1 className={classes.title}>Story</h1>
            {/* <h1 className={classes.storyTitle}>{story.business}</h1> */}
            <h2 className={classes.subheader}>Our Challenges</h2>
            <p className={classes.text}>{story.challenges}</p>
            <h2 className={classes.subheader}>Our Wish</h2>
            <p className={classes.text}>{story.wish}</p>
            <h2 className={classes.subheader}>Our Achievements</h2>
            <p className={classes.text}>{story.achievements}</p>
            <h2 className={classes.subheader}>Our Goals</h2>
            <p className={classes.text}>{story.goals}</p>
          </div>
        ) : null}

        {content === "posts" ? (
          <div className={classes.bodyPost}>
            <h1 className={classes.title}>Posts</h1>
            {posts.map((post) => {
              return <PostCard key={post._id} post={post} display={true} />;
            })}
          </div>
        ) : null}

        {content === "likes" ? (
          <div className={classes.bodyPost}>
            <h1 className={classes.title}>Likes</h1>
            {story.likes.map((post) => {
              return <PostCard key={post._id} post={post} display={true} />;
            })}
          </div>
        ) : null}

        {content === "contacts" ? (
          <div className={classes.body}>
            <h1 className={classes.title}>Contacts</h1>
            <div className={classes.bodyContacts}>
              <Following profile={story} />
              <Followers profile={story} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Article;
