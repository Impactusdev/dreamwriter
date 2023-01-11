import React, { useState } from "react"
import { Login, TodoBoard, Menu } from '../components'

const IndexPage = () => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  function handleSaveUser(name, password) {
    setName(name)
    setPassword(password)
  }
  
  if (name === '' || password === '' ) {
    return <Login onAddUser={handleSaveUser}/>
  }

  return (
    <>
      <div className="flex flex-row h-screen p-7">
        <Menu name={name}/>
        <TodoBoard/>
      </div>
    </>

  )
}

export default IndexPage
