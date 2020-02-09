import React, { useEffect, useCallback } from 'react'
import {
  isTimerDone,
  isTimerPaused,
  secondsToMinutesSecondsFormat,
  TIMER_DIRECTION,
} from './Timer.util'
import { useTimer } from '../../hooks/useTimer'
import { CategorySelect } from './CategorySelect/CategorySelect'
import { User } from '../../../generated/graphql'
import { TimeLimitSelect } from './TimeLimitSelect/TimeLimitSelect'
import { TaskSelect } from './TaskSelect/TaskSelect'
import { Notes } from './Notes/Notes'

interface TimerProps {
  user: User
}

export const Timer: React.FC<TimerProps> = ({ user }) => {
  const {
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
  } = useTimer()

  const resetTime = () => setCurrentTime(0)

  const updateCurrentTime = useCallback(() => {
    if (timerDirection !== TIMER_DIRECTION.UP) {
      setCurrentTime(currentTimeInSeconds - 1)
    } else {
      setCurrentTime(currentTimeInSeconds + 1)
    }
  }, [currentTimeInSeconds])

  useEffect(() => {
    let interval = 0

    if (isTimerRunning) {
      if (isTimerDone(timeLimitInSeconds, currentTimeInSeconds, timerDirection)) {
        stopTimer()
        clearInterval(interval)
      } else {
        interval = setInterval(updateCurrentTime, 1000)
      }
    } else if (
      isTimerPaused(timeLimitInSeconds, isTimerRunning, currentTimeInSeconds, timerDirection)
    ) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isTimerRunning, currentTimeInSeconds, timeLimitInSeconds])

  return (
    <>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      <CategorySelect selectedCategoryId={selectedCategoryId} categories={user.categories} />
      <TaskSelect selectedTaskId={selectedTaskId} tasks={user.tasks} />
      <TimeLimitSelect timeLimitInSeconds={timeLimitInSeconds} />
      <Notes notes={notes} />
      <br />
      <button onClick={() => toggleIsRunning()}>
        {isTimerRunning ? 'Pause' : currentTimeInSeconds === 0 ? 'Start' : 'Continue'}
      </button>
      <button onClick={resetTime}>Reset</button>
      {currentTimeInSeconds !== 0 && <button onClick={saveCycle}>End</button>}
    </>
  )
}
