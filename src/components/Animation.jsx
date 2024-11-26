import React from 'react'

const Animation = () => {
  return (
    <>
      <div className='p-10 mb-10'>
        <button className="p-5 text-white bg-blue-500 hover:bg-blue-900">Click Me</button>
        <button className='ml-5 p-5 bg-blue-500 transition hover:bg-teal-500'> Click Now</button>
      </div>

      <div className="mx-10 flex justify-between space-x-3">
        <div className="p-10 bg-teal-300 animate-spin"></div>
        <div className="p-10 bg-teal-300 animate-ping"></div>
        <div className="p-10 bg-teal-300 animate-pulse"></div>
        <div className="p-10 bg-teal-300 animate-bounce"></div>
      </div>
    </>
  )
}

export default Animation