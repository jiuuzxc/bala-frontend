import Title from "./Title"
import { motion } from 'motion/react'

const VideoDemo = () => {
    return (
        <div id="video-demo" className="relative flex flex-col items-center gap-1 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
            <Title title="Video Demonstration" desc="Video demonstration on how to install and use the game engine."/>
            <motion.div initial={{opacity: 0, y: 0.9}} whileInView={{opacity: 1, y: 1}} transition={{duration: 0.6, delay: 0.5}} viewport={{once: true}}>
            <iframe class="w-full aspect-video h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] shadow-lg rounded-lg mb-5" src="https://www.youtube.com/embed/p8qc_Aj8XGo" title="BALA GAME ENGINE DEMO + INSTALLATION" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </motion.div>

        </div>
    )
}

export default VideoDemo