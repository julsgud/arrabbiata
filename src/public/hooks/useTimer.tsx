import { useMutation } from '@apollo/react-hooks'
import { useTimerQuery } from '../../generated/graphql'
import { STOP_TIMER } from '../gql/mutations/stopTimer'
import { SET_CURRENT_TIME } from '../gql/mutations/setCurrentTime'
import { TOGGLE_IS_RUNNING } from '../gql/mutations/toggleIsRunning'

export function useTimer() {
  const [toggleIsRunning] = useMutation(TOGGLE_IS_RUNNING)
  const [setCurrentTimeInSeconds] = useMutation(SET_CURRENT_TIME)
  const [stopTimer] = useMutation(STOP_TIMER)
  const {
    data: {
      // @ts-ignore
      timer: { isRunning, currentTimeInSeconds },
    },
  } = useTimerQuery()

  const updateCurrentTime = newTime => setCurrentTimeInSeconds({ variables: { time: newTime } })

  return { isRunning, currentTimeInSeconds, toggleIsRunning, updateCurrentTime, stopTimer }
}
