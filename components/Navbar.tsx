import { Component, Linkedin,Mail,X, } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const socialIcons =[
{name:'Linkedin',component:Linkedin},
{name:'Gmail',component:Mail},
{name:'Twitter',component:X},


];

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex jusitfy-between items-center px-10 md:px-20'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='relative'>
          <Image
          src="/horseLogo.jpg"
          alt="logo"
          width={40}
          height={40}
          className='w-full h-full object-contain rounded-full'
          />
         </div> 
       <h1 className='text-white text-[30px] font-semibold '>Front end 
       <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'> 
              {" "}
              Developer
              </span>
       </h1>      
      </div>
     
     <div className='flex flex-row gap-5 ml-auto'>
      {socialIcons.map((social)=>{
        const Icon = social.component;
        return(
          <Icon
          key={social.name}
          size={50}
          color='white'
          width={30}
          height={30}
          />
        )

      })}
      
       

      
       
       
        

       
     </div>


    </div>
  );
};

export default Navbar;
 
