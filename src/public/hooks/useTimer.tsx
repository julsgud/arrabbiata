import { useMutation, useQuery } from '@apollo/react-hooks'
import { GET_TIMER } from '../gql/queries/timer'
import { INCREASE_TIME } from '../gql/mutations/increaseTime'
import { RESET_TIME } from '../gql/mutations/resetTime'
import { TOGGLE_IS_RUNNING } from '../gql/mutations/toggleIsRunning'
import { STOP_TIMER } from '../gql/mutations/stopTimer'

export function useTimer() {
  const {
    data: {
      timer: { isRunning, currentTimeInSeconds },
    },
  } = useQuery(GET_TIMER)
  const [setCurrentTime] = useMutation(RESET_TIME)
  const [toggleIsRunning] = useMutation(TOGGLE_IS_RUNNING)
  const [stopTimer] = useMutation(STOP_TIMER)

  const updateCurrentTime = () =>
  {}

  return { isRunning, currentTimeInSeconds }
}
