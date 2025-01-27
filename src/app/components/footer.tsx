import React from 'react';
import Link from 'next/link';

export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <div>
        <div>
            <img src="/logo.svg" />
        </div>
        <div>
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