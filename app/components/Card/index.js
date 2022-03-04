import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
