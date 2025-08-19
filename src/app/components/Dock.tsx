"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import {
  Children,
  cloneElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface DockItemProps {
  children: ReactElement;
  className?: string;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: {
    mass: number;
    stiffness: number;
    damping: number;
  };
  distance: number;
  magnification: number;
  baseItemSize: number;
}

function DockItem({
  children,
  className = "",
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isItemHovered, setIsItemHovered] = useState(false);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onMouseEnter={() => setIsItemHovered(true)}
      onMouseLeave={() => setIsItemHovered(false)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center 
                bg-transparent 
                ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      <DockIcon>{(children as any).props.children[0]}</DockIcon>
      <DockLabel isHovered={isItemHovered}>
        {(children as any).props.children[1].props.children}
      </DockLabel>
    </motion.div>
  );
}

interface DockLabelProps {
  children: ReactNode;
  className?: string;
  isHovered: boolean;
}

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre 
            rounded-md border 
            border-black/10 dark:border-neutral-700 
            bg-transparent
            px-2 py-0.5 text-xs 
            text-black dark:text-white`}
          role="tooltip"
          style={{ x: "-50%" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface DockIconProps {
  children: ReactNode;
  className?: string;
}

function DockIcon({ children, className = "" }: DockIconProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export interface DockItemData {
  label: string;
  icon: ReactElement;
  onClick?: () => void;
  className?: string;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  spring?: {
    mass: number;
    stiffness: number;
    damping: number;
  };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{ height, scrollbarWidth: "none" }}
      className="hidden sm:flex mx-2 max-w-full items-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-2 border-black/10 dark:border-white/10 pb-2 px-4`}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <>
              <DockIcon>{item.icon}</DockIcon>
              <DockLabel isHovered={false}>{item.label}</DockLabel>
            </>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}