'use client';

import cn from "@/app/utils/class-names";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TitleProps {
  title: string;
  className?: string;
}

export default function Title({ title, className }: TitleProps) {
  const [first, ...rest] = title.split(' ');
  const normalText = rest.join(' ');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={cn("flex flex-wrap gap-2 w-full text-center", className)}>
      <div className="relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl lg:text-2xl font-bold text-typography capitalize"
        >
          {first}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "85%" } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="absolute -bottom-1 h-[3px] bg-gold rounded-sm"
        />
      </div>
      {normalText && (
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl lg:text-2xl text-typography"
        >
          {normalText}
        </motion.h2>
      )}
    </div>
  );
}

