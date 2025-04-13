import { useState } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { DecoderText } from "./decoder-text";

interface VisibleDecoderTextProps
  extends Omit<HTMLMotionProps<"div">, "children"> {
  text: string;
  delay?: number;
  className?: string;
}

export const VisibleDecoderText: React.FC<VisibleDecoderTextProps> = ({
  text,
  delay = 0,
  className,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      onViewportEnter={() => setIsVisible(true)}
      {...rest}
    >
      <DecoderText
        text={text}
        start={isVisible}
        delay={delay}
        className={className}
      />
    </motion.div>
  );
};
