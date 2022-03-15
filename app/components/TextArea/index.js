import * as React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function EmptyTextarea(props) {
    const { label } = props
    return (
        <div style={{
            padding:5
            
           
        }}>
            {/* <label>{label}</label> */}
            <TextareaAutosize
            placeholder={label}
                {...props}
                color={props.required && !props.value ? 'secondary' : 'success'}

                style={{ display: 'flex', width: 300, borderRadius:3,padding:15,backgroundColor:'#fff',borderColor:'lightgray' }}
            />
        </div>

    );
}