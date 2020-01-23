import React, { useEffect, useState } from 'react'
import { secondsToMinutesSecondsFormat } from './Timer.util'
import gql from 'graphql-tag'
import { useMutation, useQuery } from '@apollo/react-hooks'

const TWENTY_FIVE_MINUTES_IN_SECONDS = 1500
const FIVE_MINUTES_IN_SECONDS = 300

const TOGGLE_IS_RUNNING = gql`
  mutation ToggleIsRunning($isRunning: Boolean) {
    toggleIsRunning(isRunning: $isRunning) @client
  }
`

export const GET_IS_RUNNING = gql`
  query GetTimer {
    timer @client {
      isRunning 
      isOnCycle
    }
  }
`

export function Timer() {
  const [currentlyOnWorkCountdown, setCurrentlyOnWorkCountdown] = useState(true)
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(TWENTY_FIVE_MINUTES_IN_SECONDS)
  const {
    data: {
      timer: { isRunning, isOnCycle },
    },
  } = useQuery(GET_IS_RUNNING)
  const [toggleIsRunning] = useMutation(TOGGLE_IS_RUNNING)
  const [workCount, setWorkCount] = useState(0)
  const [breakCount, setBreakCount] = useState(0)

  console.log(toggleIsRunning)
  console.log(isRunning)
  console.log(isOnCycle)

  function toggle() {
    toggleIsRunning()
  }

  function reset() {
    setCurrentTimeInSeconds(
      currentlyOnWorkCountdown ? TWENTY_FIVE_MINUTES_IN_SECONDS : FIVE_MINUTES_IN_SECONDS
    )
    toggleIsRunning()
  }

  function startBreakCountdown() {
    setWorkCount(workCount + 1)
    setCurrentlyOnWorkCountdown(false)
    setCurrentTimeInSeconds(FIVE_MINUTES_IN_SECONDS)
  }

  function startWorkCountdown() {
    setBreakCount(breakCount + 1)
    setCurrentlyOnWorkCountdown(true)
    setCurrentTimeInSeconds(TWENTY_FIVE_MINUTES_IN_SECONDS)
  }

  useEffect(() => {
    let interval = 0
    if (isRunning) {
      if (currentTimeInSeconds === 0) {
        currentlyOnWorkCountdown ? startBreakCountdown() : startWorkCountdown()
      }
      interval = setInterval(() => {
        setCurrentTimeInSeconds(currentTimeInSeconds => currentTimeInSeconds - 1)
      }, 1000)
    } else if (!isRunning && currentTimeInSeconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning, currentTimeInSeconds])

  return (
    <>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)}
      <br />
      {'Done: ' + workCount}
      <br />
      {'Breaks: ' + breakCount}
      <br />
      <button onClick={toggle}>{isRunning ? 'Pause' : 'Play'}</button>
      <button onClick={reset}> Reset </button>
    </>
  )
}
