import React from 'react'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'
import { Pills } from './Pill/Pills'
import { Input } from './Input/Input'

export function Settings() {
  const user = useCurrentUserData()
  const { categories } = user
  return (
    <>
      <>
        Categories
        <Input onEnterCallback={() => console.log('Enter')} />
        <Pills type="category" items={categories} deleteCallback={() => console.log('Delete')} />
      </>
    </>
  )
}
