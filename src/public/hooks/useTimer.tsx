import { useCallback } from 'react'
import {
  useSaveCycleMutation,
  useSetCurrentTimeMutation,
  useStopTimerMutation,
  useTimerQuery,
  useToggleIsRunningMutation,
} from '../../generated/graphql'
import uuid from 'uuid'
import moment from 'moment'

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
  const [saveCycleMutation] = useSaveCycleMutation()

  const setCurrentTime = useCallback(
    newTime => setCurrentTimeMutation({ variables: { timeInSeconds: newTime } }),
    []
  )

  const saveCycle = useCallback(
    userId => {
      const cycle = {
        id: uuid.v4(),
        lengthInSeconds: currentTimeInSeconds,
        userId: userId,
        createdAt: moment().toISOString(),
        categoryIds: [selectedCategoryId],
        taskIds: [],
      }
      return saveCycleMutation({ variables: { ...cycle } })
    },
    [currentTimeInSeconds, selectedCategoryId]
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
    saveCycle,
  }
}
