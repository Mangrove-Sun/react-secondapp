import React, { useRef } from 'react'

function Refs() {
  const inputRef = useRef()

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      console.log('inputRef.current::', inputRef.current)
      console.log('inputRef.current.value::', inputRef.current.value)
    }
  }

  return (
    <div>
      <input ref={inputRef} onKeyDown={ keyHandler }/> {/* getElementById 와 같은 느낌 */}
    </div>
  )
}

export default Refs
