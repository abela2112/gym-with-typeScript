import React from 'react'
import Logo from '@/assets/Logo (3).png'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='mx-auto justify-between w-5/6 gap-16 md:flex '>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maiores esse officiis dolorem, porro fugit? Harum, possimus inventore voluptatibus neque eligendi porro laudantium minus illo atque dicta dolor doloremque distinctio.</p>
                <p> &copy; EVOGYM ALL RIGHTS RESERVED.</p>
            </div>
            <div className='mt-16 md:mt-0 basis-1/4'>
                <h4 className='font-bold'>LINKS</h4>
                <p className="my-5">uwegoufwpiesfpkfwpnpig</p>
                <p className="my-5">ewfn[oem[o[o3irej[o</p>
                <p className="my-5">jenwfknreo[gj]oj</p>
            </div>
            <div className='mt-16 md:mt-0 basis-1/4'>
                <h4 className='font-bold'>LINKS</h4>
                <p className="my-5">uwegoufwpiesfpkfwpnpig</p>
                <p className="my-5">ewfn[oem[o[o3irej[o</p>
                <p className="my-5">jenwfknreo[gj]oj</p>
            </div>
        </div>

    </footer>
  )
}

export default Footer