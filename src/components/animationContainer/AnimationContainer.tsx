import { easeInOut } from 'motion';
import { motion } from 'motion/react';

const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.8, delay: 0.2, easeInOut },
    },
};

interface AnimationProps {
    children: React.ReactNode;
    index: number;
}

export default function AnimationContainer({ children, index }: AnimationProps) {
    return (
        <motion.div
            variants={variants}
            key={index}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
