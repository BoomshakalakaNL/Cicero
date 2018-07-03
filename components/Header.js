import React from 'react';
import { Menu, Icon, Container, Grid, Image } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  const src = 'https://www.cicerozorggroep.nl/assets/img/logo.png';

  return (
    <div className='header'>
     <Container>
       <Grid verticalAlign='middle'>
         <Grid.Column align='right'>
           <Link route='/'>
             <a className='item'><Image src={src} size='small' /></a>
           </Link>
         </Grid.Column>
       </Grid>
     </Container>
    </div>
  );
};
