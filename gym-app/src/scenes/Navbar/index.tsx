import { Bars3Icon,XMarkIcon } from "@heroicons/react/20/solid"
import Logo from '@/assets/Logo (3).png'
import {useState} from 'react'
import Link from './Link.tsx'
import {SelectedPage} from "@/shared/types.ts"
import useMediaQuery from "@/hooks/useMediaQuery.tsx"
import ActionButton from "@/shared/ActionButton.tsx"
type Props = {
  isTopPage: boolean,
    selectedPage:SelectedPage
    setSelectedPage:(value:SelectedPage)=>void
}

const Navbar = ({isTopPage,selectedPage,setSelectedPage}: Props) => {
    const flexBetween='flex justify-between items-center'
    const isAboveMediaScreen=useMediaQuery('(min-width:1060px)')
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
    const background=isTopPage ? "":"bg-primary-100 drop-shadow"
  return (
    <nav>
        <div className={`${background} ${flexBetween} w-full fixed top-0 right-0 left-0 z-30 py-6`}>
           <div className={`${flexBetween} mx-auto w-5/6`}>
              <div className={`${flexBetween} w-full gap-16`}>
                <img src={Logo} alt="logo" />
                {isAboveMediaScreen ? <div className={`${flexBetween} w-full gap-8`}>
                     <div className={`${flexBetween}  gap-8 text-sm`}>
                      {["Home","Benefits","Our Classes","Contact Us"].map((item,index)=>(
                        <Link page={item}
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                         key={index}
                         />
                      ))}
                     
                     </div>
                     <div className={`${flexBetween} gap-8`}>
                      <p>Sign Up</p>
                      <ActionButton setSelectedPage={setSelectedPage} >Become a member</ActionButton>
                     </div>
                </div>:
                <button type="button" className="rounded-full bg-secondary-500 text-white p-2"
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className="w-6 h-6 text-white"/>
                  </button>}

                  {!isAboveMediaScreen && isMenuOpen && (
                    <div className="fixed top-0 bottom-0 right-0 w-[300px] z-40 bg-primary-300 backdrop-blur-xl ">
                      <div className="flex justify-end items-center p-12">
                        <XMarkIcon onClick={()=>setIsMenuOpen(!isMenuOpen)} className="h-6 w-6 text-gray-50"/>
                      </div>
                      <div className={`flex flex-col gap-8 text-2xl ml-[33%]`}>
                      {["Home","Benefits","Our Classes","Contact Us"].map((item,index)=>(
                        <Link page={item}
                         selectedPage={selectedPage}
                         setSelectedPage={setSelectedPage}
                         key={index + selectedPage}
                         />
                      ))}
                     
                     </div>
                    </div>
  )}
              </div>
             
  
           </div>
        </div>
    </nav>
  )
}

export default Navbar