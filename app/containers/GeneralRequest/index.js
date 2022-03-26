import React, { useEffect, useState } from 'react';
import CustomList from '../../components/List';

function Requests(props) {
const {title,requests,deleteRequest,path} =props;

    return (
        <div style={{ display: 'flex', flex: 1, padding: 100, flexDirection: 'column',borderRadius:15 }}>
            <h3>{title}</h3>
            <CustomList requests={requests} deleteRequest={deleteRequest} path={path}/>
        </div >
    );
}

export default Requests;
