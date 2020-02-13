import React from 'react'
import update from 'immutability-helper'
import { Input } from '../Input/Input'
import { Pills } from '../Pill/Pills'
import { Task, useDeleteTaskMutation, useSaveTaskMutation } from '../../../../generated/graphql'
import { USER_DATA } from '../../../gql/queries/userData'

interface TasksProps {
  tasks: Task[]
  selectedCategoryId?: string
}

export const Tasks: React.FC<TasksProps> = ({ tasks, selectedCategoryId }) => {
  const [saveTask] = useSaveTaskMutation({
    // @ts-ignore
    update: (cache, { data: { saveTask } }) => {
      const previousQueryResult = cache.readQuery({ query: USER_DATA })
      const newData = update(previousQueryResult, {
        // @ts-ignore
        userData: {
          tasks: {
            $push: [saveTask],
          },
        },
      })
      cache.writeQuery({ query: USER_DATA, data: newData })
    },
  })

  const [deleteTask] = useDeleteTaskMutation({
    // @ts-ignore
    update: (cache, { data: { deleteTask } }) => {
      const previousQueryResult = cache.readQuery({ query: USER_DATA })
      const indexOfDeletedCategory = tasks.findIndex(task => task.id === deleteTask.id)
      const newData = update(previousQueryResult, {
        // @ts-ignore
        userData: {
          tasks: {
            $splice: [[indexOfDeletedCategory, 1]],
          },
        },
      })
      cache.writeQuery({ query: USER_DATA, data: newData })
    },
  })

  const tasksInCategory = selectedCategoryId
    ? tasks.filter(task => task.categoryId === selectedCategoryId)
    : []

  return (
    <>
      Tasks
      <Input
        onEnterCallback={taskName =>
          saveTask({
            variables: { categoryId: selectedCategoryId, taskName },
          })
        }
      />
      {tasksInCategory && !tasksInCategory.length ? (
        'Add tasks to category...'
      ) : (
        <Pills
          type="task"
          items={tasksInCategory}
          selectedItemId={selectedCategoryId}
          deleteCallback={taskId =>
            deleteTask({
              variables: { taskId },
            })
          }
        />
      )}
    </>
  )
}
