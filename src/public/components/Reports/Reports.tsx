import React, { useState } from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useCurrentUserData } from '../../hooks/useCurrentUserData'

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const Reports: React.FC = () => {
  const [startDate, setStartDate] = useState(moment().subtract('1', 'days'))
  const [endDate, setEndDate] = useState(moment())
  const user = useCurrentUserData()
  const [selectedCategoryId, setSelectedCategoryId] = useState('')
  const { categories, tasks } = user

  return (
    <Wrapper>
      <div> From: {moment(startDate).format('LL')} </div>
      <div> To: {moment(endDate).format('LL')} </div>
    </Wrapper>
  )
}
