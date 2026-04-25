import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef(({ className, layout = "vertical", ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root 
      className={cn(
        "grid gap-2 sm:gap-3",
        layout === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-flow-row",
        className
      )} 
      {...props} 
      ref={ref} 
    />
  );
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef(({ className, size = "default", ...props }, ref) => {
  // Responsive size variants
  const sizeClasses = {
    sm: "h-3 w-3 sm:h-3.5 sm:w-3.5",
    default: "h-4 w-4 sm:h-5 sm:w-5",
    lg: "h-5 w-5 sm:h-6 sm:w-6",
  }

  const indicatorSizeClasses = {
    sm: "h-1.5 w-1.5 sm:h-2 sm:w-2",
    default: "h-2 w-2 sm:h-2.5 sm:w-2.5",
    lg: "h-3 w-3 sm:h-3.5 sm:w-3.5",
  }

  const radioSize = sizeClasses[size] || sizeClasses.default
  const indicatorSize = indicatorSizeClasses[size] || indicatorSizeClasses.default

  return (
    (<RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        radioSize,
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className={cn("fill-current text-current", indicatorSize)} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>)
  );
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }