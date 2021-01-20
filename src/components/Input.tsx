import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

interface Props {
  name: string

  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'border-2 border-green-600' : ''}
        {...rest}
      />

      {error && <span className="text-red-600 mb-1">{error}</span>}
    </>
  )
}

export default Input
