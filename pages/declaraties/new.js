import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class NewDeclaratie extends Component{
  state = {
    clientAddress: '',
    verzekeraarAddress: '',
    codes: [''],
    prijzen: [],
    datumdeclaratie: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
      event.preventDefault();
      this.setState({ loading: true, errorMessage: '' });
      try {
        /*const accounts = await web3.eth.getAccounts();
        await factory.methods.createDeclaratie(this.state.clientAddress, this.state.verzekeraarAddress)
        .send({
          from: accounts[0]
        });
        Router.pushRoute('/');
        */
        console.log(this.state.clientAddress, this.state.verzekeraarAddress, this.state.prijzen);
      }
      catch (err) {
        this.setState({ errorMessage: err.message });
      }
      this.setState({ loading: false });
    };


  render(){
    return(
      <Layout>
        <h3>Nieuwe declaratie</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Wallet address van Cliënt:</label>
            <Input value={ this.state.clientAddress}
            onChange={event => this.setState({clientAddress: event.target.value})}
          />
          </Form.Field>
          <Message error header="Oeps!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} type='submit' primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default NewDeclaratie;
