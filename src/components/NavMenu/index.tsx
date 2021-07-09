import React from 'react';
import Router from 'next/router'

import useStylesUI from './styles'
import {Home, Person, MonetizationOn, Assignment, Group} from '@material-ui/icons'
import {Menu , MenuItem,MenuList, IconButton, Toolbar, AppBar} from '@material-ui/core'



export default function NavMenu() {
  const stylesUi = useStylesUI()

  return (
    <MenuList className={stylesUi.menu}>
      <MenuItem>
        <Home style={{marginRight:'10px'}}/>
        Home
      </MenuItem>
      <MenuItem>
        <Person style={{marginRight:'10px'}}/>
        Usuários
      </MenuItem>
      <MenuItem>
        <Group style={{marginRight:'10px'}}/>
        Clientes
      </MenuItem>
      <MenuItem>
        <Assignment style={{marginRight:'10px'}}/>
        Planos
      </MenuItem>
      <MenuItem>
        <MonetizationOn style={{marginRight:'10px'}}/>
        Vendas
      </MenuItem>
    </MenuList>
  );
}
