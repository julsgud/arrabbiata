import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { secondsToMinutesSecondsFormat } from './Timer.util'

const Container = styled.div`
  font-size: 2rem;
  display: flex;
  flex-flow: column nowrap;
  & > button {
    font-size: 2rem;
  }
`

const TWENTY_FIVE_MINUTES_IN_SECONDS = 1500
const FIVE_MINUTES_IN_SECONDS = 300

export function Timer() {
  const [currentlyOnWorkCountdown, setCurrentlyOnWorkCountdown] = useState(true)
  const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(5)
  const [isActive, setIsActive] = useState(false)
  const [workCount, setWorkCount] = useState(0)
  const [breakCount, setBreakCount] = useState(0)

  function toggle() {
    setIsActive(!isActive)
  }

  function reset() {
    setCurrentTimeInSeconds(
      currentlyOnWorkCountdown ? TWENTY_FIVE_MINUTES_IN_SECONDS : FIVE_MINUTES_IN_SECONDS
    )
    setIsActive(false)
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
    if (isActive) {
      if (currentTimeInSeconds === 0) {
        currentlyOnWorkCountdown ? startBreakCountdown() : startWorkCountdown()
      }
      interval = setInterval(() => {
        setCurrentTimeInSeconds(currentTimeInSeconds => currentTimeInSeconds - 1)
      }, 1000)
    } else if (!isActive && currentTimeInSeconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, currentTimeInSeconds])

  return (
    <Container>
      {secondsToMinutesSecondsFormat(currentTimeInSeconds)} {workCount} {breakCount}
      <button onClick={toggle}>{isActive ? 'Pause' : 'Play'}</button>
      <button onClick={reset}> Reset </button>
    </Container>
  )
}
