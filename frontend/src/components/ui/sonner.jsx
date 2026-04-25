import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = ({
  position = "bottom-right",
  expand = false,
  richColors = true,
  closeButton = true,
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      className="toaster group"
      position={position}
      expand={expand}
      richColors={richColors}
      closeButton={closeButton}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg text-sm sm:text-base p-3 sm:p-4",
          title: "text-sm sm:text-base font-medium",
          description: "group-[.toast]:text-muted-foreground text-xs sm:text-sm",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground text-xs sm:text-sm h-7 sm:h-8 px-2 sm:px-3",
          closeButton: "h-5 w-5 sm:h-6 sm:w-6 top-2 sm:top-3 right-2 sm:right-3",
        },
      }}
      {...props} />)
  );
}

export { Toaster }