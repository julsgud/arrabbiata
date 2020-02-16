import { TimerDirection } from '../../../../generated/graphql'

export function secondsToHoursMinutesSecondsFormat(totalSeconds: number): String {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor((totalSeconds % 3600) % 60)

  return `${hours ? formatTimeForDisplay(hours, false) + ':' : ''}${formatTimeForDisplay(
    minutes,
    !!hours
  )}:${formatTimeForDisplay(seconds, true)}`
}

export function formatTimeForDisplay(
  number: number,
  displayAsDoubleDigit: boolean = false
): String {
  if (displayAsDoubleDigit) {
    if (!number) return '00'
    if (number < 10) return `0${number.toString()}`
    return number.toString()
  }

  if (!number) return '0'
  return `${number.toString()}`
}

export function formatMinutesForTimeDisplay(number: number): String {
  if (!number) return '0'
  return `${number.toString()}`
}

export const TIMER_DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN',
}

export const TIMER_LIMITS_IN_SECONDS = [
  {
    label: '30 mins',
    value: 1800,
  },
  {
    label: '1 hour',
    value: 3600,
  },
  {
    label: '1.5 hours',
    value: 5400,
  },
  {
    label: '2 hours',
    value: 7200,
  },
  {
    label: '2.5 hours',
    value: 9000,
  },
  {
    label: '3 hours',
    value: 10800,
  },
  {
    label: 'none',
    value: 86400,
  },
]

export const TIMER_DEFAULT_CATEGORY_OR_TASK = ''

export function isTimerDone(
  timeLimit: number,
  currentTime: number,
  timerDirection: TimerDirection
): Boolean {
  if (timerDirection === TIMER_DIRECTION.UP) {
    return timeLimit === currentTime
  } else {
    return currentTime === 0
  }
}

export function isTimerPaused(
  timeLimit: number,
  isTimerRunning: boolean,
  currentTimeInSeconds: number,
  timerDirection: TimerDirection
): Boolean {
  if (timerDirection === TIMER_DIRECTION.UP) {
    return !isTimerRunning && currentTimeInSeconds !== 0
  } else {
    return !isTimerRunning && currentTimeInSeconds !== timeLimit
  }
}

export const DEFAULT_TIMER_OBJECT = {
  id: '0',
  isTimerRunning: false,
  currentTimeInSeconds: 0,
  timerDirection: TIMER_DIRECTION.UP,
  selectedCategoryId: '',
  selectedTaskId: '',
  timeLimitInSeconds: TIMER_LIMITS_IN_SECONDS[TIMER_LIMITS_IN_SECONDS.length - 1].value,
  notes: '',
  __typename: 'Timer',
}
