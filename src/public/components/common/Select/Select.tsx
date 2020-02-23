import React, { useEffect } from 'react'
import styled from 'styled-components'

interface SelectProps {
  itemType: string
  selectedValue: string
  autoSelectEnabled?: boolean
  onSelect: (categoryId: string) => void
  items?: any[]
}

export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

export const Select: React.FC<SelectProps> = ({
  itemType,
  selectedValue,
  onSelect,
  autoSelectEnabled = true,
  items = [],
}) => {
  useEffect(() => {
    if (autoSelectEnabled && !selectedValue && items && items.length) {
      onSelect(items[0].id)
    }
  }, [])

  if (!items) return <> Set up {itemType} in settings... </>

  return (
    <Row>
      <div> {itemType} </div>
      <select value={selectedValue} onChange={e => onSelect(e.target.value)}>
        {items.length &&
          items.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item[`${itemType}Name`]}
            </option>
          ))}
        <option value="">none</option>
      </select>
    </Row>
  )
}
