import React from 'react';
import { motion,useMotionValue,useTransform } from 'framer-motion';
const Practice = () => {

    const x = useMotionValue(0)
    const opacity = useTransform(x, [-10, 0, 100], [0, 2, 0])



    return (
        <div>
            <h1>Practice</h1>


         




        </div>
    );
}

export default Practice;
