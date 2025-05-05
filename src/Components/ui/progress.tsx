"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

// Modified Progress component for better visual contrast
const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }: React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, ref: React.Ref<HTMLDivElement>) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-[rgba(255, 255, 255, 0.1)]",// Changed background to contrast with indicator
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-white transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)`, backgroundColor: "rgba(255, 255, 255, 0.1)" }} // Changed background color for better contrast
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }