import { useCallback } from 'react'
import {
  useSaveCycleMutation,
  useSetCurrentTimeMutation,
  useStopTimerMutation,
  useTimerQuery,
  useToggleIsRunningMutation,
} from '../../generated/graphql'

export function useTimer() {
  const {
    data: {
      // @ts-ignore
      timer: {
        isTimerRunning,
        currentTimeInSeconds,
        timerDirection,
        selectedCategoryId,
        timeLimitInSeconds,
      },
    },
  } = useTimerQuery()
  const [setCurrentTimeMutation] = useSetCurrentTimeMutation()
  const [toggleIsRunning] = useToggleIsRunningMutation()
  const [stopTimer] = useStopTimerMutation()
  const [saveCycle] = useSaveCycleMutation()

  const setCurrentTime = useCallback(
    newTime => setCurrentTimeMutation({ variables: { timeInSeconds: newTime } }),
    []
  )

  return {
    isTimerRunning,
    selectedCategoryId,
    currentTimeInSeconds,
    setCurrentTime,
    timeLimitInSeconds,
    toggleIsRunning,
    stopTimer,
    timerDirection,
    saveCycle
  }
}
