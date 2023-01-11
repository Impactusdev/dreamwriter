import React from 'react'
import Logo from '../../assets/icons/logo.svg'

const Index = ({name}) => {
  return (
    <div className='flex flex-col justify-between items-center bg-[#6363FC] w-[300px] h-full px-7 py-14 rounded-2xl mr-14'>
      <div className='flex flex-col w-full'>
        <Logo className='w-[130px] m-auto'/>
        <h2 className='font-["Blacker"] text-2xl text-white mt-14'>
          Bem-vindo(a)
        </h2>
        <h2 className='font-["Blacker"] text-4xl text-white mt-3'>
          {name}
        </h2>
      </div>
      <div className='flex flex-col w-full'>
        <button className='border-2 border-white rounded-full p-3 text-white'>Saiba Mais</button>
        <button className='bg-white rounded-full p-3 text-[#6363FC] mt-3'>Editar Perfil</button>
      </div>
    </div>
  )
}

export default Index