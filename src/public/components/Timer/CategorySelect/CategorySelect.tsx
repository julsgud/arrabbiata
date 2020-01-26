import React from 'react'
import { useSetCycleCategoryMutation } from '../../../../generated/graphql'
export function CategorySelect({ selectedCategoryId, categories }) {
  const [setCycleCategory] = useSetCycleCategoryMutation()

  return (
    <select
      value={selectedCategoryId}
      onChange={e => {
        return setCycleCategory({ variables: { categoryId: e.target.value } })
      }}
    >
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.categoryName}
        </option>
      ))}
      <option value="free">Free</option>
    </select>
  )
}
