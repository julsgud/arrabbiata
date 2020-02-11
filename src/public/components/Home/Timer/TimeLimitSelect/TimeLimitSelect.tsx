import React from 'react'
import { useSetTimeLimitMutation } from '../../../../../generated/graphql'
import { Row } from '../CategorySelect/CategorySelect'
import { TIMER_LIMITS_IN_SECONDS } from '../Timer.util'

interface TimeLimitSelectProps {
  timeLimitInSeconds: number
}

export const TimeLimitSelect: React.FC<TimeLimitSelectProps> = ({ timeLimitInSeconds }) => {
  const [setTimeLimit] = useSetTimeLimitMutation()

  return (
    <Row>
      <div> Time Limit </div>
      <select
        value={timeLimitInSeconds}
        onChange={e => setTimeLimit({ variables: { timeLimit: parseInt(e.target.value) } })}
      >
        {TIMER_LIMITS_IN_SECONDS.length &&
          TIMER_LIMITS_IN_SECONDS.map(limit => (
            <option key={limit.label + limit.value} value={limit.value}>
              {limit.label}
            </option>
          ))}
      </select>
    </Row>
  )
}
