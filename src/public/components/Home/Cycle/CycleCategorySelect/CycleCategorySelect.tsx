import React from 'react'
import { Category, useSetCycleCategoryMutation } from '../../../../../generated/graphql'
import { Select } from '../../../common/Select/Select'

interface CategorySelectProps {
  selectedCategoryId: string
  categories?: Category[]
}

export const CycleCategorySelect: React.FC<CategorySelectProps> = ({
  selectedCategoryId,
  categories = [],
}) => {
  const [setCycleCategory] = useSetCycleCategoryMutation()

  return (
    <Select
      itemType="category"
      selectedValue={selectedCategoryId}
      items={categories}
      onSelect={categoryId => setCycleCategory({ variables: { categoryId } })}
    />
  )
}
