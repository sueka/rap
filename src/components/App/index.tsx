import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Redirect, Switch, useLocation } from 'react-router'

import Route from '~/lib/components/Route'

export const HomePage = React.lazy(() => import(/* webpackChunkName: "home" */ './HomePage'))
export const ChessPage = React.lazy(() => import(/* webpackChunkName: "chess" */ './ChessPage'))
export const CounterPage = React.lazy(() => import(/* webpackChunkName: "counter" */ './CounterPage'))
export const InfoPage = React.lazy(() => import(/* webpackChunkName: "info" */ './InfoPage'))
export const PaintPage = React.lazy(() => import(/* webpackChunkName: "paint" */ './PaintPage'))
export const ReminderPage = React.lazy(() => import(/* webpackChunkName: "reminder" */ './ReminderPage'))
export const NoMatch = React.lazy(() => import(/* webpackChunkName: "noMatch" */ './NoMatch'))

const App: React.FC = () => {
  const location = useLocation()

  if (location.pathname === '/' && location.hash !== '') {
    const pathname = /^#(.*)$/.exec(location.hash)?.[1]

    // TODO: Shape-check

    return <Redirect to={ { pathname } } />
  }

  return (
    <Switch>
      <Route exact strict sensitive path="/" component={ HomePage } />
      <Route exact strict sensitive path="/chess" component={ ChessPage } />
      <Route exact strict sensitive path="/counter" component={ CounterPage } />
      <Route exact strict sensitive path="/info" component={ InfoPage } />
      <Route exact strict sensitive path="/paint" component={ PaintPage } />
      <Route exact strict sensitive path="/reminder" component={ ReminderPage } />
      <Route path="*" component={ NoMatch } />
    </Switch>
  )
}

export default hot(App)
