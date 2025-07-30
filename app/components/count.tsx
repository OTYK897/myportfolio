"use client"

import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react";


interface Props {
    number: number
    duration: number
}

export default function NumberCount({ number, duration }: Props) {
    const count = useMotionValue(0);
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, number, { duration: duration })
        return () => controls.stop()
    }, [])

    return <motion.pre className="text-2xl text-zinc-700">{rounded}</motion.pre>
}