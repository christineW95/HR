import * as React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
