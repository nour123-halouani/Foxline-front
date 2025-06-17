'use client';

import cn from "@/app/utils/classNames";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  const [first, ...rest] = title?.split(' ');
  const normalText = rest.join(' ');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("w-full flex", className)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="relative inline-block text-xl lg:text-2xl font-bold capitalize"
      >
        <h2 className="inline">
          {first}{' '}
          <span className="font-normal">{normalText}</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "40%" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute -bottom-1 h-[3px] bg-gold rounded-sm"
        />
      </motion.div>
    </div>
  );
}
