import React from 'react'

const Flexbox = () => {
  return (
    <>
    <h1 className="text-center text-xl my-5">Flexbox in Tailwind CSS</h1>
    <div className="border m-10">
      <ul className='flex'>
        <li className='bg-purple-200 m-5 p-5'>1</li>
        <li className='bg-purple-200 m-5 p-5'>2</li>
        <li className='bg-purple-200 m-5 p-5 '>3</li>
        <li className='bg-purple-200 m-5 p-5 '>4</li>
        <li className='bg-purple-200 m-5 p-5 '>5</li>
      </ul>
    </div>
    <div className="border m-10">
      <ul className='flex flex-col'>
        <li className='bg-purple-200 m-5 p-5'>1</li>
        <li className='bg-purple-200 m-5 p-5'>2</li>
        <li className='bg-purple-200 m-5 p-5'>3</li>
        <li className='bg-purple-200 m-5 p-5'>4</li>
        <li className='bg-purple-200 m-5 p-5'>5</li>
      </ul>
    </div>
    <h1 className="text-center text-xl my-5">Justify Content</h1>
    <div className="border m-10">
      <ul className='flex justify-around'>
        <li className='bg-purple-200 m-5 p-5'>1</li>
        <li className='bg-purple-200 m-5 p-5'>2</li>
        <li className='bg-purple-200 m-5 p-5'>3</li>
        <li className='bg-purple-200 m-5 p-5'>4</li>
        <li className='bg-purple-200 m-5 p-5'>5</li>
      </ul>
    </div>
    <h1 className="text-center text-xl my-5">Order  </h1>
    <div className="border m-10">
      <ul className='flex'>
        <li className='bg-purple-200 m-5 p-5 order-5'>1</li>
        <li className='bg-purple-200 m-5 p-5 order-4'>2</li>
        <li className='bg-purple-200 m-5 p-5 order-2'>3</li>
        <li className='bg-purple-200 m-5 p-5 order-1'>4</li>
        <li className='bg-purple-200 m-5 p-5 order-3'>5</li>
      </ul>
    </div>

    <h1 className="text-center text-xl my-5">Grow and Shrink</h1>
    <div className="border m-10">
      <ul className='flex w-10'>
        <li className='bg-purple-200 m-5 p-5 w-64 flex-none'>1</li>
        <li className='bg-purple-200 m-5 p-5 flex-initial'>2</li>
        <li className='bg-purple-200 m-5 p-5 flex-auto'>3</li>
        <li className='bg-purple-200 m-5 p-5 flex-1'>4</li>
        <li className='bg-purple-200 m-5 p-5'>5</li>
      </ul>
    </div>

    
    </>
  )
}

export default Flexbox;