import React from 'react'
import update from 'immutability-helper'
import { Input } from '../Input/Input'
import { Pills } from '../Pill/Pills'
import {
  Category,
  useDeleteCategoryMutation,
  useDeleteTaskMutation,
  useSaveTaskMutation,
} from '../../../../generated/graphql'
import { USER_DATA } from '../../../gql/queries/userData'
import { deleteTask } from '../../../../server/daos/task/taskDao'

interface CategoriesProps {
  categories: Category[]
  selectedCategoryId?: string
  setSelectedCategoryId
}

export const Tasks: React.FC<CategoriesProps> = ({
  tasks,
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
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
      const indexOfDeletedCategory = tasks.findIndex(cat => cat.id === deleteTask.id)
      console.log(previousQueryResult)
      console.log(indexOfDeletedCategory)
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
      <Pills
        type="category"
        items={tasksInCategory}
        onSelect={setSelectedCategoryId}
        selectedItemId={selectedCategoryId}
        deleteCallback={taskId =>
          deleteTask({
            variables: { taskId },
          })
        }
      />
    </>
  )
}
