import React from 'react'

const ImgGrid = () => {
  return (
    <div className='grid grid-cols-3 h-96 mt-10 gap-6'>
      <div className='h-full rounded-lg grid grid-row-4 gap-6'>
        <div className='row-span-3 border border-yellow-500 rounded-lg'>

        </div>
        <div className='border border-yellow-500 rounded-lg'></div>
      </div>
      <div className='h-full rounded-lg col-span-2 grid grid-rows-2 gap-6 '>
        <div className='rounded-lg grid grid-cols-2 gap-6'>
          <div className='border border-green-500 rounded-lg'></div>
          <div className='border border-green-500 rounded-lg'></div>
        </div>
        <div className='border border-red-500 rounded-lg'></div>
      </div>
    </div>
  )
}

export default ImgGrid
