import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Requests from '../../containers/TrainingRequest/requests';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const { open,handleClose,requests}=props;


  const body = (
    <div style={{borderRadius:1}} >
     
      <Requests requests={requests}/>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      
      <Modal
      style={{borderRadius:10}}
       open={open}
       onClose={handleClose}
      >
       {body}
      </Modal>
    </div>
  );
}
