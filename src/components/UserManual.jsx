import Title from "./Title"
import { files } from '../assets/assets'

const UserManual = () => {
    return (
        <div id="user-manual" className="relative flex flex-col items-center gap-1 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
            <Title title="User Manual" desc="User manual to guide on how to install the game engine."/>
            <div className="">
                <a href = {files.userManual} target = "_blank" className="underline">BALA Official User Manual:</a>
                <iframe class="w-full aspect-video h-[300px] sm:h-[450px] md:h-[600px] lg:h-[450px] xl:h-[600px] shadow-lg rounded-lg mb-5" src={files.userManual} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default UserManual