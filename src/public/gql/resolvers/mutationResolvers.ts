import { GET_TIMER } from '../queries/timer'

const getTimer = cache => cache.readQuery({ query: GET_TIMER })
const writeTimer = (cache, newTimerData) =>
  cache.writeQuery({ query: GET_TIMER, data: { timer: newTimerData } })

// todo whats the commonality of the two set ids?
const setCycleCategory = (_, args, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, selectedCategoryId: args.categoryId }
  writeTimer(cache, newTimerData)
}

const setCycleTask = (_, args, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, selectedTaskId: args.taskId }
  writeTimer(cache, newTimerData)
}

const stopTimer = (_, __, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, currentTimeInSeconds: 0, isTimerRunning: false }
  writeTimer(cache, newTimerData)
}

const setCurrentTime = (_, args, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, currentTimeInSeconds: args.timeInSeconds }
  writeTimer(cache, newTimerData)
}

const toggleIsRunning = (_, __, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, isTimerRunning: !timer.isTimerRunning }
  writeTimer(cache, newTimerData)
}

const setTimeLimit = (_, args, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, timeLimitInSeconds: args.timeLimit }
  writeTimer(cache, newTimerData)
}

const updateNotes = (_, args, { cache }) => {
  const { timer } = getTimer(cache)
  const newTimerData = { ...timer, notes: args.updatedNotes }
  writeTimer(cache, newTimerData)
}

export const mutationResolvers = {
  setCycleCategory,
  setCycleTask,
  stopTimer,
  setCurrentTime,
  toggleIsRunning,
  setTimeLimit,
}
