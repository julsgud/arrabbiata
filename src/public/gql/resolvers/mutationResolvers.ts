import { GET_TIMER } from '../queries/timer'

const getTimer = (cache) => cache.readQuery({ query: GET_TIMER })
const writeTimer = (cache, newTimerData) => cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })

const setCycleCategory = (_, args, { cache }): null => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, selectedCategoryId: args.categoryId }
  writeTimer(cache, newTimerData)
  return null
}

const stopTimer = (_, __, { cache }): null => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, currentTimeInSeconds: 0, isTimerRunning: false }
  writeTimer(cache, newTimerData)
  return null
}

const setCurrentTime = (_, args, { cache }): null => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, currentTimeInSeconds: args.timeInSeconds }
  writeTimer(cache, newTimerData)
  return null
}

const toggleIsRunning = (_, __, { cache }): null => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, isTimerRunning: !timer.isTimerRunning }
  writeTimer(cache, newTimerData)
  return null
}

const setTimeLimit = (_, args, { cache }): null => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, timeLimitInSeconds: args.timeLimit }
  writeTimer(cache, newTimerData)
  return null
}

export const mutationResolvers = {
  setCycleCategory,
  stopTimer,
  setCurrentTime,
  toggleIsRunning,
  setTimeLimit,
}
