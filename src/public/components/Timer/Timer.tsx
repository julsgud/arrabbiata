import React, { useEffect, useCallback, useMemo, useState } from 'react'
import {secondsToMinutesSecondsFormat, TIMER_DIRECTION} from './Timer.util'
import { useTimer } from '../../hooks/useTimer'

export const Timer = ({ userData }) => {
  const { isRunning, stopTimer, toggleIsRunning, setCurrentTime, currentTimeInSeconds } = useTimer()

  const updateCurrentTime = useCallback(newTime => {
    if (timerDirection === TIMER_DIRECTION.UP) {
      setCurrentTime(currentTimeInSeconds + 1)
    } else {

    }
  })

  useEffect(() => {
    let interval = 0

    if (isRunning) {
      if (currentTimeInSeconds === 20) {
        stopTimer()
        clearInterval(interval)
      } else {
        interval = setInterval(() => updateCurrentTime(), 1000)
      }
    } else if (!isRunning && currentTimeInSeconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning, currentTimeInSeconds])

  return (
    <>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      <button onClick={toggleIsRunning}>{isRunning ? 'Pause' : 'Play'}</button>
      <button
        onClick={e => {
          e.preventDefault()
          resetTime()
        }}
      >
        {' '}
        Reset{' '}
      </button>
    </>
  )
}
