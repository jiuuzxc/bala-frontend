import { motion } from 'motion/react'

const Title = ({title, desc}) => {
    return (
        <motion.div initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}} viewport={{once: true}}>
            <h2 className="text-3x1 sm:text-5xl font-medium text-center pt-3">{title}</h2>
            <p className="max-w-lg text-center text-gray-500 dark:text-white/75 mb-4 pt-4">{desc}</p>
        </motion.div>
    )
}

export default Title