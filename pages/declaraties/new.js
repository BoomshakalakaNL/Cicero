import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class NewDeclaration extends Component {
  constructor() {
    super();
    this.state = {
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
        <h4>Declarations</h4>
        <Form onSubmit={this.handleSubmit} loading={this.state.loading} error={!!this.state.errorMessage}>
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
                <Input fluid placeholder='A5' value={declaration.code} onChange={this.handleDeclrationCodeChange(idx)}/>
              </Form.Field>
              <Form.Field>
                <label>Aantal</label>
                <Input fluid type='number' placeholder='12' value={declaration.amount} onChange={this.handleDeclarationAmountChange(idx)}/>
              </Form.Field>
              <Form.Field>
                <label>Prijs</label>
                <Input fluid type='number' placeholder='1800' value={declaration.price} onChange={this.handleDeclarationPriceChange(idx)}/>
              </Form.Field>
              <Button type="button" style={{height: '38px', marginTop: '23px'}} onClick={this.handleRemoveDeclaration(idx)} warning>Remove</Button>
            </Form.Group>
          ))}
          <Button type="button" onClick={this.handleAddDeclaration} className="small" success>Add Declaration</Button>
          <br/>
          <Button type="submit" style={{marginTop: '40px'}} primary>Verstuur</Button>
        </Form>
      </Layout>
    )
  }
}

export default NewDeclaration;
