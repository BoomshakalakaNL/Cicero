import React  from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
export default (props) => {
  return (
    <Container>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
        <link  rel="stylesheet" href="https://raw.githubusercontent.com/BoomshakalakaNL/Cicero/master/styles/master.css"/>
      </Head>
      <Header></Header>
      {props.children}
    </Container>
  );
};
