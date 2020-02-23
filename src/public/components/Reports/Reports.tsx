import React, { useState } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & .DayPickerInput-OverlayWrapper {
    color: black;
  }
`

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function subtractDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

const getToday = () => new Date()

export const Reports: React.FC = () => {
  const [endDate, setEndDate] = useState<Date>(getToday)
  const [startDate, setStartDate] = useState<Date>(subtractDays(endDate, 1))
  const user = useCurrentUserData()
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const { categories, tasks } = user

  return (
    <Wrapper>
      <div>
        From:
        <DatePicker
          maxDate={subtractDays(endDate, 1)}
          selected={startDate}
          onChange={setStartDate}
        />
      </div>
      <div>
        To:
        <DatePicker
          maxDate={getToday()}
          minDate={addDays(startDate, 1)}
          selected={endDate}
          onChange={setEndDate}
        />
      </div>
    </Wrapper>
  )
}
