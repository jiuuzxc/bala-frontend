import { useRef, useState } from "react"
import {motion} from 'motion/react';

const AlgorithmCard = ({algorithm, index}) => {

    const [position, setPosition] = useState({x: 0, y: 0})
    const [visible, setVisible] = useState(false);

    const divRef = useRef(null)

    const handleMouseMove = (e)=>{
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
    }

    return (
        <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: index * 0.2}} viewport={{once: true}}
        className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-x1 border border-gray-200 dark:border-gray-700 shadow-2x1 shadow-gray-100 dark:shadow-white/10" onMouseEnter={()=>setVisible(true)} on onMouseLeave={()=>setVisible(false)} ref={divRef} onMouseMove={handleMouseMove}>

            <div className={`pointer-events-none blur-2x1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? "opacity-70" : "opacity-0"}`} style={{top: position.y - 150, left: position.x - 150}} />
            
            <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative h-full">
            
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full">
                    <img src={algorithm.icon} alt="" className="max-w-15 bg-white dark:bg-gray-900 rounded-full m-2"/>
                </div>
            
                <div className="flex-1">
                    <h3 className="font-bold">{algorithm.title}</h3>
                    <p className="text-sm mt-2">{algorithm.description}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default AlgorithmCard