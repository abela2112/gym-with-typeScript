import React from 'react';
import {SelectedPage} from './types';

type Props={
children:React.ReactNode,

setSelectedPage:(value:SelectedPage)=>void
}
const ActionButton=({children,setSelectedPage}:Props)=>{
return <a className='rounded-md bg-secondary-500 hover:bg-primary-500 text-white px-10 py-2'
href={`#${SelectedPage.ContactUs}`}
onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
>
    {children}
    </a>
}

export default ActionButton