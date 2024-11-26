import React from 'react'

const Grid = () => {
  return (
    <>
    <h1 className="text-center text-xl my-5">Grids in Tailwind CSS</h1>
    <div className='w-1/2 ml-96 grid grid-cols-4 grid-row-2 gap-3'>
      <div className="p-10 bg-green-300">01</div>
      <div className="p-10 bg-green-300">02</div>
      <div className="p-10 bg-green-300">03</div>
      <div className="p-10 bg-green-300">04</div>
      <div className="p-10 bg-green-300">05</div>
      <div className="p-10 bg-green-300">06</div>
      <div className="p-10 bg-green-300">07</div>
      <div className="p-10 bg-green-300">08</div>
      <div className="p-10 bg-green-300">09</div>
    </div>

    <h1 className="text-center text-xl my-5">Rows and Columns Span</h1>
    <div className='w-1/2 mt-5 ml-96 grid grid-cols-3 gap-3'>
      <div className="p-10 bg-green-300">01</div>
      <div className="p-10 bg-green-300">02</div>
      <div className="p-10 bg-green-300">03</div>
      <div className="p-10 bg-green-300 col-span-3">04</div>
      <div className="p-10 bg-green-300">05</div>
      <div className="p-10 bg-green-300">06</div>
      <div className="p-10 bg-green-300 row-span-2">07</div>
      <div className="p-10 bg-green-300">08</div>
      <div className="p-10 bg-green-300">09</div>
    </div>
    </>
  )
}

export default Grid