import assets from '../assets/assets';

const Hero = () =>  {
    return (
        <div>
            <h1 className="text-4x1 sm:text-5xl md:text-6x1 x1:text-[84px] font-medium x1:leading-[95px] max-w-5x1">
            Begin your game development journey in <span className="bg-gradient-to-r from [#5044E5] to-[#932600] bg-clip-text text-transparent">
            Bala: A 2D Bullet Heaven Game Engine</span>!</h1>
        
            <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
            Bala is a 2D bullet heaven game engine built with Java and LWJGL designed to help novice developers easily create top-down games. 
            It features procedural generation using Simplex and Perlin Noise collision detection with AABB and circle-circle methods and flocking AI for NPC behavior. 
            The engine also includes tools for performance testing through frame time logs.</p>

            <div className="relative">
                <img src={assets.hero_img} alt="" className="w-full max-w-6x1"/>
            </div>

        </div>
    )
}

export default Hero