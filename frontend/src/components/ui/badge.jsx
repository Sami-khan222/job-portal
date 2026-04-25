import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:px-2.5 sm:text-xs md:text-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size = "md",
  ...props
}) {
  // Responsive size variants
  const sizeClasses = {
    sm: "px-1.5 py-0.5 text-[10px] sm:px-2 sm:py-0.5 sm:text-xs",
    md: "px-2 py-0.5 text-xs sm:px-2.5 sm:text-xs md:text-sm",
    lg: "px-2.5 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm md:text-base",
    xl: "px-3 py-1.5 text-sm sm:px-4 sm:py-1.5 sm:text-base md:text-lg",
  }

  const responsiveSize = sizeClasses[size] || sizeClasses.md

  return (
    <div 
      className={cn(
        badgeVariants({ variant }), 
        responsiveSize,
        "whitespace-nowrap sm:whitespace-normal",
        className
      )} 
      {...props} 
    />
  );
}

export { Badge, badgeVariants }