import React from 'react'
import styled from 'styled-components'

interface NotesProps {
  notes: string
}

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const TaskSelect: React.FC<NotesProps> = ({ notes }) => {
  return (
    <Row>
      <div> Notes </div>
      <textarea value={notes} onChange={() => {}}/>
    </Row>
  )
}
