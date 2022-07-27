import React, { useEffect, useState } from 'react'

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [text, setText] = useState([])

  // useEffect(() => {})
  useEffect(() => {
    // 컴포넌트가 렌더링 될 때 실행될 함수
    // 데이터 갖고오기 요청 보내고, 데이터가 오면 isLoaded = true
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  })
  
  // 로딩이 완료로 변하면, ~~가 실행되도록
  useEffect(() => {
    // 업데이트될 때 실행될 함수 + 처음 컴포넌트가 렌더링될때도 실행된다.
    // if문으로 조건을 주어 렌더링시 실행을 막는다.
    if (isLoaded) setText(text.concat(['추가!']))
  }, [isLoaded]) // 여기에 넣은 값이 업데이트된 값(text)이 들어가지 않을 수 있으니 경고를 주는 것.
  return (
    <div>
      {isLoaded ? <>로딩 완료!</> : <>로딩 중</>}
      {text}
    </div>
  )
}

export default Loading
