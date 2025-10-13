import Title from "./Title"
import assets, { devData } from "../assets/assets";
import ThemeToggleBtn from './ThemeToggleBtn';

const Developers = ({ theme }) => {
    
    const handleClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <div id="developers" className="flex flex-col items-center gap-5 px-4 sm:px-12 lg:px-24 xl:px-40 pt-1 pb-5 text-gray-800 dark:text-white">
            <Title title="Meet the Developers" desc="The developers behind the game engine."/>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {devData.map((dev, index)=>(
                    <div key={index} onClick={()=>handleClick(dev.link)} className="cursor-pointer flex max-sm:flex-col item-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400 mb-5">
                        <img src={dev.image} className="w-20 rounded-full m-auto" alt=""/>
                        <div className="flex-1 m-auto">
                            <h3 className="font-bold text-sm">{dev.name}</h3>
                            <p className="text-xs opacity-60">{dev.title}</p>
                            <p className="text-xs opacity-60">{dev.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div onClick={()=>handleClick("https://github.com/jiuuzxc/bala-frontend")} className="cursor-pointer flex max-sm:flex-col item-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400">
            <img src={theme === 'dark' ? assets.github_dark : assets.github} className="w-10 rounded-full m-auto" alt=""/>
                <h3 className="font-bold text-sm m-auto">Github Repository</h3>
            </div>
        </div>
    )
}

export default Developers;