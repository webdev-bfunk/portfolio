"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaUser } from 'react-icons/fa'

const info = [
    {
        icon: <FaUser />,
        title: "Name",
        description: "Brandon Funk",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "616-432-8643",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "therealbfunk@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        description: "Hudsonville, Michigan",
    },
]


const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none mb-8 md:mb-4">
                        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl '>
                            <h3 className='text-4xl text-accent'>Lets work together</h3>
                            <p className="text-white/60">
                                Please feel free to reach out to me with any questions, comments, or potential freelance opportunities you made need help completing. Thank you for viewing my portfolio.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstName" placeholder="First Name" className="text-input" />
                                <Input type="lastName" placeholder="Last Name (*Optional)" className="text-input" />
                                <Input type="email" placeholder="Email" className="text-input" />
                                <Input type="phone" placeholder="Phone Number (*Optional)" className="text-input" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">UI/UX Design</SelectItem>
                                        <SelectItem value="mst">Logo Design</SelectItem>
                                        <SelectItem value="wst">Branding/Marketing</SelectItem>
                                        <SelectItem value="sst">Other/None</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea className="h-[200px] text-lg resize-none " placeholder="Type your message here." />
                            <Button size="md" className="max-w-40">Send message</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className='flex flex-col gap-10 xl:gap-20'>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-6'>
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className='text-white/60'>{item.title}</p>
                                            <h3 className='text-xl'>{item.description}</h3>
                                        </div>
                                    </li>)
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>

    )
}

export default Contact
