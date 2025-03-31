'use client'; // Marca o componente como Client Component

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  delay?: number;
}

function TypingEffect({ text, delay = 0 }: TypingEffectProps) {
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${i}ch`, // Aumenta a largura para simular a digitação
          transition: { duration: 0.1, delay: delay + i * 0.0001 }, // Delay entre cada letra
        });
      }
    };

    animateText();
  }, [controls, text, delay]);

  return (
    <motion.div
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '0ch',
      }}
      animate={controls}
    >
      {text}
    </motion.div>
  );
}

export default TypingEffect;