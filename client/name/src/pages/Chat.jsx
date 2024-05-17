import React from 'react'
import { SideBar } from '../components/chatComponent/SideBar'
import { ZoneChat } from '../components/chatComponent/ZoneChat'

export const Chat=() =>{
  return (
    <div className="flex h-screen">
   
    <SideBar />
    <ZoneChat />
    
    </div>
  )
}

