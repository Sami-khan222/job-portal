import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, size = "default", ...props }, ref) => {
  // Responsive size variants
  const sizeClasses = {
    sm: "h-8 px-2 text-xs sm:h-9 sm:px-2.5 sm:text-sm",
    default: "h-9 px-3 text-sm sm:h-10 sm:px-4 sm:text-base",
    lg: "h-10 px-4 text-sm sm:h-11 sm:px-5 sm:text-base",
    xl: "h-11 px-5 text-base sm:h-12 sm:px-6 sm:text-lg",
  }

  const responsiveSize = sizeClasses[size] || sizeClasses.default

  return (
    (<input
      type={type}
      className={cn(
        "flex w-full rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        responsiveSize,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }