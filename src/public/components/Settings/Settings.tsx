import React, { useState } from 'react'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'
import { Categories } from './Categories/Categories'

export function Settings() {
  const user = useCurrentUserData()
  const [selectedCategoryId, setSelectedCategoryId] = useState('')

  const { categories } = user
  return (
    <>
      <Categories
        categories={categories}
        setSelectedCategoryId={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
    </>
  )
}
