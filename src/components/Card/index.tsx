import React from 'react';
import Router from 'next/router'
import useStylesUI from './styles'

import{CardContent,Typography, Button, CardActions, Card} from '@material-ui/core'

type CardProps={
  title: string,
  value: string,
  isGreen?: boolean,
  isBlue?: boolean,
  isRed?: boolean,
}

export default function CardDashboard({isGreen = false,isBlue = false,isRed = false ,...props}: CardProps) {
  const stylesUi = useStylesUI()
 
  return (
    <Card className={stylesUi.root} elevation={3}>
      <CardContent>
        <Typography  variant="h6" color="textPrimary" gutterBottom>
          Total {props.title}
        </Typography>
        <Typography  variant="h6" color="textPrimary" gutterBottom>
        
        </Typography>
        <Typography  
          variant="h4" 
          className={`${stylesUi.value} ${isGreen ? stylesUi.green :''} ${isBlue ? stylesUi.blue :''} ${isRed ? stylesUi.red :''}`} 
          gutterBottom
        >
          R$ {props.value}
        </Typography>
        <Typography  variant="h6" color="textPrimary" gutterBottom>
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">mais detalhes</Button>
      </CardActions>
    </Card>
  );
}
