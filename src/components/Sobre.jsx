import React from 'react'
import Avatar from '../assets/avatar.png'

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
                        <p className='text-right '>Olá, sou o Rafael, seja bem vindo! Por favor de uma olhada por ai.</p>
                        <img src={Avatar} alt="avatar" className='w-[40%] ml-40'/>
                    </div>
                    <div>
                        <p className='text-justify'>Sou um entusiasta da tecnologia apaixonado por criar experiências digitais excepcionais. 
                            Concentro meu desenvolvimento principalmente no universo do Front-end,
                             onde utilizo tecnologias como ReactJS para dar vida a interfaces modernas e envolventes. 
                             Minha jornada também abrange uma variedade de tecnologias, 
                             como Python, C/C++ e Java. 
                             Além do código, tenho um olhar ao design, acreditando que a estética é uma parte vital de qualquer aplicação. 
                             Minhas habilidades estendem-se além da lógica de programação, incorporando uma abordagem centrada no usuário para garantir
                              que minhas criações não apenas funcionem perfeitamente, mas também proporcionem uma experiência visualmente atraente. 
                        </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Sobre