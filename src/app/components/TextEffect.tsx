"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/app/utils/cn";

type TextEffectProps = {
  words: string;
  className?: string;
};

export const TextEffect = ({
  words,
  className,
}: TextEffectProps) => {
  const [scope, animate] = useAnimate();
  const [animationComplete, setAnimationComplete] = useState(false);

  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    ).then(() => {
      setAnimationComplete(true);
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx > 3 ? "text-purple" : "dark:text-white text-white"
                } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="p-5 pt-1">
        <div className="text-white text-4xl leading-snug tracking-wide space-y-2">
          {renderWords()}
          <div>
          {animationComplete && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="font-normal uppercase text-sm text-purple"
            >
              Desenvolvedora front-end
            </motion.p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};