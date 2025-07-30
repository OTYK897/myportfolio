'use client'

import { motion, type Variants } from "framer-motion"; 

const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = i * 0.5
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        }
    },
}

export default function PageLogo() {
    return (
        <motion.svg
            width="250"
            height="80"
            viewBox="0 0 200 40"
            initial="hidden"
            animate="visible"
            style={image}
        >
            <motion.line
                x1={20}
                y1={0}
                x2={20}
                y2={40} 
                stroke='#000'
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1={20}
                y1={0}
                x2={50}
                y2={40} 
                stroke='#000'
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1={60}
                y1={0}
                x2={60}
                y2={40} 
                stroke='#000'
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1={60}
                y1={0}
                x2={90}
                y2={0} 
                stroke='#000'
                variants={draw}
                custom={1}
                style={shape}
            />
            <motion.line
                x1={60}
                y1={40}
                x2={90}
                y2={40} 
                stroke='#000'
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1={60}
                y1={20}
                x2={90}
                y2={20} 
                stroke='#000'
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.line
                x1={100}
                y1={0}
                x2={130}
                y2={40} 
                stroke='#000'
                variants={draw}
                custom={3}
                style={shape}
            />
            <motion.line
                x1={115}
                y1={20}
                x2={130}
                y2={0} 
                stroke='#000'
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1={100}
                y1={40}
                x2={113}
                y2={24} 
                stroke='#000'
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1={140}
                y1={0}
                x2={180}
                y2={0} 
                stroke='#000'
                variants={draw}
                custom={2}
                style={shape}
            />
            <motion.line
                x1={160}
                y1={0}
                x2={160}
                y2={40} 
                stroke='#000'
                variants={draw}
                custom={3}
                style={shape}
            />
        </motion.svg>
    )
}

const image: React.CSSProperties = {
    maxWidth: "80vw",
}

const shape: React.CSSProperties = {
    strokeWidth: 1,
    strokeLinecap: "round",
    fill: "transparent",
}