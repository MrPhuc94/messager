'use client'

import React, { useState } from 'react'
import Logo from '@/app/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import './style.scss';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const hanldeNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className='fixed w-full h-24 shadow-orange-50 shadow-xl text-white navigation'>
            <div className='flex justify-between items-center h-full w-full px-[10px] md:px-[80px] 2xl:px-16'>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        width={100}
                        height={75}
                        className='cursor-pointer'
                        priority
                    />
                </Link>
                <div className='hidden md:flex'>
                    <ul className='hidden md:flex'>
                        <Link href="/auth">
                            <li className='ml-10 hover:border-b text-xl'>
                                Products
                            </li>
                        </Link>
                        <Link href="/auth">
                            <li className='ml-10 hover:border-b text-xl'>
                                Futures
                            </li>
                        </Link> <Link href="/auth">
                            <li className='ml-10 hover:border-b text-xl'>
                                Blog
                            </li>
                        </Link>
                        <Link href="/auth">
                            <li className='ml-10 hover:border-b text-xl'>
                                Contact
                            </li>
                        </Link>
                        <Link href="/auth">
                            <li className='ml-10 hover:border-b text-xl'>
                                Login
                            </li>
                        </Link>
                    </ul>
                </div>
                <div onClick={hanldeNav} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen ? `fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#0B041D] p-10 ease-in duration-500` :
                    `fixed left-[-100%] h-screen top-0 p-10 ease-in duration-500`
            }>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={hanldeNav} className='cursor-pointer'>
                        <AiOutlineClose size={25} color="white" />
                    </div>
                </div>
                <div className=''>
                        <ul className=''>
                            <Link href="/auth">
                                <li className='mb-6 hover:border-b text-xl'>
                                    Why us
                                </li>
                            </Link>
                            <Link href="/auth">
                                <li className='mb-6 hover:border-b text-xl'>
                                    Why us
                                </li>
                            </Link> <Link href="/auth">
                                <li className='mb-6 hover:border-b text-xl'>
                                    Why us
                                </li>
                            </Link> <Link href="/auth">
                                <li className='mb-6 hover:border-b text-xl'>
                                    Why us
                                </li>
                            </Link>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar