"use client"
import React, { useState } from 'react'
import { Menu as MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Menu = () => {
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
    return (
        <DropdownMenu>
            <DropdownMenuTrigger><MenuIcon /></DropdownMenuTrigger>

            <DropdownMenuContent className='ml-3 w-52'>

                {navLinks.map((link) => (
                    <Link key={link.label} href={link.href}>

                        <DropdownMenuItem
                            className='text-xl'
                        >{link.label}</DropdownMenuItem>

                    </Link>
                ))}

            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Menu