import AppBar from '@mui/material/AppBar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { useRecoilState } from 'recoil'
import { makeStyles } from 'tss-react/mui'

import notificationsState from '~/atoms/notificationsState'
import LocaleSelect from '~/components/LocaleSelect' // TODO
import NotificationList from '~/components/NotificationList'
import Spacer from '~/components/Spacer'
import ToggleDarkButton from '~/components/ToggleDarkButton'
import IntlProviderContext from '~/contexts/IntlProviderContext'
import useRefsMerged from '~/hooks/useRefsMerged'
import useScreen from '~/hooks/useScreen'
import classes from './classes.css'
import messages from './messages'

interface Props {
  onMenuIconButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

interface StyleProps {
  topAppbarHeight?: number
}

const useStyles = makeStyles<StyleProps>()<'Offset'>((_theme, { topAppbarHeight }) => ({
  Offset: {
    height: topAppbarHeight,
  },
}))

const TopAppbar = React.forwardRef<HTMLDivElement, Props>(({ onMenuIconButtonClick }, forwardedRef) => {
  const { width: screenWidth } = useScreen()
  const { dir } = useContext(IntlProviderContext)
  const [height, setHeight] = useState<number | null>(null)

  const ownRef = useCallback<React.RefCallback<HTMLDivElement>>((node) => {
    // To silence the ESLint rule react-hooks/exhaustive-deps
    if (screenWidth === null) {
      return
    }

    const rect = node?.getBoundingClientRect()

    if (rect === undefined) {
      return
    }

    setHeight(rect.height)
  }, [screenWidth])

  const ref = useRefsMerged(forwardedRef, ownRef)

  const { classes: jssClasses } = useStyles({ topAppbarHeight: height ?? undefined })

  const [notifications] = useRecoilState(notificationsState)
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const anchor = React.useRef<HTMLButtonElement | null>(null)

  const handleNotificationsShow = useCallback<React.MouseEventHandler<HTMLButtonElement>>(() => {
    if (notifications.length !== 0) {
      setNotificationsOpen(true)
    }
  }, [notifications])

  const handleNotificationsClose = useCallback(() => {
    setNotificationsOpen(false)
  }, [])

  useEffect(() => {
    if (notifications.length === 0) {
      setNotificationsOpen(false)
    }
  }, [notifications])

  return (
    <>
      <AppBar position="fixed" ref={ ref }>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={ onMenuIconButtonClick } size="large">
            <MenuIcon />
          </IconButton>
          <Spacer />
          <Box mx={ 1 }>
            <ToggleDarkButton />
            { 'Notification' in globalThis && <>
              <Tooltip
                title={ <FormattedMessage { ...messages.showNotifications } /> }
                disableFocusListener={ notifications.length === 0 }
                disableHoverListener={ notifications.length === 0 }
                disableTouchListener={ notifications.length === 0 }
              >
                <span className={ classes.TooltipWrapper }>
                  <IconButton color="inherit" onClick={ handleNotificationsShow } ref={ anchor } disabled={ notifications.length === 0 } size="large">
                    <Badge color="secondary" badgeContent={ notifications.length }>
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </span>
              </Tooltip>
              { notifications.length !== 0 && <Popover
                open={ notificationsOpen }
                onClose={ handleNotificationsClose }
                anchorEl={ anchor.current }
                anchorOrigin={ {
                  horizontal: dir === 'ltr' ? 'right' : 'left',
                  vertical: 'bottom',
                } }
                transformOrigin={ {
                  horizontal: dir === 'ltr' ? 'right' : 'left',
                  vertical: 'top',
                } }
              >
                <NotificationList />
              </Popover> }
            </> }
          </Box>
          <LocaleSelect
            classes={ {
              label: classes.LocaleSelectLabel,
              input: classes.LocaleSelectInput,
              selectIcon: classes.LocaleSelectSelectIcon,
              inputUnderline: classes.LocaleSelectInputUnderline,
            } }
            FormControlProps={ {
              variant: 'filled',
            } }
          />
        </Toolbar>
      </AppBar>
      <div className={ jssClasses.Offset } />
    </>
  )
})

export default TopAppbar
