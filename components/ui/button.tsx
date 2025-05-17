import * as React from "react"
  import { Slot } from "@radix-ui/react-slot"
  import { cva, type VariantProps } from "class-variance-authority"
  
  import { cn } from "@/lib/utils"
  
  const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-md",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
          ghost: "hover:bg-accent hover:text-accent-foreground rounded-md",
          link: "text-primary underline-offset-4 hover:underline",
          flatmorphism: "relative overflow-hidden bg-[#e8c4ff] border-[3px] border-[#e8c4ff] text-[#4b0082] shadow-[0_4px_10px_rgba(0,0,0,0.2)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/30 before:to-transparent before:mix-blend-darken after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/100 after:via-black/35 after:to-black/100 after:mix-blend-darken hover:brightness-110 transition-all duration-300 rounded-md",
          copper: "relative bg-[#d2a38d] text-[#3d1b0e] font-semibold border-[1px] border-[#8a5a44] rounded-full shadow-[0_6px_10px_rgba(0,0,0,0.25)] overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/30 before:to-transparent after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/5 after:via-transparent after:to-black/20 hover:brightness-105 active:translate-y-[1px] active:shadow-[0_4px_6px_rgba(0,0,0,0.2)] transition-all duration-200",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )
  
  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
    asChild?: boolean
  }
  
  const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button"
      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
  )
  Button.displayName = "Button"
  
  export { Button, buttonVariants }
  

