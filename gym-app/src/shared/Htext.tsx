import React from 'react'

type Props = {
    children:React.ReactNode
}

const Htext = ({children}: Props) => {
  return (
    <h1 className='font-bold basis-3/5 text-3xl font-montserrat'>
        {children}
    </h1>
  )
}

export default Htext