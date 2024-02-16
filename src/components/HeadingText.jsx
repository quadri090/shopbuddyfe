import React from 'react'

export default function HeadingText(props) {
  return (
    <div className='text-zinc-800'>
        <p className="text-left text-lg font-bold">{props.header}</p>
        <div className="my-4 border border-zinc-100 w-full"></div>
    </div>
  )
}
