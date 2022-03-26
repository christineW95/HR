import React from 'react';
import Modal from '@material-ui/core/Modal';
import Requests from '../../containers/GeneralRequest';





export default function SimpleModal(props) {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const { open,handleClose,requests,deleteRequest,path}=props;

  const body = (
    <div style={{borderRadius:1}} >
     
      <Requests requests={requests} deleteRequest={deleteRequest} path={path}/>
      <SimpleModal path={path} />
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
