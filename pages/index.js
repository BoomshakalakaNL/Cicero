import React, { Component } from 'react';
import Declaration from "../ethereum/declaration";
import factory from '../ethereum/factory';
import web3 from "../ethereum/web3";
import { Card, Button, Container, Grid, Icon, Message } from 'semantic-ui-react';
import { Link } from '../routes.js';
import Layout from '../components/Layout.js';

import { getClientName } from '../scripts/main.js';

class DeclarationIndex extends Component{

  static async getInitialProps(){
    const declarationAddresses = await factory.methods.getDeclarations().call();
    var data = [];

    for (var i = 0; i < declarationAddresses.length; i++) {
      var declaration = new Declaration(declarationAddresses[i]);
      var isValidated = await declaration.methods.isValidated().call();
      var isAccepted = await declaration.methods.isAccepted().call();

      var insurance = await declaration.methods.insurance().call();
      var client = await declaration.methods.client().call();
      var careAdminOff = await declaration.methods.careAdminOff().call();
      data.push({
        address: declarationAddresses[i],
        isValidated: isValidated,
        isAccepted: isAccepted,
        client: client,
        careAdminOff: careAdminOff,
        insurance: insurance
      });
    }
    return {declarationAddresses, data};
  }

  async componentDidMount() {
    let accounts = await web3.eth.getAccounts();
    this.setState({currentAccount: accounts[0]});
    let data = [];
    this.props.data.map(element => {
      if (this.state.currentAccount == element.careAdminOff || this.state.currentAccount == element.client || this.state.insurance)  {
        data.push(element);
      }
    });
    this.setState({data: data});
  }

  state = {
    currentAccount: "",
    data: []
  }


  getCardStyle(IsValidated, IsAccepted){
    if (!IsValidated){
      return '50px solid #831b78';
    }
    if (IsValidated && IsAccepted){
      return '50px solid #65b32e';
    }
    else {
      return '50px solid orange';
    }
  }

  renderDeclarations() {
    if ( this.state.data.length > 0){
      const items = this.state.data.map(element => {
        return {
          header: element.address,
          description: (
            <Link route={`/declaraties/${element.address}`}>
              <a>Bekijk details</a>
            </Link>
            ),
          fluid: true,
          meta: getClientName(element.client) + " - " + element.client,
          style: { overflowWrap: 'break-word', borderRight: this.getCardStyle(element.isValidated, element.isAccepted) }
        };
      });
  
      return <Card.Group class='cicero-card' items={items} />;
    }
    else {
      return (
        <Message info
          icon='help'
          content='Bij het controleren van uw wallet address hebben wij geen declaraties gevonden die u mag inzien.'
        />
      );
    }
  }

  render(){
    return(
      <Layout>
        <div  class="display">
          <Container>
            <Grid verticalAlign='middle'>
              <Grid.Column floated='left' width={5}>
                <h1>Declaraties</h1>
              </Grid.Column>
              <Grid.Column floated='right' style={{textAlign: 'right'}} width={5}>
                <Link route='/declaraties/new'>
                  <a><Icon color='purple' name="add" size='big'/></a>
                </Link>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
        <Container>
          {this.renderDeclarations()}
        </Container>
      </Layout>
    );
  }
}
export default DeclarationIndex;