import React, { Component } from 'react';
import Declaration from "../../ethereum/declaration";
import factory from '../../ethereum/factory';
import web3 from "../../ethereum/web3";
import { Card, Button, Container, Grid, Icon, Message, Form } from 'semantic-ui-react';
import { Link } from '../../routes.js';
import Layout from '../../components/Layout.js';
import { Router } from '../../routes';
import { getDeclarationFromSummary, getGrandTotal, getProductName, getOtherInformation, getClientName } from '../../scripts/main';

class ShowDeclaration extends Component{
    static async getInitialProps(props) {
        return {address: props.query.address};
    }

    async componentDidMount(){
        this.setState({errorMessage: ''});
        const accounts = await web3.eth.getAccounts();
        const declaration = new Declaration(this.props.address);
        try {
            const summary = await declaration.methods.getDeclaration().call({from: accounts[0]});
            this.setState({
                data: {
                    client: summary[1],
                    insurance: summary[0],
                    careAdminOff: summary[2],
                    declarations: getDeclarationFromSummary(summary[3], summary[4], summary[5]),
                    dateDeclaration: summary[6],
                    dateEndDeclaration: summary[7],
                    isValidated: summary[8],
                    isAccepted: summary[9],
                    grandTotal: getGrandTotal(summary[4], summary[5])
                }
            });
            console.log(this.state.data);
        }
        catch (err)
        {
            this.setState({errorMessage: err.message});
            console.log(err.message);
        } 
    }

    state = {
        errorMessage: 'Loading ...',
        errorFormMessage: '',
        loading: false,
        data: {}
    };

    renderCards(){
        try{
            const items = this.state.data.declarations.map(element => {
                var totaal = (element.price * element.amount).toFixed(2);
                return {
                  header: element.code+": "+getProductName(element.code),
                  description: <h3>{"€"+totaal}</h3>,
                  meta: element.amount+" x €"+element.price
                };
              });
            return <Card.Group itemsPerRow={6} class='cicero-card' items={items} />;
        }
        catch(err){
            return null;
        }
    }

    accorderen = async event => {
        event.preventDefault();
        const declaration = Declaration(this.props.address);
        this.setState({ loading: true, errorFormMessage: "" });
        try {
            const accounts = await web3.eth.getAccounts();
            await declaration.methods.accept().send({
                from: accounts[0]
            });
            Router.pushRoute(`/declaraties`);
        } catch (err) {
            this.setState({ errorFormMessage: err.message });
        }
        this.setState({ loading: false });
    };

    valideren = async event => {
        event.preventDefault();
        const declaration = Declaration(this.props.address);
        this.setState({ loading: true, errorMessage: ""});
        try {
            const accounts = await web3.eth.getAccounts();
            await declaration.methods.validate().send({
                from: accounts[0]
            });
            Router.pushRoute(`/declaraties`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false });
    };
    


    extraInformation(){
        if (this.state.data != []){
            try{
                return (
                    <Container style={{border: '1px solid #831b78', marginTop: '30px', padding: '15px'}}>
                        <Grid divided>
                            <Grid.Row>
                                <Grid.Column width={13}>
                                    <h3>Extra informatie</h3>
                                    <p>
                                        <b>Client</b> :                             {getClientName(this.state.data.client)} - {this.state.data.client}
                                        <br/><b>Verzekeraar</b> :                   {getOtherInformation(this.state.data.insurance)} - {this.state.data.insurance}
                                        <br/><b>Zorgkantoor</b> :                   {getOtherInformation(this.state.data.careAdminOff)} - {this.state.data.careAdminOff}
                                        <br/><b>Goedgekeurd door Zorgkantoor</b> :  {this.state.data.isValidated.toString()}
                                        <br/><b>Geaccordeerd</b> :                  {this.state.data.isAccepted.toString()}
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={3}>
                                    <h3>Totaalprijs Declaratie</h3>
                                    <h1>€{this.state.data.grandTotal}</h1>
                                    <Form error={!!this.state.errorFormMessage} loading={this.state.loading}>
                                        {this.state.data.isValidated ? (this.state.data.isAccepted ? null : (<Button fluid primary onClick={this.accorderen}>Accorderen</Button>)) : (<Button fluid primary onClick={this.valideren}>Valideren</Button>)}
                                        <Message error content={this.state.errorFormMessage} />                                        
                                    </Form>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                );
            }
            catch (err){
                return null;
            }
        } else {
            return null;
        }
    }

    render(){
        return (
            <Layout>
                <div class="display">
                    <Container>
                    <Grid verticalAlign='middle'>
                        <Grid.Column floated='left' width={9}>
                        <h1>Details declaratie: <span style={{color: '#58585a'}}>{this.props.address}</span></h1>
                        </Grid.Column>
                        {this.state.data.isValidated ? null : (
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
                    {(this.state.errorMessage == "") ? null : (<Message info icon='help'  content={this.state.errorMessage} />)}
                    <h3>Overzicht declaratie</h3>
                    {this.renderCards()}   
                </Container>
                {this.extraInformation()}
            </Layout>
        );
    }
}

export default ShowDeclaration;