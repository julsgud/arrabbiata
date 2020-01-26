import { useCallback } from 'react'
import {
  useSetCurrentTimeMutation,
  useStopTimerMutation,
  useTimerQuery,
  useToggleIsRunningMutation,
} from '../../generated/graphql'

export function useTimer() {
  const {
    data: {
      timer: { isTimerRunning, currentTimeInSeconds, timerDirection },
    },
  } = useTimerQuery()
  const [setCurrentTimeMutation] = useSetCurrentTimeMutation()
  const [toggleIsRunning] = useToggleIsRunningMutation()
  const [stopTimer] = useStopTimerMutation()

  const setCurrentTime = useCallback(
    newTime => setCurrentTimeMutation({ variables: { timeInSeconds: newTime } }),
    []
  )

  return {
    isTimerRunning,
    currentTimeInSeconds,
    setCurrentTime,
    toggleIsRunning,
    stopTimer,
    timerDirection,
  }
}
