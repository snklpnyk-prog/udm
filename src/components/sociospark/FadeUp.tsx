import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function FadeUp({ children, className = "", style }: FadeUpProps) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`fade-up-element ${className}`} style={style}>
      {children}
    </div>
  );
}
