// components/PageWrapper.tsx
'use client';
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

// const pageTransition = {
//   duration: 0.4,
//   ease: 'easeInOut',
// };

const springTransition = {
    type: 'spring',
    damping: 18,
    stiffness: 120,
};


export default function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        // <motion.div
        //   initial="initial"
        //   animate="animate"
        //   exit="exit"
        //   variants={pageVariants}
        //   transition={pageTransition}
        // >
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={springTransition}
        >

            {children}
        </motion.div>
    );
}
