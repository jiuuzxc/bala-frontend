import { files } from '../assets/assets';
import { motion } from 'motion/react';

const Hero = () => {
    return (
        <div className='flex flex-col items-center gap-6 py-8 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700'>
            <motion.h1 initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.6, delay: 0.8}} viewport={{once: true}}
            className="text-4x1 sm:text-5xl md:text-6x1 x1:text-[84px] font-medium x1:leading-[95px] max-w-5x1 dark:text-white"> Begin your game development journey in <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Bala: A 2D Bullet Heaven Game Engine</span>!</motion.h1>

            <motion.p initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 1}} viewport={{once: true}}
            className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5">Bala is a 2D bullet heaven game engine built with Java and LWJGL designed to help novice developers easily create top-down games. It features procedural generation using Simplex and Perlin Noise collision detection with AABBs and circle-circle methods and flocking AI for NPC behavior. The engine also includes tools for performance testing through frame time logs.</motion.p>

            <motion.div initial={{opacity: 0, y: 0.9}} whileInView={{opacity: 1, y: 1}} transition={{duration: 0.6, delay: 1.5}} viewport={{once: true}}
            className="relative">
                <video className="VideoTag w-full aspect-video h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] shadow-lg rounded-lg mb-5" autoPlay loop muted src={files.demoBala} type="video/mp4" alt=""/>
            </motion.div>
        </div>
    )
}

export default Hero