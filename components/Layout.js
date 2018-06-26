import React  from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
export default (props) => {
  return (
    <Container fluid>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
        <link  rel="stylesheet" href="https://rawgit.com/BoomshakalakaNL/Cicero/master/styles/master.css" type="text/css"/>
        <title>Cicero Declaraties</title>
      </Head>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </Container>
  );
};
