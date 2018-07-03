import React, { Component } from 'react';
import { Button, Form, Input, Message, Container, Grid, Select } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import Declaration from "../../ethereum/declaration";
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { getDeclarationFromSummary, toNumberString } from '../../scripts/main';

class EditDeclaration extends Component{
  static async getInitialProps(props) {
      const declaration = new Declaration(props.query.address);
      const isValidated = await declaration.methods.isValidated().call();
      const careAdminOff = await declaration.methods.careAdminOff().call();
      return {
        address: props.query.address,
        isValidated: isValidated,
        careAdminOff: careAdminOff
      };
  }

  async componentDidMount(){
    const accounts = await web3.eth.getAccounts();
    if (accounts[0] == this.props.careAdminOff){
      const declaration = new Declaration(this.props.address);
      const summary = await declaration.methods.getDeclaration().call({from: accounts[0]});
      this.setState({
          client: summary[1],
          insurance: summary[0],
          declarations: getDeclarationFromSummary(summary[3], summary[4], summary[5]),
          dateDeclaration: summary[6],
          dateEndDeclaration: summary[7],
          mayEdit: true,
          errorMessage: ''
      });
    }
    else {
      this.setState({errorMessage: 'U heeft geen rechten voor het bewerken van deze declaratie.'})
    }
  }

  state = {
      mayEdit: false,
      errorMessage: 'Loading ...',
      errorFormMessage: '',
      loading: false,
      client: "",
      insurance: "",
      declarations: [],
      dateDeclaration: "",
      dateEndDeclaration: ""
  };


  handleDeclrationCodeChange = (idx) => (evt) => {
    const newDeclarations = this.state.declarations.map((declaration, sidx) => {
      if (idx !== sidx) return declaration;
      return { ...declaration, code: evt.target.value };
    });

    this.setState({ declarations: newDeclarations });
  }

  handleDeclarationAmountChange = (idx) => (evt) => {
    const newDeclarations = this.state.declarations.map((declaration, sidx) => {
      if (idx !== sidx) return declaration;
      return { ...declaration, amount: evt.target.value };
    });

    this.setState({ declarations: newDeclarations });
  }

  handleDeclarationPriceChange = (idx) => (evt) => {
    const newDeclarations = this.state.declarations.map((declaration, sidx) => {
      if (idx !== sidx) return declaration;
      return { ...declaration, price: evt.target.value };
    });

    this.setState({ declarations: newDeclarations });
  }

  handleAddDeclaration = () => {
    this.setState({ declarations: this.state.declarations.concat([{ code: '', amount: '',  price: '' }]) });
  }

  handleRemoveDeclaration = (idx) => () => {
    this.setState({ declarations: this.state.declarations.filter((s, sidx) => idx !== sidx) });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("Preparing parameters ...");
    this.setState({loading: true, errorFormMessage: ''});
    var codes = [];
    var amounts = [];
    var prices = [];
    this.state.declarations.forEach( function(element) {
      codes.push(element.code);
      amounts.push(element.amount);
      prices.push(toNumberString(parseFloat(element.price)).replace(".", "").replace(",", ""));
    });
    try {
      const accounts = await web3.eth.getAccounts();
      const declaration = new Declaration(this.props.address);
      console.log("Transaction time now ...");
      await declaration.methods.editDeclaration(this.state.insurance, this.state.client, codes.join(";"), amounts.join(";"), prices.join(";"), this.state.dateDeclaration, this.state.dateEndDeclaration)
        .send({
          from: accounts[0]
        });
        console.log("Transaction succeeded");
      Router.replaceRoute(`/declaraties/${this.props.address}`);
    }
    catch (err) {
      console.log("Transaction failed ...");
      console.log(err);
      this.setState({errorFormMessage: err.message});
    }
    console.log("Submit done.");
    this.setState({loading: false});
  }

  render(){
    if (this.props.isValidated){
      return (
        <Layout>
          <div className='display'><Container><h1>Details declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1></Container></div>
          <Container><Message info icon='help' content='Deze declaratie kan niet meer worden bewerkt, aangezien deze intern gevalideerd is.'/></Container>
        </Layout>
      );
    }
    if (this.state.mayEdit){
      return (
        <Layout>
          <div className='display'><Container><h1>Details declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1></Container></div>
          <Container>
            <Form onSubmit={this.handleSubmit} loading={this.state.loading} error={!!this.state.errorFormMessage}>
              <Message error header="Oops!" content={this.state.errorFormMessage} />
              <Form.Field>
                <label>Address van Verzekeraar:</label>
                <Input
                  value={ this.state.insurance}
                  onChange={ event => this.setState( {insurance: event.target.value} ) }
                />
              </Form.Field>
              <Form.Field>
                <label>Address van Cliënt:</label>
                <Input
                  value={ this.state.client}
                  onChange={ event => this.setState( {client: event.target.value} ) }
                />
              </Form.Field>
              <Form.Field>
                <label>Declaratie datum:</label>
                <Input
                  value={ this.state.dateDeclaration}
                  type="date"
                  onChange={ event => this.setState( {dateDeclaration: event.target.value} ) }
                />
              </Form.Field>
              <Form.Field>
                <label>Declaratie eind datum:</label>
                <Input
                  value={ this.state.dateEndDeclaration}
                  type="date"
                  onChange={ event => this.setState( {dateEndDeclaration: event.target.value} ) }
                />
              </Form.Field>
              {this.state.declarations.map((declaration, idx) => (
                <Form.Group widths='equal'>
                  <Form.Field>
                    <label>Code</label>
                    <Input fluid value={declaration.code} onChange={this.handleDeclrationCodeChange(idx)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Aantal</label>
                    <Input fluid type='number' value={declaration.amount} onChange={this.handleDeclarationAmountChange(idx)}/>
                  </Form.Field>
                  <Form.Field>
                    <label>Prijs</label>
                    <Input fluid type='number' step='0.01' value={declaration.price} onChange={this.handleDeclarationPriceChange(idx)}/>
                  </Form.Field>
                  <Button type="button" style={{height: '38px', marginTop: '23px'}} onClick={this.handleRemoveDeclaration(idx)} negative>Verwijderen</Button>
                </Form.Group>
              ))}
              <Button type="button" onClick={this.handleAddDeclaration} className="small" positive>Code toevoegen</Button>
              <br/>
              <Button type="submit" style={{marginTop: '40px'}} primary fluid>Verstuur</Button>
            </Form>
          </Container>
        </Layout>
      );
    }
    else {
      return (
        <Layout>
          <div className='display'><Container><h1>Details declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1></Container></div>
          <Container><Message info icon='help' content={this.state.errorMessage}/></Container>
        </Layout>
      );
    }
  }
}

export default EditDeclaration;
