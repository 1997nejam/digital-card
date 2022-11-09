import React from 'react'

export default function ({about, intrests}) {
  return (
    <div className='px-6 mb-6'>
        <h1 className='font-bold'>About</h1>
        <p className='text-sm'>{about}</p>
        <h1 className='font-bold mt-2'>Intresets</h1>
        <p className='text-sm'>{intrests}</p>
    </div>
  )
}
