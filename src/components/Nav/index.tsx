import React, { useState, useCallback } from 'react'
import { FormattedMessage } from 'react-intl'
// import classnames from 'classnames'
// import { createStyles, makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'

import MenuItemLink from '~/lib/components/MenuItemLink'
import LocaleSelect from '~/components/LocaleSelect' // TODO

import classes from './classes.css'
import messages from './messages'

const Nav: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const openMenu = useCallback<React.MouseEventHandler<HTMLButtonElement>>((event) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const closeMenu = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={ openMenu }>
            <MenuIcon />
          </IconButton>
          <div className={ classes.Spacer } />
          <LocaleSelect
            classes={ {
              label: classes.LocaleSelectLabel,
              input: classes.LocaleSelectInput,
              selectIcon: classes.LocaleSelectSelectIcon,
              inputUnderline: classes.LocaleSelectInputUnderline,
            } }
            FormControlProps={ {
              variant: 'standard',
            } }
          />
        </Toolbar>
      </AppBar>
      <Menu open={ anchorEl !== null } anchorEl={ anchorEl } onClose={ closeMenu }>
        <MenuItemLink to="/" onClick={ closeMenu }>
          <FormattedMessage { ...messages.home } />
        </MenuItemLink>
        <MenuItemLink to="/counter" onClick={ closeMenu }>
          <FormattedMessage { ...messages.counter } />
        </MenuItemLink>
        <MenuItemLink to="/info" onClick={ closeMenu }>
          <FormattedMessage { ...messages.info } />
        </MenuItemLink>
        <MenuItemLink to="/reminder" onClick={ closeMenu }>
          <FormattedMessage { ...messages.reminder } />
        </MenuItemLink>
      </Menu>
    </>
  )
}

export default Nav
