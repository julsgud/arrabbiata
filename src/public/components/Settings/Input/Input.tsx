import React, { useCallback, useState } from 'react'
import { onEnter } from '../../../util/keyboardUtil'

export function Input({ onEnterCallback }) {
  const [inputText, setInputText] = useState('')

  const whenEnter = useCallback(() => {
    onEnterCallback(inputText)
    setInputText('')
  }, [inputText])

  return (
    <input
      value={inputText}
      onChange={e => setInputText(e.target.value)}
      onKeyDown={e => onEnter(e.key, whenEnter)}
    />
  )
}
