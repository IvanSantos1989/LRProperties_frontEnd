import React from 'react'
import { MoonLoader } from 'react-spinners'

function LoadingSpinner({speed, color, size, title, margin}) {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <MoonLoader className={`my-${margin}`} size={size} color={color} speedMultiplier={speed} />
        <p className='text-3xl text-gray-400 dark:text-white'>{title}</p>
    </div>
  )
}

export default LoadingSpinner