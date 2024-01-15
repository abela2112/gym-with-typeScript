import { SelectedPage } from '@/shared/types'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    icon:JSX.Element,
    title:string,
    description:string,
    setSelectedPage:(value:SelectedPage)=>void
}

const Benefit = ({icon,title,description,setSelectedPage}: Props) => {
  return (
    <motion.div
    whileInView={{opacity:[0,1],scale:[0.9,1]}}
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}}
    className='rounded-md border-2 border-gray-100 mt-5 px-5 py-10'>
        <div className='mb-4 flex flex-col justify-center p-4 items-center'>
            <div className='rounded-full border-gray-100 bg-primary-100 p-4'>
                {icon}
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='my-3'>{description}</p>
            <a href={`#${SelectedPage.ContactUs}`} onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        className='text-sm text-primary-500 font-bold underline hover:text-secondary-500'
                        >
                        <p>Learn More</p>
                </a>
        </div>
    </motion.div>
  )
}

export default Benefit