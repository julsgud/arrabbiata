import React from 'react'
import update from 'immutability-helper'
import { Input } from '../Input/Input'
import { Pills } from '../Pill/Pills'
import {
  Category,
  useDeleteCategoryMutation,
  useSaveCategoryMutation,
} from '../../../../generated/graphql'
import { USER_DATA } from '../../../gql/queries/userData'

interface CategoriesProps {
  categories: Category[]
  selectedCategoryId?: string
  setSelectedCategoryId
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategoryId,
  setSelectedCategoryId,
}) => {
  const [saveCategory] = useSaveCategoryMutation({
    // @ts-ignore
    update: (cache, { data: { saveCategory } }) => {
      const previousQueryResult = cache.readQuery({ query: USER_DATA })
      const newData = update(previousQueryResult, {
        // @ts-ignore
        userData: {
          categories: {
            $push: [saveCategory],
          },
        },
      })
      cache.writeQuery({ query: USER_DATA, data: newData })
    },
  })

  const [deleteCategory] = useDeleteCategoryMutation({
    // @ts-ignore
    update: (cache, { data: { deleteCategory } }) => {
      const previousQueryResult = cache.readQuery({ query: USER_DATA })
      const indexOfDeletedCategory = categories.findIndex(cat => cat.id === deleteCategory.id)
      console.log(previousQueryResult)
      console.log(indexOfDeletedCategory)
      const newData = update(previousQueryResult, {
        // @ts-ignore
        userData: {
          categories: {
            $splice: [[indexOfDeletedCategory, 1]],
          },
        },
      })
      cache.writeQuery({ query: USER_DATA, data: newData })
    },
  })

  return (
    <>
      Categories
      <Input
        onEnterCallback={categoryName =>
          saveCategory({
            variables: { categoryName },
          })
        }
      />
      <Pills
        type="category"
        items={categories}
        onSelect={setSelectedCategoryId}
        selectedItemId={selectedCategoryId}
        deleteCallback={categoryId =>
          deleteCategory({
            variables: { categoryId },
          })
        }
      />
    </>
  )
}
