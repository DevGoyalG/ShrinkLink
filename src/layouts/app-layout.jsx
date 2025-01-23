import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <main className="min-h-screen container" >
            <Header/>
            <Outlet/>
        </main>
        {/* <div className="p-10 text-center bg-gray-800 mt-10">
            Made with 💗 by DevGoyalG
        </div> */}

        <div className="p-10 text-center bg-gray-800 mt-10">
        <p className="text-lg font-bold">
            Made with ❤️ by
            <a  href="https://github.com/DevGoyalG" className="text-yellow-400 hover:text-red-300" target="_blank"> Dev Goyal</a>
        </p>
        </div>
    </div>
  )
}

export default AppLayout