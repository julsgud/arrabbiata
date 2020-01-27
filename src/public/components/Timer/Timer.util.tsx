import { TimerDirection } from '../../../generated/graphql'

export function secondsToMinutesSecondsFormat(seconds: number): String {
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor((seconds % 3600) % 60)
  return `${formatMinutesForTimeDisplay(m)}:${formatSecondsForTimeDisplay(s)}`
}

export function formatSecondsForTimeDisplay(number: number): String {
  if (!number) return '00'
  if (number < 10) return `0${number.toString()}`
  return number.toString()
}

export function formatMinutesForTimeDisplay(number: number): String {
  if (!number) return '0'
  return `${number.toString()}`
}

export const TIMER_DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
}

export const TIMER_LIMITS_IN_SECONDS = {
  THIRTY_MINUTES: 1800,
  ONE_HOUR: 3600,
  HOUR_AND_A_HALF: 5400,
  TWO_HOURS: 7200,
  TWO_HOURS_AND_A_HALF: 9000,
  THREE_HOURS: 10800,
  NONE: 86400,
}

export const TIMER_DEFAULT_CATEGORY = 'free'

export function isTimerDone(timeLimit: number, currentTime: number, timerDirection: TimerDirection): Boolean {
  if (timerDirection === TIMER_DIRECTION.UP) {
    return timeLimit === currentTime
  } else {
    return currentTime === 0
  }
}

export function isTimerPaused(timeLimit: number, isTimerRunning: boolean, currentTimeInSeconds: number, timerDirection: TimerDirection): Boolean {
  if (timerDirection === TIMER_DIRECTION.UP) {
    return !isTimerRunning && currentTimeInSeconds !== 0
  } else {
    return !isTimerRunning && currentTimeInSeconds !== timeLimit
  }
}
