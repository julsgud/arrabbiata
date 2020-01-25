import { useMutation, useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const TOGGLE_IS_RUNNING = gql`
  mutation ToggleIsRunning {
    toggleIsRunning @client
  }
`
const SET_CURRENT_TIME_IN_SECONDS = gql`
  mutation SetCurrentTimeInSeconds($time: Int!) {
    setCurrentTimeInSeconds(time: $time) @client
  }
`

const STOP_TIMER = gql`
  mutation StopTimer {
    stopTimer @client
  }
`

export const GET_TIMER = gql`
  query GetTimer {
    timer @client {
      id
      isRunning
      currentTimeInSeconds
    }
  }
`

export function useTimer() {
  const [toggleIsRunning] = useMutation(TOGGLE_IS_RUNNING)
  const [setCurrentTimeInSeconds] = useMutation(SET_CURRENT_TIME_IN_SECONDS)
  const [stopTimer] = useMutation(STOP_TIMER)
  const {
    data: {
      timer: { isRunning, currentTimeInSeconds },
    },
  } = useQuery(GET_TIMER)
  const updateCurrentTime = newTime => setCurrentTimeInSeconds({ variables: { time: newTime } })

  return { isRunning, currentTimeInSeconds, toggleIsRunning, updateCurrentTime, stopTimer }
}
