import React from 'react'
import Logo from '../../assets/icons/logo.svg'

const Index = ({name}) => {
  return (
    <div className='flex flex-col justify-between items-center bg-[#6363FC] w-[300px] max-sm:w-full h-full max-sm:h-[initial] px-7 py-14 max-sm:py-5 max-sm:px-7 rounded-2xl mr-14'>
      <div className='flex flex-col max-sm:flex-row max-sm:justify-between max-sm:items-center w-full'>
        <Logo className='w-[130px] max-sm:w-[80px] mx-auto max-sm:mr-3 ml-0'/>
        <h2 className='text-2xl text-white mt-14 max-sm:mt-0 max-sm:text-end'>
          Bem-vindo(a)<br/>
          <span className='text-4xl max-sm:text-2xl text-white mt-3'>{name}</span>
        </h2>
      </div>
      {/* <div className='flex flex-col w-full'>
        <button className='border-2 border-white rounded-full p-3 text-white'>Saiba Mais</button>
        <button className='bg-white rounded-full p-3 text-[#6363FC] mt-3'>Editar Perfil</button>
      </div> */}
    </div>
  )
}

export default Index