import React from 'react'
import { getMessageOutOfGraphqlError } from '../../util/errorUtil'

export function GqlError({ error }) {
  return <div> `Error: ${getMessageOutOfGraphqlError(error)}` </div>
}
