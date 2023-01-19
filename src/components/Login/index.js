import React, { useState } from 'react'
import Logo from '../../assets/icons/logo.svg'

const Index = ({onAddUser}) => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [whiteSpaceErrorName, setWhiteSpaceErrorName] = useState(false)
  const [whiteSpaceErrorPassword, setWhiteSpaceErrorPassword] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    onAddUser(name, password)
    const whiteSpaceCheck = () => {
      if (name === '') {
        setWhiteSpaceErrorName(true)
      } else {
        setWhiteSpaceErrorName(false)
      }
      if (password === '') {
        setWhiteSpaceErrorPassword(true)
      } else {
        setWhiteSpaceErrorPassword(false)
      }
    }
    whiteSpaceCheck()
  }


  return (
    <div className='flex flex-col justify-center items-center px-12 py-12 max-sm:px-6 max-sm:py-6 h-screen'>
      <div className='flex flex-col shrink-0 items-center justify-center max-w-[800px] h-full bg-[#6363FC] py-6 px-7  rounded-2xl max-md:px-12 max-sm:py-5 max-sm:px-5'>
        <Logo className=''/>
        <h1 className='text-white text-5xl text-center mb-16 mt-12 max-sm:text-4xl'>
          Bem vindo(a) de volta!
        </h1>
        <form className='w-[70%] max-md:w-full'>
          <input 
            className={`text-[#242423] border-2 rounded-lg py-5 px-5 max-sm:py-4 mb-7 max-sm:mb-5 outline-none w-full placeholder:italic placeholder:opacity-[60%] ${whiteSpaceErrorName ? 'border-red-700' : 'border-transparent'}`}
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            type='text'
            placeholder='Qual é o seu primeiro nome?'
          />
          <input 
            className={`text-[#242423] rounded-lg py-5 px-5 max-sm:py-4 outline-none border-2 w-full placeholder:italic placeholder:opacity-[60%] ${whiteSpaceErrorPassword ? 'border-red-700' : 'border-transparent'}`}
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Digite sua senha...'
          />
          <button 
            className='text-[#6363FC] rounded-lg bg-white w-full mt-7 py-6 px-2 max-sm:py-4 max-sm:mt-5'
            onClick={handleClick}>
            Pronto 👍
          </button>
        </form>
      </div>
    </div>
  )
}

export default Index