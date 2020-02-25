import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'
import { Select } from '../common/Select/Select'
import { CycleFetcher } from './CycleFetcher/CycleFetcher'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & .DayPickerInput-OverlayWrapper {
    color: black;
  }
`

function addDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function subtractDays(date, days) {
  const result = new Date(date)
  result.setDate(result.getDate() - days)
  return result
}

const getToday = () => new Date()

export const Reports: React.FC = () => {
  const [endDate, setEndDate] = useState<Date>(getToday)
  const [startDate, setStartDate] = useState<Date>(subtractDays(endDate, 1))
  const user = useCurrentUserData()
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const [selectedTaskId, setSelectedTaskId] = useState('')
  const { categories, tasks } = user
  const tasksInCategory = selectedCategoryId
    ? tasks.filter(task => task.categoryId === selectedCategoryId)
    : []

  console.log('cat', selectedCategoryId)
  console.log(selectedTaskId)

  return (
    <Wrapper>
      <div>
        From:
        <DatePicker
          maxDate={subtractDays(endDate, 1)}
          selected={startDate}
          onChange={setStartDate}
          dateFormat="MM/dd"
        />
      </div>
      <div>
        To:
        <DatePicker
          maxDate={getToday()}
          minDate={addDays(startDate, 1)}
          selected={endDate}
          onChange={setEndDate}
          dateFormat="MM/dd"
        />
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
        startDate={(startDate && startDate.toISOString()) || ''}
        endDate={(endDate && endDate.toISOString()) || ''}
      >
        <div> Some reports here </div>
      </CycleFetcher>
    </Wrapper>
  )
}
