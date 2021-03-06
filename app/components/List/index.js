import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import CalendarToday from '@material-ui/icons/CalendarToday';
import { Assignment, PanoramaFishEye, VisibilitySharp } from '@material-ui/icons';
import { Link } from 'react-router-dom';


const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CustomList(props) {
  const actionIcons=[
    <VisibilitySharp color='secondary'/>,
    <DeleteIcon color='secondary'/>
  ]
const {requests,deleteRequest,path}=props;
const renderedRequests= requests[Object.keys(requests)[0]];
  return (
          <Demo>
          <List style={{borderRadius:15}}>
              {
              
              renderedRequests.map((item,index)=>{
                return(

                <ListItem style={{borderRadius:15}}>
                <ListItemAvatar>
                  <Avatar style={{backgroundColor:'red'}}>
                    <Assignment />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.title || ""}
                  secondary={item.date.toString()}
                />
                  <ListItemSecondaryAction>

                {
                  item.actions.map((action)=>
                 {
                  if(action == 'view' )
                  return <Link to={path} >
                  <IconButton > {actionIcons[0]}</IconButton>
                  </Link>
                  else
                  return <IconButton onClick={()=>deleteRequest(index,Object.keys(requests)[0])}> {actionIcons[1]}</IconButton>

                  }
                  )
                }                </ListItemSecondaryAction>

              </ListItem>
              )})
              
             }
            </List>
          </Demo>
  );
}
