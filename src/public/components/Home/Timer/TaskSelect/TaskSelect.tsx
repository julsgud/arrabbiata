import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Task, useSetCycleTaskMutation } from '../../../../../generated/graphql'

interface TaskSelectProps {
  selectedCategoryId: string
  selectedTaskId: string
  tasks?: Task[]
}

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const TaskSelect: React.FC<TaskSelectProps> = ({
  selectedCategoryId,
  selectedTaskId,
  tasks = [],
}) => {
  const [setCycleTask] = useSetCycleTaskMutation()
  const tasksInCategory = selectedCategoryId
    ? tasks.filter(task => task.categoryId === selectedCategoryId)
    : []

  useEffect(() => {
    if (selectedCategoryId && tasksInCategory && tasksInCategory.length) {
      setCycleTask({ variables: { taskId: tasksInCategory[0].id } })
    }
  }, [selectedCategoryId])

  if (!selectedCategoryId) return null

  return (
    <Row>
      <div> Task </div>
      <select
        value={selectedTaskId}
        onChange={e => setCycleTask({ variables: { taskId: e.target.value } })}
      >
        {tasksInCategory &&
          tasksInCategory.length &&
          tasksInCategory.map((task: any) => (
            <option key={task.id} value={task.id}>
              {task.taskName}
            </option>
          ))}
        <option value="">none</option>
      </select>
    </Row>
  )
}
