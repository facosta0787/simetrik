import React, { useState } from 'react'

function useInputText(initialValue) {
  const [value, setValue] = useState(initialValue)
  const bind = {
    value,
    onChange: (event) => setValue(event.target.value),
  }
  const reset = () => setValue('')

  return [value, bind, reset, setValue]
}

export default useInputText
