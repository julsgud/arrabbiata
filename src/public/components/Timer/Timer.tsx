import React, { useEffect, useCallback } from 'react'
import { secondsToMinutesSecondsFormat, TIMER_DIRECTION } from './Timer.util'
import { useTimer } from '../../hooks/useTimer'
import { CategorySelect } from './CategorySelect/CategorySelect'

export const Timer = ({ user }) => {
  const {
    isTimerRunning,
    stopTimer,
    toggleIsRunning,
    setCurrentTime,
    currentTimeInSeconds,
    timerDirection,
    selectedCategoryId,
  } = useTimer()

  const resetTime = () => setCurrentTime(0)

  const updateCurrentTime = useCallback(() => {
    if (timerDirection === TIMER_DIRECTION.UP) {
      setCurrentTime(currentTimeInSeconds + 1)
    } else {
      setCurrentTime(currentTimeInSeconds - 1)
    }
  }, [currentTimeInSeconds])

  useEffect(() => {
    let interval = 0

    if (isTimerRunning) {
      if (currentTimeInSeconds === 20) {
        stopTimer()
        clearInterval(interval)
      } else {
        interval = setInterval(updateCurrentTime, 1000)
      }
    } else if (!isTimerRunning && currentTimeInSeconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isTimerRunning, currentTimeInSeconds])

  return (
    <>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      <CategorySelect selectedCategoryId={selectedCategoryId} categories={user.categories} />
      <br />
      <button onClick={toggleIsRunning}>{isTimerRunning ? 'Pause' : 'Play'}</button>
      <button onClick={resetTime}>Reset</button>
    </>
  )
}
