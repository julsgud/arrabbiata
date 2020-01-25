import React, { useEffect } from 'react'
import { secondsToMinutesSecondsFormat } from './Timer.util'
import { useTimer } from '../../hooks/useTimer'

export function Timer() {
  const { isRunning, currentTimeInSeconds, toggleIsRunning, updateCurrentTime, stopTimer } = useTimer()
  const reset = () => updateCurrentTime(0)

  useEffect(() => {
    let interval = 0

    if (isRunning && currentTimeInSeconds !== 20) {
      interval = setInterval(() => updateCurrentTime(currentTimeInSeconds + 1), 1000)
    } else if (isRunning && currentTimeInSeconds === 20) {
      stopTimer()
      clearInterval(interval)
    } else if (!isRunning && currentTimeInSeconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning, currentTimeInSeconds, updateCurrentTime])

  return (
    <>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      <button onClick={() => toggleIsRunning()}>{isRunning ? 'Pause' : 'Play'}</button>
      <button onClick={reset}> Reset </button>
    </>
  )
}
