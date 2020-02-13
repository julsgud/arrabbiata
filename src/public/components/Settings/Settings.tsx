import React, { useState } from 'react'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'
import { Categories } from './Categories/Categories'
import { Tasks } from './Tasks/Tasks'

export function Settings() {
  const user = useCurrentUserData()
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const { categories, tasks } = user
  return (
    <>
      <Categories
        categories={categories}
        setSelectedCategoryId={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
      <Tasks tasks={tasks} selectedCategoryId={selectedCategoryId} />
    </>
  )
}
