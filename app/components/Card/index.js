import * as React from 'react';
import Box from '@material-ui/material/Box';
import Card from '@material-ui/material/Card';
import CardActions from '@material-ui/material/CardActions';
import CardContent from '@material-ui/material/CardContent';
import Button from '@material-ui/material/Button';
import Typography from '@material-ui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OutlinedCard(props) {
  const {children} =props;
  return (

    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" content={children}><React.Fragment>
    <CardContent>
      {children}
      </CardContent>
  
  </React.Fragment></Card>
    </Box>
  );
}
