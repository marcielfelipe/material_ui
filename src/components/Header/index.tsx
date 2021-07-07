import React from 'react';
import Router from 'next/router'

import useStylesUI from './styles'

import {AccountCircle} from '@material-ui/icons'
import {Menu , MenuItem, IconButton, Toolbar, AppBar} from '@material-ui/core'



export default function Header() {
  const stylesUi = useStylesUI()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    Router.push('/')
  };
  const handleProfile = () => {
    Router.push('/profile')
  };


  return (
      <AppBar position="static" color="secondary" className={stylesUi.navContainer}>
        <Toolbar className={stylesUi.nav}>
          <img src="/logo.svg" alt="Logo MfDev" className={stylesUi.logo}/>
            <AccountCircle 
              className={stylesUi.icon}
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleMenu}
              aria-controls="simple-menu"
              color="inherit"
              fontSize="large"
            />
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              className={stylesUi.menuItem}
            >
              <MenuItem  onClick={handleProfile}>Minha conta</MenuItem>
              <MenuItem onClick={handleSignOut}>Sair</MenuItem>
            </Menu>
        </Toolbar>
      </AppBar>
  );
}
