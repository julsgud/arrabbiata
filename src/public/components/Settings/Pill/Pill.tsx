import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: auto;
  border-radius: 16px;
  border: 1px solid white;
  padding: 6px 12px;
`

const Label = styled.div`
  padding-right: 6px;
`

const DeleteIcon = styled.div`
  position: relative;
  top: 1px;
  cursor: pointer;
`

export function Pill({ label, deleteCallback }) {
  return (
    <Wrapper>
      <Label> {label} </Label>
      <DeleteIcon onClick={deleteCallback}> &#10005; </DeleteIcon>
    </Wrapper>
  )
}
