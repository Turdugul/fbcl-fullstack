import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined'
  children: React.ReactNode
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseClasses = 'rounded-lg transition-all duration-200'
    
    const variants = {
      default: 'bg-white shadow-sm hover:shadow-md',
      elevated: 'bg-white shadow-lg hover:shadow-xl',
      outlined: 'bg-white border border-gray-200 hover:border-gray-300'
    }
    
    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card 