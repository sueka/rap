import React from 'react'
import Helmet from 'react-helmet'
import { useIntl } from 'react-intl'

import Chessboard from '~/components/Chessboard'
import messages from './messages'

const ChessPage: React.FunctionComponent = () => {
  const { formatMessage } = useIntl()

  return (
    <>
      <Helmet title={ formatMessage(messages.chess) } />
      <Chessboard />
    </>
  )
}

export default ChessPage
