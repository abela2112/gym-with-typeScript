import BenefitsGraphicImage from '@/assets/BenefitsPageGraphic.png'
import ActionButton from '@/shared/ActionButton'
import Htext from '@/shared/Htext'
import { BenefitType, SelectedPage } from '@/shared/types'
import { HomeIcon, HomeModernIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'
import Benefit from './Benefit'
const container={
  hidden:{},
  visible:{
    transition:{
      staggerChildren:0.2
    }
  }
}
type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}
const benefits:Array<BenefitType>=[
  {
    icon:<HomeIcon className='h-6 w-6'/>,
    title:"Lorem ipsum dolor sit ",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In at debitis cumque consequuntur, quae, illo nam quis atque id iusto quidem blanditiis nostrum corporis soluta ad, nesciunt rerum! "},
  {
    icon:<UserGroupIcon className='h-6 w-6'/>,
    title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In at debitis cumque consequuntur, quae, illo nam quis atque id iusto quidem blanditiis nostrum corporis soluta ad, nesciunt rerum! . "
  },
  {
    icon:<HomeModernIcon className='h-6 w-6'/>,
    title:"Expert and Pro Trainers",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. In at debitis cumque consequuntur, quae, illo nam quis atque id iusto quidem blanditiis nostrum corporis soluta ad, nesciunt rerum! ."
  }
]
const Benefits = ({setSelectedPage}: Props) => {

  return (
    <section id='benefits' className='mx-auto min-h-full py-20 w-5/6'>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
                <motion.div
                whileInView={{opacity:[0,1],x:[-50,0]}}
                transition={{duration:0.5}}
                className='md:my-5 md:w-3/5'>
                   <Htext>MORE THAN JUST A JYM.</Htext>
                   <p className='text-sm my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore optio autem, aperiam sunt quos dolorum sequi, enim, itaque in eveniet ducimus alias laboriosam error voluptate corporis amet quaerat! Incidunt nobis consectetur placeat voluptate illo non.</p>
                </motion.div>
               
                {/* benefits */}
<motion.div
initial="hidden"
viewport={{once: true,amount:0.5}}
variants={container}
className='mt-5 justify-between items-center gap-8 md:flex'>
  {benefits.map((benefit:BenefitType,index)=>(
    <Benefit
     key={index} 
     icon={benefit.icon}
     title={benefit.title}
     description={benefit.description}
     setSelectedPage={setSelectedPage}
    />
  ))}
</motion.div>
{/* GRAPHICS AND DESCRIPTION */}
<div className='items-center mt-16 justify-between gap-16 md:mt-28 md:flex'>
<img src={BenefitsGraphicImage}
 alt="benefits graphic image"
 className='mx-auto'
 />
<div>
  {/* title */}
   <div className='relative'>
        <div className='before:absolute before:-top-20 before:-left-20 before::z-[-1] before:content-abstractwaves'>
          <motion.div
          whileInView={{opacity:[0,1],x:[50,0]}}
          transition={{duration:0.5}}
          >
            <Htext>
              MILLIONS OF HAPPY MEMBERS GETTING {" "}
              <span className='text-primary-500'>FIT</span>
            </Htext>
          </motion.div>
        </div>
   </div>
   {/* description */}
   <motion.div
    whileInView={{opacity:[0,1],x:[-50,0]}}
    transition={{delay:0.2,duration:0.5}}
   >
    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste perferendis autem molestias odit ipsam voluptates, veniam rem, ullam fuga expedita, temporibus atque non! Itaque cupiditate quasi quas at. Molestias, in?</p>
    <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste perferendis autem molestias odit ipsam voluptates, veniam rem, ullam fuga expedita, temporibus atque non! Itaque cupiditate quasi quas at. Molestias, in?</p>
   </motion.div>

   {/* buttons */}
<div className='mt-16 relative'>
  <div className='before:absolute before:-bottom-20 before:right-40 z-[-1] before:content-sparkles'>
    <ActionButton setSelectedPage={setSelectedPage} >Join Now</ActionButton>
  </div>

</div>
</div>

</div>

        </motion.div>
    </section>
  )
}

export default Benefits