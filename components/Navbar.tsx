import authOption from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link';
import React from 'react'
import LogoutButton from './Buttons/LogoutButton';
import { buttonVariants } from './ui/button';
import Menu from './Menu';


const Navbar = async () => {
    const session = await getServerSession(authOption);

    const navLinks = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'About',
            href: '/about'
        },
        {
            label: 'Contact',
            href: '/contact'
        },
    ]

    const buttons = [
        {
            label: 'Login',
            href: '/login'
        },
        {
            label: 'Register',
            href: '/register'
        },
        {
            label: 'Logout',
            href: '/logout'
        },

    ]

    return (
        <div className='fixed w-full flex justify-between md:p-5 border-b items-center bg-transparent/90
            p-5
        '>
            <div className="md:hidden top-7 left-5 absolute">
                <Menu />
            </div>
            <div className='md:pl-0 pl-12'>
                <p
                    className={`
                        text-2xl
                        font-bold
                        cursor-pointer
                        select-none
                        // linear text gradient
                        bg-clip-text
                        text-transparent
                        bg-gradient-to-r from-pink-700 via-blue-600 to-purple-600
                        

                    `}>
                    My App
                </p>
            </div>
            <div
                className='hidden md:block'
            >
                <ul className='flex gap-5'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}
                                className={`
                                    ${buttonVariants({ variant: 'link' })}
                                    cursor-pointer
                                    select-none
                                `}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div

            >
                {session ? (
                    <LogoutButton />

                ) : (
                    <div className='flex gap-4'>
                        {/* <Link href='/sign-up'
                            className={`${buttonVariants({ variant: 'outline' })}`}
                        >
                            Register
                        </Link> */}
                        <Link href='/sign-in'
                            className={`${buttonVariants({ variant: 'default' })}`}
                        >
                            Login
                        </Link>

                    </div>
                )}

            </div>

        </div>
    )
}

export default Navbar