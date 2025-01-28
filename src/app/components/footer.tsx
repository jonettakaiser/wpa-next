import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div className='bottom-0 bg-zinc-50 w-full flex flex-col justify-center items-center p-5 gap-5'>
        <div>
            <Image 
                src="/logo.svg"
                alt="wpa svg logo"
                width={200}
                height={200} />
        </div>
        <div className='flex flex-row justify-between gap-5'>
            <a href="https://www.instagram.com/worldpremiereartists/" target='_blank'><img src="/instagram.svg" /></a>
            <a href="https://www.facebook.com/worldpremiereartists" target='_blank'><img src="/facebook.svg" /></a>
        </div>
        <div>
        <Link href="/login">Student Login </Link> · 
        <Link href="/privacy"> Privacy Policy</Link> 
        </div>
        <div>
            &copy; {currentYear} · World Premiere Artists · All Rights Reserved
        </div>
    </div>
  )
}