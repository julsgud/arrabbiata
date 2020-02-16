import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Category, useSetCycleCategoryMutation } from '../../../../../generated/graphql'

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

  useEffect(() => {
    if (!selectedCategoryId && categories && categories.length) {
      setCycleCategory({ variables: { categoryId: categories[0].id } })
    }
  }, [])

  if (!categories) return 'Set up categories in settings...'

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
        <option value="">none</option>
      </select>
    </Row>
  )
}
