"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useState } from "react";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  percentage: number;
  isVisible: boolean;
}


// Modified Progress component for better visual contrast
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }: React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, ref: React.Ref<HTMLDivElement>) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-red-400 border",// Changed background to contrast with indicator [rgba(255, 255, 255, 0.1)]
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-white transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundColor: "red" , border:'1px'}} // Changed background color for better contrast
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }


// Progress bar component'
export default function ProgressBar ({ percentage, isVisible }:ProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="w-full border bg-gray-700 rounded-full h-2 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
