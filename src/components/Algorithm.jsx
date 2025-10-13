import AlgorithmCard from "./AlgorithmCard"
import Title from "./Title"
import { algorithm_logo } from "../assets/assets"
import {motion} from 'motion/react';

const Algorithm = () => {
    const algorithmsUsed = [
        {
            title: "Simplex Noise",
            description: "Similarly to the Perlin noise, this algorithm is used to procedurally create 2D backgrounds and spawn points. It was selected because it is faster than Perlin noise with lesser artifacts (GarageFarm.NET, 2025; Peters, 2021) though it is more complex to implement.",
            icon: algorithm_logo.simplex
        },
        {
            title: "Perlin Noise",
            description: "This algorithm is used for procedurally creating 2D backgrounds and spawn points. It was selected because of its simplicity (Shen, 2022) and for not requiring a large storage for data (Andrian et al., 2023).",
            icon: algorithm_logo.perlin
        },
        {
            title: "Axis-Aligned Bounding Boxes",
            description: "This algorithm is used for its accuracy compared to the Circle-Circle collision, since it allows for a different length and width unlike a circle where its side has an equal distance to its center as described in its radius. A collision is detected between two rectangles when no gap exists between all the sides of the rectangles (Mileff, 2023; Mozilla Contributors, 2024).",
            icon: algorithm_logo.aabbs
        },
        {
            title: "Circle-circle",
            description: "This algorithm is used for its speed due to being able to calculate when two objects collide by comparing the distance between the two center points of the objects enclosed in a circle hitbox with the sum of their radii. If the distance is less than the sum of radii, the two objects are colliding (Mileff, 2023; Mozilla Contributors, 2024).",
            icon: algorithm_logo.circle
        },
        {
            title: "Flocking",
            description: "This algorithm is used to simulate the behaviour of flocks of animals such as birds and fishes (Failes, 2022) which is helpful in making sure that NPCs, especially enemies, won’t hit each other so that no NPC gets covered.",
            icon: algorithm_logo.flocking
        },
    ]

    return (
        <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} transition={{staggerChildren: 0.2}}
        id="algorithm" className="relative flex flex-col items-center gap-1 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white">
            
            <Title title="Algorithms Used" desc="The developers have selected a total of five algorithms to use in the development of the game engine. These algorithms are the following:"/>

            <div className="flex flex-col md:grid grid-cols-3">
                {algorithmsUsed.map((algorithm, index)=>(
                    <AlgorithmCard key={index} algorithm={algorithm} index={index}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Algorithm