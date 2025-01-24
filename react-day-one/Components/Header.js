import Link from 'next/link';
import React from 'react'

function Header({logo}) {
  return (
    <div className="h-[80px] px-10 font-bold bg-red-400 flex font-2xl items-center justify-between">
      <h1>{logo}</h1>
      <div className="font-2xl font-light flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/Career">Career</Link>
        <Link href="/Blog">Blog</Link>
        <Link href="Account">Account</Link>
      </div>
    </div>
  );
}

export default Header