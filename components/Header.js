import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{marginTop: '10px'}}>
      <Link route='/'>
        <a className='item'>Cicero Declaraties</a>
      </Link>

      <Menu.Menu position="right">
        <Link route='/'>
          <a className='item'>Declaraties</a>
        </Link>
        <Link route='/declaraties/new'>
          <a className='item'><Icon name="add square"/></a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
