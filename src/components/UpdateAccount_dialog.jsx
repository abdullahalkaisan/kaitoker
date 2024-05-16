import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Badge,
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { UilArrowCircleUp } from "@iconscout/react-unicons";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";

export default function UpdateAccount_dialog() {
  const [timeLength, setTimeLength] = useState(1);

  const handleChange = (event) => {
    setTimeLength(event.target.value);
  };

  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}

      {user && (
        <Tooltip sx={{ m: 1 }} title="Pro User" placement="right">
          <IconButton onClick={handleClickOpen}>
            <Badge color="error" variant="dot" badgeContent={1}>
              <UilArrowCircleUp />
            </Badge>
          </IconButton>
        </Tooltip>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Update your Kaitoker Account"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            1 Month $5 1 Year $30 (Best price) $2.5/m (50% off) 134 Days left
            Update my friends account
          </DialogContentText>
        </DialogContent>

        <Divider/>
        <DialogActions sx={{ margin: 2 }}>
          <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={1}>
            <Box display={"flex"} alignItems={"center"}>
              <Box sx={{ minWidth: "120px" }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={timeLength}
                    label="Duration"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>
                      30 Days
                      {/* <Typography color={"green"} fontWeight={"bold"} variant="caption" display="block" gutterBottom>
                    $5/m
                </Typography>  */}
                    </MenuItem>
                    <MenuItem value={2}>
                      365 Days
                      <Typography
                        color={"error"}
                        fontWeight={"bold"}
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        -50% ($2.5/m)
                      </Typography>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mx={2}>
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  color={"#008000"}
                  bgcolor={"#00800020"}
                  padding={"3px 10px"}
                  borderRadius={999}
                >
                  $5.00
                </Typography>
              </Box>
            </Box>



            <Box >
                <Button onClick={handleClose} sx={{mx:2}} >Cancel</Button>
                <Button
                size="small"
                variant="contained"
                sx={{ borderRadius: 3 }}
                onClick={handleClose}
                autoFocus
                >
                Update
                </Button>
            </Box>




          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
}

{
  /* <Box>
<Button onClick={handleClose}>Cancel</Button>
<Button
  size="small"
  variant="contained"
  sx={{ borderRadius: 3 }}
  onClick={handleClose}
  autoFocus
>
  Update
</Button>
</Box> */
}
