import React from 'react'
import styled from 'styled-components'
import { useUpdateNotesMutation } from '../../../../../generated/graphql'

interface NotesProps {
  notes: string
}

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [updateNotes] = useUpdateNotesMutation()

  return (
    <Row>
      <div> Notes </div>
      <textarea
        value={notes}
        onChange={e => updateNotes({ variables: { updatedNotes: e.target.value } })}
      />
    </Row>
  )
}
