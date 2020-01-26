import { useQuery } from '@apollo/react-hooks'
import { GET_TIMER } from '../gql/queries/timer'
import {
  useSetCurrentTimeMutation,
  useStopTimerMutation,
  useToggleIsRunningMutation,
} from '../../generated/graphql'

export function useTimer() {
  const {
    data: {
      timer: { isTimerRunning, currentTimeInSeconds, timerDirection },
    },
  } = useQuery(GET_TIMER)
  const [setCurrentTime] = useSetCurrentTimeMutation()
  const [toggleIsRunning] = useToggleIsRunningMutation()
  const [stopTimer] = useStopTimerMutation()

  return { isRunning, currentTimeInSeconds, setCurrentTime, toggleIsRunning, stopTimer }
}
