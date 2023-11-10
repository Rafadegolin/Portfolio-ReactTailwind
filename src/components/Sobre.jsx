import React from 'react'

const Sobre = () => {
  return (
    <div name='sobre' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Sobre</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Olá, sou o Rafael, seja bem vindo! Por favor de uma olhada por ai.</p>
                    </div>
                    <div>
                        <p>Sou apaixonado por criar aplicações incríveis que possam agregar
                            na vida das pessoas de maneira positiva. Sou apaixonado por criar aplicações incríveis que possam agregar
                            na vida das pessoas de maneira positiva Sou apaixonado por criar aplicações incríveis que possam agregar
                            na vida das pessoas de maneira positiva.
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Sobre