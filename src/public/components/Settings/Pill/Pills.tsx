import React from 'react'
import styled from 'styled-components'
import { Pill } from './Pill'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export function Pills({ items, type, deleteCallback }) {
  return (
    <Wrapper>
      {items.map(item => (
        <Pill
          key={item.id}
          label={item[`${type}Name`]}
          deleteCallback={() => deleteCallback(item.id)}
        />
      ))}
    </Wrapper>
  )
}
