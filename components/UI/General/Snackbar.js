// Material UI
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Main = ({ open, setOpen, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={() => {}}>
      <MuiAlert elevation={6} variant="filled" onClose={() => setOpen(false)}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Main;
