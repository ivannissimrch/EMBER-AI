import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AlertMessage({
  showAlert,
  closeAlert,
}: {
  showAlert: boolean;
  closeAlert: () => void;
}) {
  return (
    <>
      <Dialog
        open={showAlert}
        onClose={closeAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Input required: Please enter a question.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeAlert} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
