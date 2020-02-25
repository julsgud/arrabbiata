import React, { ReactNode } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { CYCLES } from '../../../gql/queries/cycles'
import { GQLError } from '../../common/GqlError/GqlError'

interface CycleFetcherProps {
  children: ReactNode
  startDate: string
  endDate: string
  categoryId: string
  taskId: string
}

export const CycleFetcher: React.FC<CycleFetcherProps> = ({
  children,
  startDate,
  endDate,
  categoryId,
  taskId,
}) => {
  const { loading, error, data } = useQuery(CYCLES, {
    variables: {
      startDate,
      endDate,
      categoryId,
      taskId,
    },
  })

  if (loading) return <> Loading... </>
  if (error) return <GQLError error={error} />

  console.log(data)

  return <div>{children}</div>
}
