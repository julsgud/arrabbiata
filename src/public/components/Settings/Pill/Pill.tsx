import React from 'react'
import styled from 'styled-components'

interface WrapperProps {
  isCurrentlySelected: boolean
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: auto;
  border-radius: 16px;
  border: 2px solid ${(p: WrapperProps) => (p.isCurrentlySelected ? 'green' : 'white')};
  padding: 6px 12px;
  cursor: pointer;
  color: ${(p: WrapperProps) => (p.isCurrentlySelected ? 'green' : 'white')};
`

const Label = styled.div`
  padding-right: 6px;
`

const DeleteIcon = styled.div`
  position: relative;
  top: 1px;
  cursor: pointer;
`

interface PillProps {
  label: string
  isCurrentlySelected: boolean
  deleteCallback
  onSelect
}

export const Pill: React.FC<PillProps> = ({ label, isCurrentlySelected, deleteCallback, onSelect }) => {
  return (
    <Wrapper isCurrentlySelected={isCurrentlySelected} onClick={onSelect}>
      <Label> {label} </Label>
      <DeleteIcon onClick={deleteCallback}> &#10005; </DeleteIcon>
    </Wrapper>
  )
}
