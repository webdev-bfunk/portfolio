"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'
import Image from 'next/image'

const services = [
    {
        num: '01',
        title: 'Photography Portfolio',
        description: 'lorem lkadsjfldasjfl ladsflj flkjasdflj jflsdafjl dsafjlk lasjdf lkjflasdj lksdal fjsldagjlsadg ajs jasdlk.',
        image: "/threadsss.png",
        tags: "NextJS, TailwindCSS, Framer-Motion",

    },
    {
        num: '02',
        title: 'Admin Dashboard',
        description: 'lorem lkadsjfldasjfl ladsflj flkjasdflj jflsdafjl dsafjlk lasjdf lkjflasdj lksdal fjsldagjlsadg ajs jasdlk.',
        image: "/brainwave2ss.png",
        tags: "NextJS, TailwindCSS, Framer-Motion",
    },
    {
        num: '03',
        title: 'Personal Blog',
        description: 'lorem lkadsjfldasjfl ladsflj flkjasdflj jflsdafjl dsafjlk lasjdf lkjflasdj lksdal fjsldagjlsadg ajs jasdlk.',
        image: "/genericoss.png",
        tags: "NextJS, TailwindCSS, Framer-Motion",

    },
]


const Work = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
            className="flex  justify-center py-12 xl:py-10">
            <div className="container mx-auto">
                <h2 className='h2 mb-4 text-center'>Past Work</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                    {services.map((item, index) => {
                        return (
                            <div key={index} className='flex-1 flex flex-col gap-6 group bg-[#262629] p-4 rounded-xl '>
                                <div className='w-full flex justify-between items-center '>
                                    <div className="text-4xl font-extrabold text-outline group-hover:text-accent transition-all text-transparent duration-500">
                                        {item.num}
                                    </div>
                                    <Link href={item.num} className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent text-transparent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                        <BsArrowDownRight className='text-primary text-3xl' />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className='text-4xl mb-4 group-hover:text-accent'>{item.title}</h2>
                                {/* image */}
                                <Image src={item.image} alt="" height={600} width={600} className='rounded-2xl' />
                                {/* description */}
                                <p className='text-left text-white/60'>{item.description}</p>
                                <p className='italic'>{item.tags}</p>
                                {/* border */}
                                {/* <div className="border-b border-white/20 w-full mt-6"></div> */}
                            </div>
                        )
                    })}
                </div>

            </div>
        </motion.div>
    )
}

export default Work
