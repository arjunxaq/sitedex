"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
        <nav className="mx-auto my-6 w-[70%] max-w-4xl border border-gray-900 bg-black text-white font-bold flex items-center justify-between rounded-xl shadow-2xl p-4">
  <h3 className="text-lg"><Link href="/">SiteDex</Link></h3>
  <div className="flex gap-10">
    
    <h3 className="cursor-pointer hover:text-gray-300"><Link href="/about">About</Link></h3>
    {/* <h3 className="cursor-pointer hover:text-gray-300">Suggest</h3>
    <h3 className="cursor-pointer hover:text-gray-300">Theme</h3> */}
  </div>
</nav>

    </>
  );
}