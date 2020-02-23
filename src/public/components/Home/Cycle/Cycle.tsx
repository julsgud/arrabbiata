import React, { useEffect, useState, useCallback } from 'react'
import {
  isTimerDone,
  isTimerPaused,
  secondsToHoursMinutesSecondsFormat,
  TIMER_DIRECTION,
} from './Cycle.util'
import { useCycle } from '../../../hooks/useCycle'
import { User } from '../../../../generated/graphql'
import { TimeLimitSelect } from './TimeLimitSelect/TimeLimitSelect'
import { Notes } from './Notes/Notes'
import { displayCycleFinishedNotification } from '../../../util/notificationsUtil'
import { CycleCategorySelect } from './CycleCategorySelect/CycleCategorySelect'
import { CycleTaskSelect } from './CycleTaskSelect/CycleTaskSelect'

interface CycleProps {
  user: User
}

export const Cycle: React.FC<CycleProps> = ({ user }) => {
  const [quickAddEnabled, setQuickAddEnabled] = useState(false)
  const {
    currentTimeInSeconds,
    isTimerRunning,
    notes,
    quickAddCycle,
    saveCycle,
    selectedCategoryId,
    selectedTaskId,
    setCurrentTime,
    stopTimer,
    timerDirection,
    timeLimitInSeconds,
    toggleIsRunning,
  } = useCycle()

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
        displayCycleFinishedNotification(
          user.categories.find(category => category.id === selectedCategoryId).categoryName,
          timeLimitInSeconds
        )
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
  }, [isTimerRunning, currentTimeInSeconds, timeLimitInSeconds, user, selectedCategoryId])

  return (
    <>
      {secondsToHoursMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      <CycleCategorySelect selectedCategoryId={selectedCategoryId} categories={user.categories} />
      <CycleTaskSelect
        selectedCategoryId={selectedCategoryId}
        selectedTaskId={selectedTaskId}
        tasks={user.tasks}
      />
      <TimeLimitSelect timeLimitInSeconds={timeLimitInSeconds} />
      <Notes notes={notes} />
      <br />
      {!quickAddEnabled && (
        <>
          <button onClick={() => toggleIsRunning()}>
            {isTimerRunning ? 'Pause' : currentTimeInSeconds === 0 ? 'Start' : 'Continue'}
          </button>
          <button onClick={resetTime}>Reset</button>
        </>
      )}
      <button
        disabled={quickAddEnabled ? false : currentTimeInSeconds === 0}
        onClick={quickAddEnabled ? quickAddCycle : saveCycle}
      >
        Save
      </button>
      <>
        <input
          id="quickAdd"
          type="checkbox"
          checked={quickAddEnabled}
          onClick={() => setQuickAddEnabled(!quickAddEnabled)}
        />
        <label id="quickAdd"> Quick Add </label>
      </>
    </>
  )
}
