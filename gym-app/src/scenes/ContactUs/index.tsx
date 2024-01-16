import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Htext from '@/shared/Htext'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

type Props = {
    setSelectedPage:(value:SelectedPage)=>void}

const ContactUs = ({setSelectedPage}: Props) => {

    const {
        register,
        trigger,
       
        formState:{
            errors
        }
    }=useForm()

    const onSubmit=async (e:any) => {
const isValid=await trigger()
if (!isValid) {
    e.preventDefault();
  }
}
    const inputStyles=`mb-5 w-full rounded-lg placeholder-white px-5 py-3 bg-primary-300`
  return (
    <section id='contactUs' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
        <motion.div
          whileInView={{opacity:[0,1],x:[50,0]}}
          transition={{duration:0.5}}
          className='md:w-3/5'
          >
            <Htext>
            <span className='text-primary-500'>JOIN NOW</span>{" "}
              TO GET IN SHAPE
             
            </Htext>
            <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo architecto esse nobis, atque, possimus recusandae perspiciatis reiciendis alias a ducimus ex, labore velit natus neque.</p>
          </motion.div>

          {/* FORM AND IMAGE */}
          <div className='mt-10 justify-between gap-8 md:flex'>
               <motion.div
                whileInView={{opacity:[0,1],y:[50,0]}}
                transition={{duration:0.5}}
                className='mt-10 basis-3/5 md:mt-0'
               >
                <form 
                target='_blank'
                method='POST'
                onSubmit={onSubmit}
                action='https://formsubmit.co/f44d8e069f9ae37b06ab5d40d31c6cf1'
                >
                    <input
                     type="text" 
                     placeholder='NAME'
                     className={inputStyles}
                     {...register("name",{
                        required:true,
                        maxLength:100
                     })}
                     />
                     {errors.name&& 
                     <p className='mt-1 text-primary-500'>
                        {errors.name.type==='required' && "this field is required"}
                        {errors.name.type==='maxLength' && "max length is 100"}
                        </p>}
                    <input
                     type="textS" 
                     placeholder='Email'
                     className={inputStyles}
                     {...register("email",{
                        required:true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                     })}
                     />
                     {errors.email&& 
                     <p className='mt-1 text-primary-500'>
                        {errors.email.type==='required' && "this field is required"}
                        {errors.email.type==='pattern' && "invalid email address"}
                        </p>}
                    <textarea
                    rows={4}
                    cols={50}
                    placeholder='MESSAGE'
                     className={inputStyles}
                     {...register("message",{
                        required:true,
                        maxLength:2000
                     })}
                     />
                     {errors.message&& 
                     <p className='mt-1 text-primary-500'>
                        {errors.message.type==='required' && "this field is required"}
                        {errors.message.type==='maxLength' && "max length is 2000"}
                        </p>}

                        <button type='submit' className='mt-5 bg-secondary-400 px-20 py-3 rounded-md transition duration-500 hover:text-white hover'>
                            SUBMIT
                        </button>
                </form>
               </motion.div>

               <motion.div
               whileInView={{opacity:[0,1],y:[50,0]}}
               transition={{delay:0.2, duration:0.5}}
               className='mt-16 relative basis-2/5 md:mt-0'
               >
                  <div className='w-full before:absolute md:before:content-evolvetext before:-bottom-20 before:-right-10 before:z-[-1]'>
                    <img className='w-full' src={ContactUsPageGraphic} alt="contact us page" />
                  </div>
               </motion.div>
          </div>
        </motion.div>
    </section>
  )
}

export default ContactUs