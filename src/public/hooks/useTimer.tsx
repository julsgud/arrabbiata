import { useCallback } from 'react'
import {
  useResetCycleMutation,
  useSaveCycleMutation,
  useSetCurrentTimeMutation,
  useStopTimerMutation,
  useTimerQuery,
  useToggleIsRunningMutation,
} from '../../generated/graphql'
import moment from 'moment'

export function useTimer() {
  const {
    data: {
      // @ts-ignore
      timer: {
        currentTimeInSeconds,
        isTimerRunning,
        notes,
        selectedCategoryId,
        selectedTaskId,
        timerDirection,
        timeLimitInSeconds,
      },
    },
  } = useTimerQuery()
  const [resetCycle] = useResetCycleMutation()
  const [setCurrentTimeMutation] = useSetCurrentTimeMutation()
  const [toggleIsRunning] = useToggleIsRunningMutation()
  const [stopTimer] = useStopTimerMutation()
  const [saveCycleMutation] = useSaveCycleMutation()

  const setCurrentTime = useCallback(
    newTime => setCurrentTimeMutation({ variables: { timeInSeconds: newTime } }),
    []
  )

  const saveCycle = useCallback(() => {
    const cycle = {
      lengthInSeconds: currentTimeInSeconds,
      createdAt: moment().toISOString(),
      categoryIds: [selectedCategoryId],
      taskIds: [],
      notes,
    }
    return saveCycleMutation({ variables: { ...cycle } }).then(() => resetCycle())
  }, [currentTimeInSeconds, selectedCategoryId])

  return {
    currentTimeInSeconds,
    isTimerRunning,
    notes,
    saveCycle,
    selectedCategoryId,
    selectedTaskId,
    setCurrentTime,
    stopTimer,
    timerDirection,
    timeLimitInSeconds,
    toggleIsRunning,
  }
}
