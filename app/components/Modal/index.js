import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  paper: {
    width: 250,
    position:'absolute',
    bottom:200,
    right:50,
    alignItems:'center',
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    borderRadius:15,
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const { open,handleClose}=props;

  const body = (
    <div  className={classes.paper}>
      <h4 id="simple-modal-title">Quick Links</h4>
        <Link
          to={"/dutyresumption"}
          style={{
            whiteSpace: "nowrap",
            textAlign: "justify",
            textDecoration: "none",
          }}
        >
          View Completed Requests
        </Link>
        <Link
          to={"/cancelleaverequest"}
          style={{
            whiteSpace: "nowrap",
            textAlign: "justify",
            textDecoration: "none",
          }}
        >
          View Current Requests
        </Link>
      <SimpleModal />
    </div>
  );

  return (
      <Modal
        open={open}
        onClose={handleClose}
      >
         {body}
       
      </Modal>
  );
}
