import { ClassType, SelectedPage } from '@/shared/types'
import React from 'react'
import {motion} from 'framer-motion'
import Htext from '@/shared/Htext'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import Class from './Class'
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}
const classes:Array<ClassType>=[
    {
     name:'Adventure Tranining',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.',
     image:image1

},
    {
     name:'',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.',
     image:image2

},
    {
     name:'',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.',
     image:image3

},
    {
     name:'',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.',
     image:image4

},
    {
     name:'',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.',
     image:image5

},
    {
     name:'',
     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.',
     image:image6

},
  
]

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourClasses' className='w-full bg-primary-100 py-40'>
    <motion.div
    onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}
    >
        <motion.div whileInView={{opacity:[0,1],x:[-50,0]}}
        transition={{duration:0.5}}
        className='w-5/6 mx-auto'
        >
            <div className='md:3/5'>
                <Htext>Our Classes</Htext>
                <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quasi consequuntur itaque laboriosam deserunt excepturi possimus doloremque iste autem rem, distinctio ex, ratione eligendi odit expedita ipsum quae! Veniam, commodi.</p>
            </div>
        </motion.div>

        <div className='mt-10 w-full h-[353px] overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap'>
                {classes.map((item,index)=>(
                    <Class key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}  />
                ))}
            </ul>
        </div>


    </motion.div>
    </section>
  )
}

export default OurClasses