import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';



/*class NewDeclaration extends Component{


  state = {
    insurance : '',
    client: '',
    declarations: [],
    dateDeclaration: '',
    dateEndDeclaration: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
      event.preventDefault();
      this.setState({ loading: true, errorMessage: ''});
      /*
      try {
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createDeclaration(this.state.insurance, this.state.client, this.state.careCodes, this.state.careAmounts, this.state.carePrices, this.state.dateDeclaration, this.state.dateEndDeclaration)
          .send({
            from: accounts[0]
          });
        Router.pushRoute('/');
      }
      catch (err) {
        this.setState({ errorMessage: err.message });
      }
      *//*
      this.setState({loading: false});
    };

/*
  render(){
    return(
      <Layout>
        <h3>Nieuwe declaratie</h3>
        <Form  loading={this.state.loading} onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
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
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Code</label>
              <Input fluid placeholder='A5'/>
            </Form.Field>
            <Form.Field>
              <label>Aantal</label>
              <Input fluid type='number' placeholder='12'/>
            </Form.Field>
            <Form.Field>
              <label>Prijs</label>
              <Input fluid type='number' placeholder='1800'/>
            </Form.Field>
            <Button>Remove</Button>
          </Form.Group>
          <Form.Field>
            <label>Declaratie datum:</label>
            <Input
              value={ this.state.dateDeclaration}
              type="date"
              onChange={ event => this.setState( {dateDeclaration: event.target.value} ) }
            />
          </Form.Field>
          <Form.Field>
            <label>Declaratie datum:</label>
            <Input
              value={ this.state.dateEndDeclaration}
              type="date"
              onChange={ event => this.setState( {dateEndDeclaration: event.target.value} ) }
            />
          </Form.Field>
          <Message error header="Oeps!" content={this.state.errorMessage} />
          <Button type='submit' primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default NewDeclaration;
*/

class IncorporationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      declarations: [{
        code: '',
        amount: '',
        price: ''
      }],
    };
  }

  handleNameChange = (evt) => {
    this.setState({ code: evt.target.value });
  }

  handleDeclarationNameChange = (idx) => (evt) => {
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

  handleSubmit = (evt) => {
    const { name, declarations } = this.state;
    alert(`Incorporated: ${name} with ${declarations.length} declarations`);
    console.log(this.state.declarations);
  }

  handleAddDeclaration = () => {
    this.setState({ declarations: this.state.declarations.concat([{ code: '', amount: '',  price: '' }]) });
  }

  handleRemoveDeclaration = (idx) => () => {
    this.setState({ declarations: this.state.declarations.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    return (
      <Layout>
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          placeholder="Company name, e.g. Magic Everywhere LLC"
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <h4>Declarations</h4>


        {this.state.declarations.map((declaration, idx) => (
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Code</label>
              <Input fluid placeholder='A5' value={declaration.code} onChange={this.handleDeclarationNameChange(idx)}/>
            </Form.Field>
            <Form.Field>
              <label>Aantal</label>
              <Input fluid type='number' placeholder='12' value={declaration.amount} onChange={this.handleDeclarationAmountChange(idx)}/>
            </Form.Field>
            <Form.Field>
              <label>Prijs</label>
              <Input fluid type='number' placeholder='1800' value={declaration.price} onChange={this.handleDeclarationPriceChange(idx)}/>
            </Form.Field>
            <Button onClick={this.handleRemoveDeclaration(idx)}>Remove</Button>
          </Form.Group>
        ))}
        <button type="button" onClick={this.handleAddDeclaration} className="small">Add Declaration</button>
        <button>Incorporate</button>
      </Form>
      </Layout>
    )
  }
}

export default IncorporationForm;
