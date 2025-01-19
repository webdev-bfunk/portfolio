"use client"
import { motion } from 'framer-motion';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from 'react-icons/fa';
import { BsPersonBadgeFill } from "react-icons/bs";
import {
    SiTailwindcss, SiNextDotjs
} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FaCss3Alt } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { RiNextjsFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiPhp, SiAdobephotoshop } from "react-icons/si";
import { RiGithubFill } from "react-icons/ri";
import { DiMongodb, DiJsBadge } from "react-icons/di";
import { Button } from '@/components/ui/button';

// About Data //
const about = {
    title: 'About Me',
    description: "Introducing Brandon Funk, a dynamic and creative professional with a passion for art and photography that extends far beyond the canvas.At the age of 34, Brandon is a devoted father of two who has seamlessly woven his love for family into the tapestry of his professional journey.",
    items: [
        {
            Name: "Brandon Funk",
        },
        {
            Phone: "616-432-8643",
        },
        {
            Email: "TheRealBFunk@gmail.com",
        },
        {
            Born: "Grand Rapids, MI",
        },
        {
            Experience: "2 Years of intense self learing",
        },
        {
            Skills: "HTML, CSS, JS, NextJS, ReactJS, PHP, MongoDB, SupaBase, SCSS, SAAS",
        },
    ]
};

const experience = {
    icon: '<BsPersonBadgeFill />',
    title: 'Web Developer',
    description: "Introducing Brandon Funk, a dynamic and creative professional with a passion for art and photography that extends far beyond the canvas. At the age of 34, Brandon is a devoted father of two who has seamlessly woven his love for family into the tapestry of his professional journey.",
    items: [
        {
            company: 'Tech Solutions Inc',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Freelance',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Google',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Tech Solutions Inc',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Freelance',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Google',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Tech Solutions Inc',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Freelance',
            position: 'Web Developer',
            duration: "2021-2022",
        },
        {
            company: 'Google',
            position: 'Web Developer',
            duration: "2021-2022",
        },
    ],
}

const education = {
    icon: "/cap.svg",
    title: "My education",
    description: "lorem laosdgho kasd kdj fkjlasd fljsf adlkjsadl lkagilk.",
    items: [
        {
            institution: "Grand Rapids Community College",
            position: "Computer support technician",
            duration: "2020",
        },
        {
            institution: "Self Taught",
            position: "Web Developer",
            duration: "2022-Present",
        },
    ],
};




const skills = {
    icon: "/cap.svg",
    title: "Skills",
    description: "lorem laosdgho kasd kdj fkjlasd fljsf adlkjsadl lkagilk.",
    items: [
        {
            icon: <FaCss3Alt size={75} />,
            name: "CSS",
            years: "1 year",
        },
        {
            icon: <FaHtml5 size={75} />,
            name: "HTML",
            years: "2 years",
        },
        {
            icon: <RiNextjsFill size={75} />,
            name: "NextJS",
            years: "2 years",
        },
        {
            icon: <RiReactjsLine size={75} />,
            name: "ReactJS",
            years: "4 years",
        },
        {
            icon: <SiPhp size={75} />,
            name: "PHP",
            years: "3 years",
        },
        {
            icon: <RiGithubFill size={75} />,
            name: "Github",
            years: "5 years",
        },
        {
            icon: <DiJsBadge size={75} />,
            name: "Javascript",
            years: "5 years",
        },
        {
            icon: <DiMongodb size={75} />,
            name: "MongoDB",
            years: "5 years",
        },
        {
            icon: <SiAdobephotoshop size={75} />,
            name: "Photoshop",
            years: "5 years",
        },
        {
            icon: <DiMongodb size={75} />,
            name: "Javascript",
            years: "5 years",
        },
    ],
};





const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-6'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About Me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* about */}
                        <TabsContent value="about" className="w-full">
                            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                            <li className='bg-[#232329]  py-6 px-10 rounded-xl flex gap-4'>
                                <div className="flex flex-col gap-3">
                                    <div className="flex  items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Name: </h3>
                                        <p className='text-white/60'>Brandon Funk</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Phone: </h3>
                                        <p className='text-white/60'>616-432-8643</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Email: </h3>
                                        <p className='text-white/60'>WebDev.BFunk@gmail.com</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Location: </h3>
                                        <p className='text-white/60'>Hudsonville, MI</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Phone: </h3>
                                        <p className='text-white/60'>616-432-8643</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Years of Experience: </h3>
                                        <p className='text-white/60'>2 years</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Language: </h3>
                                        <p className='text-white/60'>English</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                        <h3 className="text-xl ">Available for Freelance work?: </h3>
                                        <p className='text-white/60'>Yes</p>
                                    </div>

                                    <Button href="/contact" variant="outline" size="md">Contact Me</Button>

                                </div>
                            </li>

                        </TabsContent>
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className=" space-y-4">
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span>{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* experience */}
                        <TabsContent value="education" className="w-full">
                            <div className="space-y-4 ">
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <span>{item.duration}</span>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60 text-sm'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px]  xl:text-left">
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.items.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <h3 className="text-xl px-2 py-1 text-accent bg-zinc-700">{item.name}</h3>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div >
        </motion.div >
    )
}

export default Resume
