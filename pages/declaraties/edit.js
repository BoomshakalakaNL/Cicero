import React, { Component } from 'react';
import { Button, Form, Input, Message, Container, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import Declaration from "../../ethereum/declaration";
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
import { getDeclarationFromSummary, getGrandTotal, toNumberString } from '../../scripts/main.js';

class EditDeclaration extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const declaration = Declaration(props.query.address);
    const summary = await declaration.methods
      .getDeclaration()
      .call({ from: accounts[0] });
    return {
      accounts: accounts,
      address: props.query.address,
      declaration : declaration,
      summary: summary
    };
  }
  state = {
    insurance : this.props.summary[0],
    client: this.props.summary[1],
    dateDeclaration: this.props.summary[6],
    dateEndDeclaration: this.props.summary[7],
    isValidated: this.props.summary[8],
    errorMessage: '',
    loading: false,
    declarations: getDeclarationFromSummary(this.props.summary[3], this.props.summary[4], this.props.summary[5])
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
    this.setState({loading: true, errorMessage: ''});
    var codes = [];
    var amounts = [];
    var prices = [];
    this.state.declarations.forEach( function(element) {
      codes.push(element.code);
      amounts.push(element.amount);
      prices.push(toNumberString(parseFloat(element.price)).replace(".", "").replace(",", ""));
    });
    try {
      console.log("Transaction time now ...");
      await this.props.declaration.methods.editDeclaration(this.state.insurance, this.state.client, codes.join(";"), amounts.join(";"), prices.join(";"), this.state.dateDeclaration, this.state.dateEndDeclaration)
        .send({
          from: this.props.accounts[0]
        });
        console.log("Transaction succeeded");
      Router.replaceRoute(`/declaraties/${this.props.address}`);
    }
    catch (err) {
      console.log("Transaction failed ...");
      console.log(err);
      this.setState({errorMessage: err.message});
    }
    console.log("Submit done.");
    this.setState({loading: false});
  }

  render(){
    if (!this.state.isValidated) {
      return (
        <Layout>
          <div  className="display">
            <Container>
              <Grid verticalAlign='middle'>
                <Grid.Column floated='left'>
                  <h1>Bewerken declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          <Container>
            <Message info
              icon='help'
              content='In onderstaand formulier, kunt u als zorgverlener een declaratie aanpassen. Let op! Dit kan alleen wanneer de declaratie intern nog niet is gevalideerd. Om een nieuwe declaratie code toe te voegen, drukt op op de knop Code toevoegen. Wilt u deze of een andere code verwijderen dan drukt u op de knop Code verwijderen. Zijn de aanpassingen klaar dan kunt u op de knop verstuur klikken.'
            />
            <Form onSubmit={this.handleSubmit} loading={this.state.loading} error={!!this.state.errorMessage}>
              <Message error header="Oops!" content={this.state.errorMessage} />
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
          <div  className="display">
            <Container>
              <Grid verticalAlign='middle'>
                <Grid.Column floated='left'>
                  <h1>Bewerken declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1>
                </Grid.Column>
              </Grid>
            </Container>
          </div>
          <Container>
            <Message negative
              icon='warning sign'
              header='Oops ...'
              content='U probeert een declaratie te bewerken die intern is gevalideerd. Dit mag niet, foei.'
            />
          </Container>
        </Layout>
      );
    }

  }
}
export default EditDeclaration;
