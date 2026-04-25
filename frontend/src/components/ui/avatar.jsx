import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef(({ className, size = "md", ...props }, ref) => {
  // Size mapping for responsive avatars
  const sizeClasses = {
    xs: "h-6 w-6 sm:h-8 sm:w-8",
    sm: "h-8 w-8 sm:h-10 sm:w-10",
    md: "h-10 w-10 sm:h-12 sm:w-12",
    lg: "h-12 w-12 sm:h-14 sm:w-14",
    xl: "h-14 w-14 sm:h-16 sm:w-16",
    "2xl": "h-16 w-16 sm:h-20 sm:w-20",
    "3xl": "h-20 w-20 sm:h-24 sm:w-24",
    "4xl": "h-24 w-24 sm:h-28 sm:w-28",
  }

  const defaultSize = sizeClasses[size] || sizeClasses.md
  
  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex shrink-0 overflow-hidden rounded-full",
        defaultSize,
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props} />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-xs sm:text-sm font-medium",
      className
    )}
    {...props} />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }