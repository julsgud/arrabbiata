export function secondsToMinutesSecondsFormat(seconds: number) {
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor((seconds % 3600) % 60)
  return `${formatMinutesForTimeDisplay(m)}:${formatSecondsForTimeDisplay(s)}`
}

export function formatSecondsForTimeDisplay(number: number) {
  if (!number) return '00'
  if (number < 10) return `0${number.toString()}`
  return number.toString()
}

export function formatMinutesForTimeDisplay(number: number) {
  if (!number) return '0'
  return `${number.toString()}`
}

export const TIMER_DIRECTION = {
  UP: 'UP',
  DOWN: 'DOWN'
}
