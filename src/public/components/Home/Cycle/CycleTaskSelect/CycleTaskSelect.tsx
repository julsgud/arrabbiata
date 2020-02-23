import React, { useEffect } from 'react'
import { Task, useSetCycleTaskMutation } from '../../../../../generated/graphql'
import { Select } from '../../../common/Select/Select'

interface TaskSelectProps {
  selectedCategoryId: string
  selectedTaskId: string
  tasks?: Task[]
}

export const CycleTaskSelect: React.FC<TaskSelectProps> = ({
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
    <Select
      itemType="task"
      items={tasksInCategory}
      autoSelectEnabled={false}
      selectedValue={selectedTaskId}
      onSelect={taskId => setCycleTask({ variables: { taskId } })}
    />
  )
}
