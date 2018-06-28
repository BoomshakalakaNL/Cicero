import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Icon, Button, Card, Grid, Image, Message, Form, Container } from "semantic-ui-react";
import Declaration from "../../ethereum/declaration";
import web3 from "../../ethereum/web3";
import { Link } from "../../routes";
import { getClientName, getProductName, getOtherInformation} from '../../scripts/main.js';

class DeclarationShow extends Component {
  static async getInitialProps(props) {
    const accounts = await web3.eth.getAccounts();
    const declaration = Declaration(props.query.address);
    const summary = await declaration.methods
      .getDeclaration()
      .call({ from: accounts[0] });
    return {
      address: props.query.address,
      summary: summary
    };
  }
  state = {
    errorMessage: "",
    client: this.props.summary[1],
    insurance: this.props.summary[0],
    careAdminOff: this.props.summary[2],
    careCodes: this.props.summary[3].split(";"),
    careAmounts: this.props.summary[4].split(";"),
    carePrices: this.props.summary[5].split(";"),
    dateDeclaration: this.props.summary[6],
    dateEndDeclaration: this.props.summary[7],
    isValidated: this.props.summary[8],
    isAccepted: this.props.summary[9],
    loading: false,
    grandTotal: 0
  };


  renderCards() {
    var Cards = [];
    var grandTotaal;
    for (var i = 0; i < this.state.careCodes.length; i++) {
      var a = this.state.carePrices[i];
      a = parseInt(
        this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2)
      );
      this.state.carePrices[i] = [
        this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2),
        ",",
        this.state.carePrices[i].slice(this.state.carePrices[i].length - 2)
      ].join("");
      var totalPrice = parseFloat(this.state.careAmounts[i] * a).toFixed(2);
      this.state.grandTotal += parseInt(totalPrice);
      Cards.push(
        <Card>
          <Card.Content>
            <Card.Header>{this.state.careCodes[i]}</Card.Header>
            <Card.Meta>
              {this.state.careAmounts[i]} x €{this.state.carePrices[i]}
              <br/>
              {getProductName(this.state.careCodes[i])}
            </Card.Meta>
            <Card.Description>
              <h3>Totaal: €{totalPrice}</h3>
            </Card.Description>
          </Card.Content>
        </Card>
      );
    }
    return Cards;
  }

  render() {
    return (
      <Layout>
      <div  class="display">
        <Container>
          <Grid verticalAlign='middle'>
            <Grid.Column floated='left' width={9}>
              <h1>Details declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1>
            </Grid.Column>
            {this.state.isValidated ? null : (
            <Grid.Column floated='right' style={{textAlign: 'right'}} width={1}>
              <Link route={`/declaraties/${this.props.address}/edit`}>
                <a><Icon color='purple' name="edit" size='big'/></a>
              </Link>
            </Grid.Column>
            ) }
          </Grid>
        </Container>
      </div>
        <Container>
        {/* <p>Declaratie address: </p> */}
        <h2>Overzicht geleverde zorg</h2>
        <br />
        <Card.Group itemsPerRow={6} centered>
          {this.renderCards()}
        </Card.Group>
        <br />
        <Grid style={{border: '1px solid #831b78', margin: '0 10px'}}>
          <Grid.Row>
            <Grid.Column width={12}>
              <h3>Extra informatie</h3>
              <p>Client naam: <b>{getClientName(this.state.client)}</b></p>
              <p>Client address: {this.state.client}</p>
              <p>Verzekeraar address: {this.state.insurance} - <b>{getOtherInformation(this.state.insurance)}</b></p>
              <p>Zorgkantoor address: {this.state.careAdminOff}- <b>{getOtherInformation(this.state.careAdminOff)}</b></p>
              <p>
                Goedgekeurd door Zorgkantoor:{" "}
                {this.state.isValidated.toString()}
              </p>
              <p>Goedgekeurd: {this.state.isAccepted.toString()} </p>
            </Grid.Column>
            <Grid.Column width={4}>
              <h3>Totaalprijs Declaratie</h3>
              <h1>€{this.calcGrandTotal().grandTotal}</h1>
              <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                {this.state.isValidated ? (
                  this.state.isAccepted ? null : (
                    <Button onClick={this.goedkeuren} primary>
                      Goedkeuren
                    </Button>
                  )
                ) : (
                  <Button onClick={this.valideren} secondary>
                    Valideren
                  </Button>
                )}

                <Message error content={this.state.errorMessage} />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
      </Layout>
    );
  }

  goedkeuren = async event => {
    event.preventDefault();
    const declaration = Declaration(this.props.address);
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await declaration.methods.accept().send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  calcGrandTotal(){
    var grandTotal = 0;
    for (var i = 0; i < this.state.careCodes.length; i++) {
      var a = this.state.carePrices[i];
      a = parseInt(
        this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2)
      );
      this.state.carePrices[i] = [
        this.state.carePrices[i].slice(0, this.state.carePrices[i].length - 2),
        ",",
        this.state.carePrices[i].slice(this.state.carePrices[i].length - 2)
      ].join("");
      var totalPrice = parseFloat(this.state.careAmounts[i] * a).toFixed(2);
      grandTotal += parseInt(totalPrice);

    }
    return {
      grandTotal
    };
  }

  valideren = async event => {
    event.preventDefault();
    const declaration = Declaration(this.props.address);
    this.setState({ loading: true, errorMessage: ""});
    try {
      const accounts = await web3.eth.getAccounts();
      await declaration.methods.validate().send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
}
/*
addressen: client, verzekeraar, zorgkantoor
dateDeclaration
dateEndDeclaration
*/
export default DeclarationShow;

{
  /* <Button loading={this.state.loading} onClick={this.load} primary>
          Load
        </Button> */
}

// load = async event => {
//   const accounts = await web3.eth.getAccounts();
//   this.setState({ loading: true, errorMessage: "" });
//   try {
//     const declaration = Declaration(this.props.address);
//     const summary = await declaration.methods
//       .getDeclaration()
//       .call({ from: accounts[0] });
//     this.setState({
//       insurance: summary[0],
//       client: summary[1],
//       careAdminOff: summary[2],
//       careCodes: summary[3].split(";"), // .join(";")
//       careAmounts: summary[4].split(";"),
//       carePrices: summary[5].split(";"), // .join(";")
//       dateDeclaration: summary[6],
//       dateEndDeclaration: summary[7],
//       isValidated: summary[8],
//       isAccepted: summary[9]
//     });
//   } catch (err) {
//     console.log(err.message);
//     this.setState({ errorMessage: err.message });
//   }
//   this.setState({ loading: false });
//   console.log(this.state);
// };

// this.state.carePrices[i] = parseFloat(this.state.carePrices[i]).toFixed(2);
// var b = ',';
// var pos = a.length-2;
// var output = c
