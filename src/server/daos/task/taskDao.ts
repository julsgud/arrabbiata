import moment from 'moment'
import { insertDocumentIntoCollection, updateDocumentById } from '../../services/mongodb/mongoDao'

export const TASKS_COLLECTION = 'tasks'

export async function saveTask(userId: string, categoryId: string, taskName: string) {
  const category = {
    userId,
    categoryId,
    taskName,
    createdAt: moment().toISOString(),
    isArchived: false,
  }
  return await insertDocumentIntoCollection(TASKS_COLLECTION, category)
}

export async function deleteTask(taskId: string) {
  await updateDocumentById(TASKS_COLLECTION, taskId, 'isArchived', true)
  return { id: taskId }
}
