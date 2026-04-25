import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      size: {
        sm: "text-[11px] sm:text-xs",
        default: "text-xs sm:text-sm",
        lg: "text-sm sm:text-base",
        xl: "text-base sm:text-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const Label = React.forwardRef(({ className, size = "default", ...props }, ref) => (
  <LabelPrimitive.Root 
    ref={ref} 
    className={cn(labelVariants({ size }), className)} 
    {...props} 
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }