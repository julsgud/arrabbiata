import React, { useEffect, useCallback, useMemo, useState } from 'react'
import { secondsToMinutesSecondsFormat } from './Timer.util'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { TOGGLE_IS_RUNNING } from '../../gql/mutations/toggleIsRunning'
import { STOP_TIMER } from '../../gql/mutations/stopTimer'
import { GET_TIMER } from '../../gql/queries/timer'
import { INCREASE_TIME } from '../../gql/mutations/increaseTime'
import { RESET_TIME } from '../../gql/mutations/resetTime'

export const Timer = useMemo(() => {


  useEffect(() => {
    let interval = 0

    if (isRunning) {
      if (currentTimeInSeconds === 20) {
        stopTimer()
        clearInterval(interval)
      } else {
        interval = setInterval(increaseTime, 1000)
      }
    } else if (!isRunning && currentTimeInSeconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRunning])


  return (
    <>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      <button onClick={toggleIsRunning}>{isRunning ? 'Pause' : 'Play'}</button>
      <button onClick={e => {
        e.preventDefault()
        resetTime()
      }}> Reset </button>
    </>
  )
})
