import React from 'react'

type Props = {
    name: string,
    description?: string,
    image:string
}

const Class = ({name,description,image}: Props) => {
    const overlayLayout=`p-5 absolute z-30 flex justify-center item-center flex-col h-[380px] w-[450px] whitespace-normal 
    text-center text-white bg-primary-500 opacity-0 transition duration-500 hover:opacity-90`
  return (
    <li className='relative mx-5 inline-block h-[380px] w-[450px]'>
        <div className={`${overlayLayout}`}>
            <p className='text-2xl'>{name}</p>
            <p className='mt-5'>{description}</p>
        </div>
        <img src={`${image}`} alt="image" />
    </li>
  )
}

export default Class