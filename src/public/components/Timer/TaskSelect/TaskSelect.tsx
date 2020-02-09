import React from 'react'
import styled from 'styled-components'
import { useSetCycleTaskMutation } from '../../../../generated/graphql'

interface TaskSelectProps {
  selectedTaskId: string
  tasks?: any
}

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const TaskSelect: React.FC<TaskSelectProps> = ({ selectedTaskId, tasks = [] }) => {
  const [setCycleTask] = useSetCycleTaskMutation()

  return (
    <Row>
      <div> Task </div>
      <select
        value={selectedTaskId}
        onChange={e => setCycleTask({ variables: { taskId: e.target.value } })}
      >
        {tasks.length &&
          tasks.map((task: any) => (
            <option key={task.id} value={task.id}>
              {task.taskName}
            </option>
          ))}
        <option value="free">Free</option>
      </select>
    </Row>
  )
}
