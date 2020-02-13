import React from 'react'
import styled from 'styled-components'
import { Pill } from './Pill'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`

interface PillsProps {
  items: any[]
  type: string
  deleteCallback
  onSelect
  selectedItemId?: string
}

export const Pills: React.FC<PillsProps> = ({ items, type, selectedItemId, deleteCallback, onSelect }) => {
  return (
    <Wrapper>
      {items.map(item => (
        <Pill
          key={item.id}
          isCurrentlySelected={item.id === selectedItemId}
          label={item[`${type}Name`]}
          onSelect={() => onSelect(item.id)}
          deleteCallback={() => deleteCallback(item.id)}
        />
      ))}
    </Wrapper>
  )
}
