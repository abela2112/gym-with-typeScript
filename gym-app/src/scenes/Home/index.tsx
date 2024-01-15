import React from 'react'
import HomePageText from '@/assets/HomePageText.png'
import HomepageGraphic from '@/assets/HomePageGraphic.png'
import RedBull from '@/assets/SponsorRedBull.png'
import Forbes from '@/assets/SponsorForbes.png'
import Fortune from '@/assets/SponsorFortune.png'
import ActionButton from '@/shared/ActionButton'
import {SelectedPage} from '@/shared/types'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediaScreen=useMediaQuery('(min-width:1060px)')
  return (
    <section id='home' className='bg-gray-20 gap-16 py-10 mb-0 md:h-full'>
        {/* image and main-header */}
     <motion.div 
     onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
     className='width-5/6 mx-auto items-center justify-center p-20 md:flex md:h-5/6'>
           <div className='md:basis-3/5 z-10 mt-32'>
               
               {/* {motion} */}
                <motion.div
                whileInView={{opacity:[0,1],x:[-50,0]}}
                // viewport={{once:true,amount:0.5}}
                transition={{duration:0.5}}
                className='-mt-20'>
                    <div className='relative'>
                        <div className='before:absolute before:-left-20 before:z-[-1] before:-top-20 md:before:content-evolvetext'>
                        <img src={HomePageText} alt="home page text" />
                        </div>
                    </div>
                    <p className='mt-8 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, explicabo veniam libero ratione vel iste. Vel repudiandae praesentium cumque at soluta, rerum iusto beatae optio consequatur quasi error corrupti? Deleniti?</p>
          
               </motion.div>
            {/* ACTION */}
                    <motion.div
                        whileInView={{opacity:[0,1],x:[-50,0]}}
                        transition={{delay:0.2,duration:0.5}}
                        className='mt-8 flex gap-8 items-center'>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <a href={`#${SelectedPage.ContactUs}`} onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
                        className='text-sm text-primary-500 font-bold underline hover:text-secondary-500'
                        >
                        <p>Learn More</p>
                </a>
                    </motion.div>
             </div>

       
        {/* image */}
        <div className='flex justify-center md:z-10 md:ml-4 md:mt-16 md:justify-items-end'>
            <img src={HomepageGraphic} alt="home page graphic" />
        </div>
     </motion.div>
     {/* sponcers */}
     {isAboveMediaScreen && (
    <div className='h-[150px] bg-primary-100 py-10'>
        <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 justify-between items-center gap-8'>
                <img src={RedBull} alt="red bull" />
                <img src={Forbes} alt="forbes image" />
                <img src={Fortune} alt="fortune image" />
            </div>
        </div>
    </div>
)}
    </section>
  )
}

export default Home