import Title from "./Title"
import assets, { devData } from "../assets/assets";
import {motion} from 'motion/react';

const Developers = ({ theme }) => {
    
    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div id="developers" className="flex flex-col items-center gap-5 px-4 sm:px-12 lg:px-24 xl:px-40 pt-1 pb-5 text-gray-800 dark:text-white">
            <Title title="Meet the Developers" desc="The developers behind the game engine."/>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {devData.map((dev, index)=>(
                    <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: index * 0.2}} viewport={{once: true}} 
                    key={index} onClick={()=>handleClick(dev.link)} className="cursor-pointer flex max-sm:flex-col item-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400 mb-5">
                        <img src={dev.image} className="w-20 rounded-full m-auto" alt=""/>
                        <div className="flex-1 min-w-0 text-center sm:text-left w-full">
                            <h3 className="font-bold text-sm">{dev.name}</h3>
                            <p className="text-xs opacity-60">{dev.title}</p>
                            <p className="text-xs opacity-60 truncate sm:whitespace-normal">{dev.email}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}
            onClick={()=>handleClick("https://github.com/jiuuzxc/bala-frontend")} className="cursor-pointer flex max-sm:flex-col item-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400">
            <img src={theme === 'dark' ? assets.github_dark : assets.github} className="w-10 rounded-full m-auto" alt=""/>
                <h3 className="font-bold text-sm m-auto">Github Repository</h3>
            </motion.div>
        </div>
    )
}

export default Developers;