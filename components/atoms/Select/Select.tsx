import React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { cn } from '@/utils'
import { ChevronDown, Check } from 'lucide-react'
import type { SelectProps, SelectSize } from './Select.types'

const selectSizes: Record<SelectSize, { trigger: string; content: string; item: string }> = {
  sm: {
    trigger: 'h-8 px-3 text-xs',
    content: 'min-w-[8rem]',
    item: 'text-xs py-1.5 px-2',
  },
  md: {
    trigger: 'h-9 px-4 text-sm',
    content: 'min-w-[10rem]',
    item: 'text-sm py-2 px-3',
  },
  lg: {
    trigger: 'h-10 px-4 text-base',
    content: 'min-w-[12rem]',
    item: 'text-base py-2.5 px-4',
  },
}

/**
 * Select component - Dropdown select with Radix UI
 *
 * @example
 * ```tsx
 * <Select
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' },
 *   ]}
 *   value={value}
 *   onValueChange={setValue}
 *   placeholder="Select an option"
 * />
 * ```
 */
export const Select = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      as,
      options,
      value,
      defaultValue,
      placeholder = 'Select...',
      size = 'md',
      disabled = false,
      onValueChange,
      className,
      ...props
    }: SelectProps<C>,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const Component = as || 'div'
    const [open, setOpen] = React.useState(false)

    return (
      <Component ref={ref} {...props}>
        <SelectPrimitive.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          open={open}
          onOpenChange={setOpen}
        >
          <SelectPrimitive.Trigger
            className={cn(
              'inline-flex items-center justify-between gap-2',
              'rounded-full border',
              'bg-white text-neutral-900',
              'shadow-sm',
              'transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-50',
              selectSizes[size].trigger,
              className
            )}
            aria-label="Select option"
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon className="flex-shrink-0">
              <ChevronDown
                size={16}
                className={cn('transition-transform', open && 'rotate-180')}
              />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Portal>
            <SelectPrimitive.Content
              className={cn(
                'relative z-50 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg',
                'data-[state=open]:animate-in data-[state=closed]:animate-out',
                'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
                'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                selectSizes[size].content
              )}
              position="popper"
              sideOffset={4}
            >
              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={cn(
                      'relative flex cursor-pointer select-none items-center rounded-sm',
                      'outline-none focus:bg-neutral-100 focus:text-neutral-900',
                      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                      selectSizes[size].item
                    )}
                  >
                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator className="absolute right-2 flex items-center">
                      <Check size={16} />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </Component>
    )
  }
)

Select.displayName = 'Select'

