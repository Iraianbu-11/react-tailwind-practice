import React from 'react'

const Colors = () => {
  return (
    <>
    <h2>Colors with Different Shades</h2>
    <p className='text-violet-50'>Tailwind CSS</p>
    <p className='text-violet-100'>Tailwind CSS</p>
    <p className='text-violet-200'>Tailwind CSS</p>
    <p className='text-violet-300'>Tailwind CSS</p>
    <p className='text-violet-400'>Tailwind CSS</p>
    <p className='text-violet-500'>Tailwind CSS</p>
    <p className='text-violet-600'>Tailwind CSS</p>
    <p className='text-violet-700'>Tailwind CSS</p>
    <p className='text-violet-800'>Tailwind CSS</p>
    <p className='text-violet-900'>Tailwind CSS</p>
    <br />
    <hr/>
    <br />

    <h2>Background Colours</h2>
    <p className='bg-violet-500 text-black'>Tailwind CSS</p>
    <p className='bg-red-700 text-white'>Tailwind CSS</p>
    <br />
    <hr/>
    <br />
    
    <h2>Text Decorations</h2>
    <p className="line-through">Tailwind</p>
    <p className="underline">Tailwind</p>
    <p className="overline">Tailwind</p>
    <p className="underline decoration-blue-300">Tailwind</p>
    <p className="text-purple-300 underline decoration-purple-300">Tailwind</p>
    <br />
    <hr/>
    <br />

    <h2>Accent Colours</h2>
    <input type="checkbox" name="" id="" checked/>
    <br />
    <input type="checkbox" className='accent-purple-600' name="" id="" checked/>
    <br />
    <hr/>
    <br />

    <h2>Arbitrary Colors</h2>
    <p className="text-[#50d71e]">Tailwind CSS</p>
    
    </>
  )
}

export default Colors