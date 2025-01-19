"use client"
import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'lorem lkadsjfldasjfl ladsflj flkjasdflj jflsdafjl dsafjlk lasjdf lkjflasdj lksdal fjsldagjlsadg ajs jasdlk.',
    },
    {
        num: '02',
        title: 'UI/UX Design',
        description: 'lorem lkadsjfldasjfl ladsflj flkjasdflj jflsdafjl dsafjlk lasjdf lkjflasdj lksdal fjsldagjlsadg ajs jasdlk.',
    },
    {
        num: '03',
        title: 'Logo Design',
        description: 'Custom branding. Several logo designs.',
    },
    {
        num: '04',
        title: 'SEO',
        description: 'Provide the best search results. Get the most traffic. ',
    },
]

const Services = () => {
    return (


        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <h1 className='h2 my-8 text-center '>Services</h1>
            <div className="container mx-auto">
                <motion.div initial={{ opacity: 0 }} animate={{
                    opacity: 1, transition: {
                        delay: 2.4, duration: 0.4, ease: "easeIn"
                    },
                }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
                    {services.map((item, index) => {
                        return (
                            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                                <div className='w-full flex justify-between items-center'>
                                    <div className="text-4xl font-extrabold text-outline group-hover:text-outline-hover transition-all text-transparent duration-500">
                                        {item.num}
                                    </div>
                                    <Link href={item.num} className='w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent text-transparent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                                        <BsArrowDownRight className='text-primary text-3xl' />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className='h2 mb-4'>{item.title}</h2>
                                {/* description */}
                                <p className='text-left text-white/60'>{item.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full mt-6"></div>
                            </div>
                        )
                    })}

                </motion.div>
            </div>
        </section>

    )
}

export default Services
