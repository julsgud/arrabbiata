import React, { useState } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Select } from '../../common/Select/Select'

const getDayBefore = date => {
  return new Date(
    moment(date)
      .subtract(1, 'days')
      .toISOString()
  )
}

const getDayAfter = date => {
  return new Date(
    moment(date)
      .add(1, 'days')
      .toISOString()
  )
}

const FOREVER_AGO = new Date(
  moment()
    .subtract(15, 'years')
    .toISOString()
)

export const DateSelect = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const [dateRange, setDateRange] = useState(THIS_MONTH.id)

  return (
    <div>
      <Select
        itemType="range"
        items={dateChoices}
        selectedValue={dateRange}
        onSelect={dateRangeOption => {
          setDateRange(dateRangeOption)
          if (dateRangeOption === 'All Time') {
            setStartDate(FOREVER_AGO)
            setEndDate(new Date())
          } else {
            const dateChoice = dateChoices.find(choice => choice.id === dateRangeOption)
            setStartDate(dateChoice.startDate)
            setEndDate(dateChoice.endDate)
          }
        }}
        placeholderLabel={'All Time'}
      />
      {dateRange === 'custom-choice' && (
        <div>
          From:
          <DatePicker
            maxDate={getDayBefore(endDate)}
            selected={startDate}
            onChange={setStartDate}
            dateFormat="MM/dd"
          />
          To:
          <DatePicker
            maxDate={moment}
            minDate={getDayAfter(startDate)}
            selected={endDate}
            onChange={setEndDate}
            dateFormat="MM/dd"
          />
        </div>
      )}
    </div>
  )
}

export const CUSTOM_DATE_OPTION = 'Custom'

export const dateChoices = [
  {
    id: 'custom-choice',
    rangeName: CUSTOM_DATE_OPTION,
    startDate: getDayBefore(new Date()),
    endDate: new Date(),
  },
  {
    id: 'last-week-choice',
    rangeName: 'Last Week',
    startDate: moment()
      .subtract(1, 'weeks')
      .toISOString(),
    endDate: moment().toISOString(),
  },
  {
    id: 'last-30-d-choice',
    rangeName: 'Last 30 Days',
    startDate: moment()
      .subtract(30, 'days')
      .toISOString(),
    endDate: moment().toISOString(),
  },
  {
    id: 'this-month-choice',
    rangeName: 'This Month',
    startDate: moment()
      .startOf('month')
      .toISOString(),
    endDate: moment()
      .endOf('month')
      .toISOString(),
  },
  {
    id: 'last-month-choice',
    rangeName: 'Last Month',
    startDate: moment()
      .startOf('month')
      .subtract(1, 'months')
      .toISOString(),
    endDate: moment()
      .endOf('month')
      .subtract(1, 'months')
      .toISOString(),
  },
  {
    id: 'this-year-choice',
    rangeName: 'This Year',
    startDate: moment()
      .startOf('year')
      .toISOString(),
    endDate: moment().toISOString(),
  },
]

export const THIS_MONTH = dateChoices.find(choice => choice.id === 'this-month-choice')
