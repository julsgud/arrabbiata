import { GET_TIMER } from '../queries/timer'
import { DEFAULT_TIMER_OBJECT } from '../../components/Home/Timer/Timer.util'

const getTimer = cache => cache.readQuery({ query: GET_TIMER }).timer
const writeTimer = (cache, newTimerData) =>
  cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })

const resetCycle = (_, __, { cache }) => writeTimer(cache, DEFAULT_TIMER_OBJECT)

const setCycleCategory = (_, args, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, selectedCategoryId: args.categoryId }
  writeTimer(cache, newTimerData)
}

const setCycleTask = (_, args, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, selectedTaskId: args.taskId }
  writeTimer(cache, newTimerData)
}

const stopTimer = (_, __, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, currentTimeInSeconds: 0, isTimerRunning: false }
  writeTimer(cache, newTimerData)
}

const setCurrentTime = (_, args, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, currentTimeInSeconds: args.timeInSeconds }
  writeTimer(cache, newTimerData)
}

const toggleIsRunning = (_, __, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, isTimerRunning: !timer.isTimerRunning }
  writeTimer(cache, newTimerData)
}

const setTimeLimit = (_, args, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, timeLimitInSeconds: args.timeLimit }
  writeTimer(cache, newTimerData)
}

const updateNotes = (_, args, { cache }) => {
  const timer = getTimer(cache)
  const newTimerData = { ...timer, notes: args.updatedNotes }
  writeTimer(cache, newTimerData)
}

export const mutationResolvers = {
  resetCycle,
  setCycleCategory,
  updateNotes,
  setCycleTask,
  stopTimer,
  setCurrentTime,
  toggleIsRunning,
  setTimeLimit,
}
