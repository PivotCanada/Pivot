import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from "@material-ui/core/styles";


//social
import {
    EmailShareButton,
    FacebookShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";
  
  import FacebookIcon from '@material-ui/icons/Facebook';
  import TwitterIcon from '@material-ui/icons/Twitter';
  import ShareIcon from '@material-ui/icons/Share';
  import EmailIcon from '@material-ui/icons/Email';
  import LinkedInIcon from '@material-ui/icons/LinkedIn';
  import LinkIcon from '@material-ui/icons/Link';

  import {CopyToClipboard} from 'react-copy-to-clipboard';

const Share = ({post}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const copyToClipboard = (text) => {
    
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      marginTop: 10,
    },
    fab: {
      color: "grey",
      boxShadow: "none",
      maringLeft: 3,
    },
    facebook: {
        color: "#3b5998"
    },
    twitter: {
        color: "#1DA1F2"
    },
    linkedin: {
        color: "#2867B2"
    },
    
    share: {
        alignContent: "center",
        justifyContent: "center"
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ShareIcon className = {classes.fab}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
         }}
        transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
      >
        
        <MenuItem className = {classes.share} onClick={handleClose}> 
            <TwitterShareButton  url = {"https://pivot-landing.dalyanparker.vercel.app" + "/posts/" + post._id}>
                <TwitterIcon className = {classes.twitter}/>
            </TwitterShareButton>
        </MenuItem>
        <MenuItem className = {classes.share} onClick={handleClose}> 
            <EmailShareButton  url = {"https://pivot-landing.dalyanparker.vercel.app" + "/posts/" + post._id}>
                <EmailIcon/>
            </EmailShareButton>
        </MenuItem>
       
        <MenuItem className = {classes.share} onClick={handleClose}> 
            <Button
                className = {classes.link}
                onClick ={copyToClipboard("https://pivot-landing.dalyanparker.vercel.app" + "/posts/" + post._id)}>
             <LinkIcon/>
            </Button>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Share;