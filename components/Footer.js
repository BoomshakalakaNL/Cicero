import React from 'react';
import { Icon, Container, Grid, Image } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <div>
      <div class='footer' style={{marginTop: '20px'}}>
       <Container>
         <Grid columns='equal'>
           <Grid.Row>
             <Grid.Column>
              <h3 style={{color: 'black'}}>Cicero Zorggroep</h3>
              <p>St. Brigidastraat 3<br/>6441 CR Brunssum<br/>Postbus 149, 6440 AC Brunssum<br/>T 045 563 74 00 (algemeen)<br/>E <a href="mailto:info@cicerozorggroep.nl">info@cicerozorggroep.nl</a></p>
              <a href="https://twitter.com/CiceroZorggroe1" target="_blank"><Icon circular style={{background:'white'}} color='black' name='twitter'/></a>
              <a href="https://plus.google.com/108459827876734814530?hl=nl" target="_blank"><Icon circular style={{background:'white'}} color='black' name='google plus g'/></a>
              <a href="https://www.facebook.com/CiceroZorggroep/" target="_blank"><Icon circular style={{background:'white'}} color='black' name='facebook f'/></a>
              <a href="https://www.linkedin.com/company/cicero-zorggroep/" target="_blank"><Icon circular style={{background:'white'}} color='black' name='linkedin in'/></a>
              <a href="https://www.instagram.com/explore/tags/cicerozorggroep/" target="_blank"><Icon circular style={{background:'white'}} color='black' name='instagram'/></a>
              <a href="https://www.youtube.com/channel/UCRmGTvTk2vo6Fgd4H4EWyKw" target="_blank"><Icon circular style={{background:'white'}} color='black' name='youtube play'/></a>
             </Grid.Column>
             <Grid.Column>
              <h3 style={{color: 'black'}}>Cicero Zorgservice</h3>
              <p>Heeft u een vraag en wilt u direct een antwoord? Bel gratis met Cicero Zorgservice <a href="tel:09005009500">0900 500 9 500</a> van maandag t/m vrijdag van 8.00 - 17.00 uur.</p>
             </Grid.Column>
             <Grid.Column>
              <h3 style={{color: 'black'}}>Informatie</h3>
              <ul>
              	<li><a href="https://www.cicerozorggroep.nl/brochures-publicaties">Brochures en publicaties</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/thuis">Diensten voor thuiswonenden</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/revalidatie">Revalideren bij Cicero</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/wonen">Wonen bij Cicero</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/contact">Contact</a></li>
              </ul>
             </Grid.Column>
             <Grid.Column>
              <h3 style={{color: 'black'}}>Snelle links</h3>
              <ul>
              	<li><a href="https://www.cicerozorggroep.nl/ik-zoek-zorg">U zoekt zorg</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/locaties">U zoekt een locatie</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/zorg-aanvragen">U wilt zorg aanvragen</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/werk-en-opleiding/vrijwilligers">U zoekt vrijwilligerswerk</a></li>
              	<li><a href="https://www.cicerozorggroep.nl/werk-en-opleiding">U zoekt een vacature</a></li>
              </ul>
             </Grid.Column>
           </Grid.Row>
         </Grid>
       </Container>
      </div>
      <div class='subfooter'>
        <Container>
          <Grid verticalAlign='middle'>
            <Grid.Column floated='left' width={5}>
              <a href="https://ess.cicerozorggroep.nl/CuraWebESS/Home/login?ReturnUrl=%2Fcurawebess" target="blank" style={{color:'white'}}><Icon circular style={{background:'white'}} color='black' name='user'/> Mijn Cicero</a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://cicero.rooster.nl/" target="blank" style={{color:'white'}}><Icon circular style={{background:'white'}} color='black' name='calendar alternate outline'/> InPlanning</a>
            </Grid.Column>
            <Grid.Column floated='right' width={5} style={{textAlign: 'right'}}>Sitemap&nbsp;&nbsp;|&nbsp;&nbsp;Disclaimer&nbsp;&nbsp;|&nbsp;&nbsp;Privacy</Grid.Column>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
