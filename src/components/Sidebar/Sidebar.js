import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'

const Sidebar = () => {

    const [select,Setselect]=useState(0)

    const changeActive=(index)=>{
        Setselect(index);
    }

  return (
    <div className='Sidebar'>
        <div className='logo'>
        <img src={Logo} alt="a" className='logo_img'/>
        <span>
            Sh
            <span>o</span>
            ps
        </span>
        </div>
        <div className='menu'>
            {SidebarData.map((item,index)=>{
                return(
                    <>
                    <div className={
                        select===index?'menu-items active':'menu-items'}
                        key={index}
                        onClick={()=>Setselect(index)} >
                        <item.icon/>
                        <span>{item.heading}</span>

                    </div>
                    </>
                )
            })}
        <div className='menu-items'>
            <UilSignOutAlt/>
        </div>

        </div>
        
      
    </div>
  )
}

export default Sidebar
