import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Grid, Button, Form, Input, Message } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  state = {
    description: '',
    requestValue: '',
    recipientAddress: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    const campaign = Campaign(this.props.address);
    const { description, requestValue, recipientAddress } = this.state;
    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.createRequest(description, web3.utils.toWei(requestValue, 'ether'), recipientAddress)
        .send({ from: accounts[0] });
      Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };


  render(){
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>New request</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Form  onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                  <label>Description</label>
                  <Input
                  placeholder='Example: Batteries to buy'
                  value={this.state.description}
                  onChange={event => this.setState({description: event.target.value})}
                  />
                </Form.Field>
                  <Form.Field>
                  <label>Amount in Ether</label>
                  <Input
                    label='ether'
                    labelPosition='right'
                    placeholder='1.5'
                    value={this.state.requestValue}
                    onChange={event => this.setState({requestValue: event.target.value})}
                  />
                </Form.Field>
                  <Form.Field>
                  <label>Recipient address</label>
                  <Input
                    value={this.state.recipientAddress}
                    onChange={event => this.setState({recipientAddress: event.target.value})}
                    placeholder='0x0123456789abcdef0123456789ABCDEF01234567'
                  />
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage} />
                <Button loading={this.state.loading} type='submit' primary>Create!</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default RequestNew;
