import { AttachMoney, LineStyle, PermIdentity, Storefront, Timeline, TrendingUp,BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, Report, WorkOutlined } from '@material-ui/icons'
import React from 'react'


const Sidebar = () => {
  return (
    <div className='flex-1 h-[calc(100vh-50px)] sticky top-[50px] bg-blue-50 '>
      <div className='p-5 text-[#555]'>
        <div className='mb-3'>
            <h3 className='text-sm text-gray-500 font-semibold'>Dashboard</h3>
            <ul className=' list-none p-1'>
                <li  className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <LineStyle  className='mr-1 text-lg' />
                    Home
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <Timeline className='mr-1 text-lg' />
                    Analitics
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <TrendingUp className='mr-1 text-lg' />
                    Sales
                </li>
               
            </ul>
        </div>
        <div className='mb-3'>
            <h3 className='text-sm text-gray-500 font-semibold'>Quick Menu</h3>
            <ul className=' list-none p-1'>
                <li  className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <PermIdentity  className='mr-1 text-lg' />
                    Users
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <Storefront className='mr-1 text-lg' />
                    Products
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <AttachMoney className='mr-1 text-lg' />
                    Transactions
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <BarChart className='mr-1 text-lg' />
                    Reports
                </li>
               
            </ul>
        </div>
        <div className='mb-3'>
            <h3 className='text-sm text-gray-500 font-semibold'>Notifications</h3>
            <ul className=' list-none p-1'>
                <li  className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <MailOutline  className='mr-1 text-lg' />
                    Mail
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <DynamicFeed className='mr-1 text-lg' />
                    feedback
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <ChatBubbleOutline className='mr-1 text-lg' />
                    Messages
                </li>
               
            </ul>
        </div>
        <div className='mb-3'>
            <h3 className='text-sm text-gray-500 font-semibold'>Staff</h3>
            <ul className=' list-none p-1'>
                <li  className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <WorkOutlined  className='mr-1 text-lg' />
                    Manage
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <Timeline className='mr-1 text-lg' />
                    Analytics
                </li>
                <li className={`p-1 cursor-pointer flex items-center rounded-lg hover:bg-blue-100`}>
                    <Report className='mr-1 text-lg' />
                    Reports
                </li>
               
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
