import React from 'react'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'
import { Categories } from './Categories/Categories'

export function Settings() {
  const user = useCurrentUserData()
  const { categories } = user
  return (
    <>
      <Categories categories={categories} />
    </>
  )
}
