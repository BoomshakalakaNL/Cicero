import React, { Component } from 'react';
import { Button, Form, Input, Message, Container, Grid, Select } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { getProductCodesForSelectInput, getClientForSelectInput, getOtherInfoForSelectInput } from '../../scripts/main';

class NewDeclaration extends Component {
  constructor() {
    super();
    this.state = {
      codeOptions: getProductCodesForSelectInput(),
      clientOptions: getClientForSelectInput(),
      infoOptions: getOtherInfoForSelectInput(),
      insurance : '',
      client: '',
      dateDeclaration: '',
      dateEndDeclaration: '',
      errorMessage: '',
      loading: false,
      declarations: [{
        code: '',
        amount: '',
        price: ''
      }],
    };
  }

  handleDeclarationCodeChange = (idx, value) => {
    const newDeclarations = this.state.declarations.map((declaration, sidx) => {
      if (idx !== sidx) return declaration;
      return { ...declaration, code: value };
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

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.setState({loading: true, errorMessage: ''});
    var codes = [];
    var amounts = [];
    var prices = [];
    this.state.declarations.forEach( function(element) {
      codes.push(element.code);
      amounts.push(element.amount);
      prices.push(element.price);
    });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods.createDeclaration(this.state.insurance, this.state.client, codes.join(";"), amounts.join(";"), prices.join(";"), this.state.dateDeclaration, this.state.dateEndDeclaration)
        .send({
          from: accounts[0]
        });
      Router.pushRoute('/');
    }
    catch (err) {
      this.setState({errorMessage: err.message});
    }
    this.setState({loading: false});
  }

  handleAddDeclaration = () => {
    this.setState({ declarations: this.state.declarations.concat([{ code: '', amount: '',  price: '' }]) });
  }

  handleRemoveDeclaration = (idx) => () => {
    this.setState({ declarations: this.state.declarations.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    console.log(this.state.declarations);
    return (
      <Layout>
        <div  className="display">
          <Container>
            <Grid verticalAlign='middle'>
              <Grid.Column floated='left'>
                <h1>Nieuwe Declaratie</h1>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
        <Container>
          <Message info
            icon='help'
            content='In onderstaand formulier, kunt u als zorgverlener een declaratie aanmaken. Een adress is het wallet addres van een client of zorgverzekaraar (bv. 0x19514Fd989CC7b248c4fEbc1881f54a17C1570Fa).Om een nieuwe declaratie code toe te voegen, drukt op op de knop Code toevoegen. Wilt u deze of een andere code verwijderen dan drukt u op de knop Code verwijderen. Zijn de aanpassingen klaar dan kunt u op de knop verstuur klikken.'
          />
          <Form onSubmit={this.handleSubmit} loading={this.state.loading} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>Address van Verzekeraar:</label>
              <Select fluid value={this.state.insurance} options={this.state.infoOptions}  onChange={(e, { value }) => this.setState( {insurance: value} ) }/>
            </Form.Field>
            <Form.Field>
              <label>Address van Cliënt:</label>
              <Select fluid value={this.state.client} options={this.state.clientOptions}  onChange={(e, { value }) => this.setState( {client: value} ) }/>
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
                  <Select fluid options={this.state.codeOptions}  onChange={(e, { value }) => this.handleDeclarationCodeChange(idx, value)}/>
                </Form.Field>
                <Form.Field>
                  <label>Aantal</label>
                  <Input fluid type='number' placeholder='12' value={declaration.amount} onChange={this.handleDeclarationAmountChange(idx)}/>
                </Form.Field>
                <Form.Field>
                  <label>Prijs</label>
                  <Input fluid type='number' placeholder='1800' value={declaration.price} onChange={this.handleDeclarationPriceChange(idx)}/>
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
    )
  }
}

export default NewDeclaration;
