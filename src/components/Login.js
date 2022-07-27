import React, { useEffect, useState } from 'react'

function Login() {
  const [userInput, setUserInput] = useState({id: '', pw: ''})

  const onUserIdChange = (e) => {
    const { name, value } = e.target
    setUserInput({ [name]: value })
  }

  const doLogin = () => {
    alert('로그인 완료')
  }

  useEffect(() => {
    console.log(userInput)
  })

  return (
    <div>
      <input placeholder='아이디를 입력해주세요.' onChange={ onUserIdChange } name="id" />
      <input placeholder='비밀번호를 입력해주세요.' type='password' onChange={ onUserIdChange } name="pw" />
      <button onClick={doLogin}>
        로그인
      </button>
    </div>
  )
}

export default Login
