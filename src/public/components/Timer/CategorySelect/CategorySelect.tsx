import React from 'react'
import styled from 'styled-components'
import { Category, useSetCycleCategoryMutation } from '../../../../generated/graphql'

interface CategorySelectProps {
  selectedCategoryId: string
  categories?: Category[]
}

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const CategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategoryId,
  categories = [],
}) => {
  const [setCycleCategory] = useSetCycleCategoryMutation()

  return (
    <Row>
      <div> Category </div>
      <select
        value={selectedCategoryId}
        onChange={e => {
          return setCycleCategory({ variables: { categoryId: e.target.value } })
        }}
      >
        {categories.length &&
          categories.map((cat: Category) => (
            <option key={cat.id} value={cat.id}>
              {cat.categoryName}
            </option>
          ))}
        <option value="free">Free</option>
      </select>
    </Row>
  )
}
