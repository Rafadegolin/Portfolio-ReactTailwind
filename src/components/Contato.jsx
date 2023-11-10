import React from 'react'

const Contato = () => {
  return (
    <div name='contato' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/0667224a-1e30-4e32-b18c-aa383402f59a" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contato</p>
                <p className='text-gray-300 py-4'>// Preencha o formulário abaixo ou me mande um email - rafaeldegolin26@hotmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nome' name='nome'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="mensagem" rows="10" placeholder='Escreva sua mensagem'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Vamos trabalhar juntos!</button>
        </form>
    </div>
  )
}

export default Contato