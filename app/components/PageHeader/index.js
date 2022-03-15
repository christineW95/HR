import * as React from 'react';
import Box from '@material-ui/core/Box';
import { Divider } from '@material-ui/core';


export default function PageHeader(props) {
  
const {header,subheader}=props

  return (
    <div>
      <h1>{header|| "Request Details"
      }</h1>
     <Divider/>

      <p style={{fontSize:10,color:'gray'}}>{subheader||"Please fill the form properly to complete request"}</p>
    </div >

  );
}
 