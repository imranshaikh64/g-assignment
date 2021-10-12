import react, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Switch, Route, Link } from "react-router-dom";
import Graph from "./Graph";
import ButtonLoader from "./ButtonLoader";

const App = () => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div className="container">

      <img
        src="https://media-exp1.licdn.com/dms/image/C560BAQHMYHzxtbpJFA/company-logo_200_200/0/1626417373133?e=1642032000&v=beta&t=KxmFTZrqZ_UWfKwO8zAGBJCH0DA80ocfL4PJL2Jki-c"
        alt="img"
      />
      <hr/>
      <div className="dialoug_button">

      <button onClick={handleOpen}>Dialog box</button>
      </div>

      <Dialog open={open} onClose={handleClose} className="dialog">
        <DialogContent>
          <img
            src="https://media-exp1.licdn.com/dms/image/C560BAQHMYHzxtbpJFA/company-logo_200_200/0/1626417373133?e=1642032000&v=beta&t=KxmFTZrqZ_UWfKwO8zAGBJCH0DA80ocfL4PJL2Jki-c"
            alt="img"
          />
          <ButtonLoader />
          <Link to="/graph">
            <button>Button 2</button>
          </Link>
        </DialogContent>
      </Dialog>
      <p>{img}</p>
    </div>
    </>
  );
};

export default App;