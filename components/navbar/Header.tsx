"use client"

import React, { useState } from 'react'
import logo from '../../public/shield.png'
import logo_2 from '../../public/PhP.png'
import Image from 'next/image'
import Navlinks from './Navlinks'
import Link from 'next/link'
import Button from './Button'


const Header = () => {
    const [open ,setOpen] = useState(false)
    return (
        <nav className='bg-slate-800 '>
            <div className='flex items-center justify-around'>

                <ul className='md:flex hidden flex items-center gap-8 font-[Poppins] text-white font-bold '>
                    <li>
                        <Link href='/' className='py-2 px-3 inline-block'>
                            <Image src={logo_2} className='h-40 w-40 object-contain md:cursor-pointer ' alt='logo' />
                        </Link>
                    </li>
                    <Navlinks />
                </ul>
                <div className='md:block hidden'>
                    <Button />
                </div>

                {/* mobile nav */}
                
                    <ul className={`md:hidden bg-gray-800 absolute w-full h-full 
                    py-24 pl-4 text-white font-bold duration-500 ${open ? 'top-0' : 'top-[-100%]'}`}>
                        <li>
                            <Link href='/' className='py-2 px-3 inline-block'>
                                <Image src={logo_2} className='h-40 w-40 object-contain md:cursor-pointer ' alt='logo' />

                            </Link>
                        </li>
                        <Navlinks />
                        <div className='py-5'>
                        <Button />
                        </div>
                    </ul>
                    <div className='z-50 p-5 w-full md:w-24 flex justify-between  '>

                    <Image src={logo} className=' h-14 w-14 object-contain md:cursor-pointer ' alt='logo' />
                    <div className='text-white text-3xl md:hidden' onClick={() => setOpen(!open)}>
                   <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>

                    </div>
                    </div>
                
            </div>
        </nav>
    )
}

export default Header
