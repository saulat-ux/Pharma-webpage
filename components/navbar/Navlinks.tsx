"use client"

import React from 'react'
import {useState} from 'react'
import Link from 'next/link'
import { links } from './LinksDb'

const Navlinks = () => {
    const [heading ,setHeading] = useState("")
    const [subHeading ,setSubHeading] = useState("")



    const handleClick = (clickedLink) => {
        setSubObject((prevLinks) =>
          prevLinks.map((link) =>
            link.name === clickedLink.name
              ? { ...link, submenu: !link.submenu }
              : link
          )
        );
      };
    
    const [subObject , setSubObject] = useState(links)
    console.log(subObject)
   
  return (
    <>
    {
        subObject.map((link,index) => (
            <div key={index}>
                <div className='px-3 text-left md:cursor-pointer' onClick={ () => handleClick(link)}>
                    <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5 ' onClick={ () => {heading !== link.name ?  setHeading(link.name) : setHeading("");
                    setSubHeading("")}}
                    
                    >{link.name} 
                    <span className='text-xl md:mt-1 md:ml-2 inline'>
                    <ion-icon name= {`${heading === link.name ? "chevron-up" : "chevron-down"}`}></ion-icon>
                    </span>
                    
                     </h1>
                    
                    {link.submenu && (
                        <div>
                            <div className={`absolute top-15 md:${link.submenu ? 'block' : 'hidden'} `}>
                                {/* <div className='py-3'>
                                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 hidden md:block '></div>
                                </div> */}
                                <div className='bg-slate-800 p-10 hidden md:block'>
                                    <div className='grid grid-cols-3 gap-10'>

                                    { link.sublinks && link.sublinks.map((mysublinks,index) => (
                                        <div key={index}>
                                            <h1 className='text-lg font-semibold'>{mysublinks.head}</h1>
                                                {mysublinks.sublink.map((slink,index) => (
                                                    <li className='my-2.5 text-sm' key={index}>
                                                        <Link href={slink.link}>{slink.name}</Link>
                                                    </li>
                                                ))}
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* mobile view */}
                <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                    {/* sublinks */}
                    { link.sublinks &&
                          link.sublinks.map((slink,index) => (
                            <div key={index}>
                                <div>
                                    <h1 onClick={ () => subHeading !== slink.head ?  setSubHeading(slink.head) : setSubHeading("")}
                                     className='py-4 pl-7 font-semibold md:pr-0 pr-5 
                                     flex justify-between items-center'>{slink.head}
                                      <span className='text-xl md:mt-1 md:ml-2 inline'>
                                        <ion-icon name= {`${subHeading === slink.head ? "chevron-up" : "chevron-down"}`}></ion-icon>
                                         </span>
                    
                                     </h1>
                                    <div className={`${ subHeading === slink.head ? "md:hidden" : "hidden"}`}>
                                        {slink.sublink && slink.sublink.map((slink, i) => (
                                            <li className='py-3 pl-14' key={i}>
                                                <Link href={slink.link}>{slink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                          ))
                    }
                </div>
            </div>
        ))
    }
    
    </>
  )
}

export default Navlinks
