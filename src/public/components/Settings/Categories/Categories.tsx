import React from 'react'
import update from 'immutability-helper'
import { Input } from '../Input/Input'
import { Pills } from '../Pill/Pills'
import { useSaveCategoryMutation } from '../../../../generated/graphql'
import { USER_DATA } from '../../../gql/queries/userData'

export function Categories({ categories }) {
  const [saveCategory] = useSaveCategoryMutation()

  return (
    <>
      Categories
      <Input
        onEnterCallback={categoryName =>
          saveCategory({
            variables: { categoryName },
            update: (cache, { data: { saveCategory } }) => {
              const previousQueryResult = cache.readQuery({ query: USER_DATA })
              const newData = update(previousQueryResult, {
                userData: {
                  categories: {
                    $push: [saveCategory],
                  },
                },
              })

              cache.writeQuery({ query: USER_DATA, data: newData })
            },
          })
        }
      />
      <Pills type="category" items={categories} deleteCallback={() => console.log('Delete')} />
    </>
  )
}
