import react, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { Switch, Route, Link } from 'react-router-dom';
import Graph from "./Graph";
import ButtonLoader from "./ButtonLoader";


const App = () => {

  const [open, setOpen] = useState(false);
  const [img, setImg] = useState('');

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const addImage = () => {
    setImg(<img src='https://freepngimg.com/thumb/graphic_design/40023-6-graph-image-free-png-hq.png' alt='image' />)
  }

 
  return (
    <>
      <img src='https://media-exp1.licdn.com/dms/image/C560BAQHMYHzxtbpJFA/company-logo_200_200/0/1626417373133?e=1642032000&v=beta&t=KxmFTZrqZ_UWfKwO8zAGBJCH0DA80ocfL4PJL2Jki-c' alt='img' />
      <button onClick={handleOpen}>Dialog box</button>

      <Dialog open={open} onClose={handleClose} className='dialog'>

        <DialogContent>
          <img src='https://media-exp1.licdn.com/dms/image/C560BAQHMYHzxtbpJFA/company-logo_200_200/0/1626417373133?e=1642032000&v=beta&t=KxmFTZrqZ_UWfKwO8zAGBJCH0DA80ocfL4PJL2Jki-c' alt='img' />

          <ButtonLoader />

         
            <Switch>
              <Route path='graph' component={Graph} />
            </Switch>

            {/*<button Link to='graph' >Button 2</button> */}

            <button onClick={addImage}>Button 2</button>



        


        </DialogContent>



      </Dialog>
      <p>{img}</p>
    </>
  );
}

export default App;
