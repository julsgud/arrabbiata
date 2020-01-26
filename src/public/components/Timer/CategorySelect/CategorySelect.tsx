import React from 'react'
export function CategorySelect({ selectedCategoryId, categories }) {

  
  return (
    <select value={selectedCategoryId}>
      {categories.map(cat => (
        <option key={cat.id} value={cat.id}>
          {cat.categoryName}
        </option>
      ))}
      <option value="free">
        Free
      </option>
    </select>
  )
}
