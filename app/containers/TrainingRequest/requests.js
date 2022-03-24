import { Button, TextareaAutosize } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomList from '../../components/List';
import RadioButtonsGroup from '../../components/RadioGroup';
import MultipleSelect from '../../components/select';
import UnstyledSelectSimple from '../../components/select';
import BasicTable from '../../components/Table';
import EmptyTextarea from '../../components/TextArea';
import TextInput from '../../components/TextInput';
function Requests(props) {
const {title,requests,deleteRequest} =props;
console.log({requests})


    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column',borderRadius:15 }}>
            <h3>{title}</h3>
            <CustomList requests={requests} deleteRequest={deleteRequest}/>
        </div >
    );
}

export default Requests;
