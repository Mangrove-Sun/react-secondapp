import React, { useEffect, useState } from 'react'

function Timer({s}) {
  const [seconds, setSeconds] = useState(s)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    if (isClicked) {
      const countDown = setTimeout(() => {setSeconds(seconds - 1)}, 1000)
      // setTimeout()은 시간이 지나고 새로고침이 이루어져도 사라지지 않기때문에 직접 삭제해주어야한다.
      return () => clearTimeout(countDown)
    }
  }, [seconds, isClicked])

  return (
    <>
      <button onClick={() => setIsClicked(true)}>타이머 시작!</button>
      <button onClick={() => setIsClicked(false)}>타이머 중지!</button>
      <div>{seconds}</div>
    </>
  )
}

export default Timer
