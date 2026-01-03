# Component Template

This template demonstrates the patterns all atomic components should follow.

## File Structure

For each component (e.g., Button):

```
components/
└── Button/
    ├── Button.tsx          # Component implementation
    ├── Button.test.tsx     # Unit tests
    ├── Button.stories.tsx  # Storybook stories
    ├── Button.types.ts     # Type definitions
    └── index.ts            # Public exports
```

## Component Pattern

```typescript
// Button.types.ts
import { PolymorphicComponentPropWithRef } from '@/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonTone = 'default' | 'success' | 'warning' | 'error'

export type ButtonProps<C extends React.ElementType = 'button'> = 
  PolymorphicComponentPropWithRef<
    C,
    {
      variant?: ButtonVariant
      size?: ButtonSize
      tone?: ButtonTone
      disabled?: boolean
      loading?: boolean
    }
  >

// Button.tsx
import React from 'react'
import { cn } from '@/utils'
import type { ButtonProps } from './Button.types'

const buttonVariants = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary: 'bg-secondary text-white hover:bg-secondary-hover',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost: 'text-primary hover:bg-neutral-100',
}

const buttonSizes = {
  sm: 'px-sm py-xs text-sm',
  md: 'px-md py-sm text-base',
  lg: 'px-lg py-md text-lg',
}

export const Button = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      as,
      variant = 'primary',
      size = 'md',
      tone = 'default',
      disabled = false,
      className,
      children,
      ...props
    }: ButtonProps<C>,
    ref?: React.Ref<HTMLButtonElement>
  ) => {
    const Component = as || 'button'

    return (
      <Component
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          'disabled:pointer-events-none disabled:opacity-50',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Button.displayName = 'Button'

// Button.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies variant styles', () => {
    render(<Button variant="primary">Primary</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-primary')
  })

  it('supports polymorphic as prop', () => {
    render(<Button as="a" href="/link">Link Button</Button>)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})

// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    tone: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const AsLink: Story = {
  args: {
    as: 'a',
    href: '#',
    children: 'Link Button',
  },
}

// index.ts
export { Button } from './Button'
export type { ButtonProps, ButtonVariant, ButtonSize, ButtonTone } from './Button.types'
```

## Key Principles

1. **Token-First**: Use design tokens, never hardcoded values
2. **Variant-Driven**: Consistent API (variant, size, tone, state)
3. **Polymorphic**: Support `as` prop for semantic HTML
4. **Accessible**: Proper ARIA attributes and keyboard support
5. **Type-Safe**: Full TypeScript support with generics
6. **Tested**: Unit tests for all variants and behaviors
7. **Documented**: Storybook stories with controls
8. **Composable**: Clean, predictable API

## Checklist for New Components

- [ ] Component implementation with forwardRef
- [ ] Type definitions with polymorphic support
- [ ] Variant/size/tone props
- [ ] Token-based styling (no hardcoded values)
- [ ] ARIA attributes for accessibility
- [ ] Unit tests (>80% coverage)
- [ ] Storybook stories with all variants
- [ ] Export from components/index.ts
- [ ] Documentation in README

