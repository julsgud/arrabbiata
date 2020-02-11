import React from 'react'
import { getMessageOutOfGraphqlError } from '../../../util/errorUtil'

interface GQLErrorProps {
  error: Error
}

export const GQLError: React.FC<GQLErrorProps> = ({ error }) => {
  return <> `Error: ${getMessageOutOfGraphqlError(error)}` </>
}
