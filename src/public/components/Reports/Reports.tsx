import React, { useState } from 'react'
import styled from 'styled-components'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'
import { Select } from '../common/Select/Select'
import { CycleFetcher } from './CycleFetcher/CycleFetcher'
import { DateSelect, THIS_MONTH } from './DateSelect/DateSelect'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & .DayPickerInput-OverlayWrapper {
    color: black;
  }
`

export const Reports: React.FC = () => {
  const [endDate, setEndDate] = useState(new Date(THIS_MONTH.endDate))
  const [startDate, setStartDate] = useState(new Date(THIS_MONTH.startDate))
  const user = useCurrentUserData()
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [selectedTaskId, setSelectedTaskId] = useState('')
  const { categories, tasks } = user
  const tasksInCategory = selectedCategoryId
    ? tasks.filter(task => task.categoryId === selectedCategoryId)
    : []

  return (
    <Wrapper>
      <div>
        <DateSelect
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      </div>
      <div>
        <Select
          items={categories}
          itemType="category"
          placeholderLabel="all"
          selectedValue={selectedCategoryId}
          onSelect={setSelectedCategoryId}
          autoSelectEnabled={false}
        />
        {selectedCategoryId && (
          <Select
            items={tasksInCategory}
            itemType="task"
            placeholderLabel="all"
            selectedValue={selectedTaskId}
            onSelect={setSelectedTaskId}
            autoSelectEnabled={false}
          />
        )}
      </div>
      <CycleFetcher
        taskId={selectedTaskId}
        categoryId={selectedCategoryId}
        startDate={startDate || ''}
        endDate={endDate || ''}
      >
        <div> Some reports here </div>
      </CycleFetcher>
    </Wrapper>
  )
}
