import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='bg-[#a3b1cf]'>
     <div className='container mx-auto flex justify-between items-center px-10 h-[70px] bg-[#a3b1cf]'>
       <div>
       <Link href={'/'}><Image src={'/girls blog.png'} alt='logo' width={90} height={70}/></Link>
       </div>
       <ul className='flex space-x-5'>
       <Link href={'/'}><li className='text-[#283b60] font-bold text-2xl'>Home</li> </Link>
       <Link href={'/#sec'}> <li className='text-[#283b60] font-bold text-2xl'>Books</li></Link>
       </ul>
     </div>
    </header>
  )
}
