import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

function Clock() {
  const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    const clock = setTimeout(() => {setTime(moment().format('YYYY-MM-DD HH:mm:ss'))}, 1000)
    return () => clearTimeout(clock)
  }, [time])
  
  return (
    <>
      <div>
        <p>현재 시각 {time}</p>
      </div>
    </>
  )
}

export default Clock
