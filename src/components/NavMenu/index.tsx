import React from 'react';
import Router from 'next/router'

import useStylesUI from './styles'

import {AccountCircle} from '@material-ui/icons'
import {Menu , MenuItem,MenuList, IconButton, Toolbar, AppBar} from '@material-ui/core'



export default function NavMenu() {
  const stylesUi = useStylesUI()

  return (
    <MenuList className={stylesUi.menu}>
      <MenuItem>
        Cadastrar cliente
      </MenuItem>
      <MenuItem>Gerar fatura</MenuItem>
      <MenuItem>Vender</MenuItem>
    </MenuList>
  );
}
