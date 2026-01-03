# Design System

A production-grade, token-first, accessible UI component library built with modern web technologies.

[![Tests](https://img.shields.io/badge/tests-437%20passing-success)](.)
[![Components](https://img.shields.io/badge/components-19-blue)](.)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue)](.)
[![Accessibility](https://img.shields.io/badge/a11y-WAI--ARIA-green)](.)

## ✨ Features

- 🎨 **19 Production-Ready Components** - Typography, Forms, Visual Feedback, Layout
- 🎯 **Token-First** - Zero hardcoded values, runtime theming
- ♿ **Accessible** - WAI-ARIA compliant, keyboard navigation
- 📱 **Responsive** - Mobile-first design
- 🔒 **Type-Safe** - Strict TypeScript, full type coverage
- ✅ **Tested** - 437 tests (100% passing)
- 📚 **Documented** - 220+ Storybook stories
- 🎭 **Polymorphic** - Flexible HTML elements
- 🌳 **Tree-Shakeable** - Optimized bundle size
- 🎨 **Poppins Font** - Beautiful typography

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev          # Next.js → http://localhost:3000
npm run storybook    # Storybook → http://localhost:6006
npm run test         # Run tests
```

### Usage

```tsx
import { Typography, Button, Input, Badge } from '@/components'

function MyComponent() {
  return (
    <div>
      <Typography variant="h1">Hello World</Typography>
      <Input label="Email" type="email" required />
      <Button variant="primary">Submit</Button>
      <Badge tone="success">Active</Badge>
    </div>
  )
}
```

## 📦 Components

### Typography & Navigation (2)
- **Typography** - Unified text component (h1-h6, body, lead, etc.)
- **Link** - Accessible hyperlink with external support

### Buttons (2)
- **Button** - Interactive button with variants
- **IconButton** - Icon-only button

### Form Controls (5)
- **Input** - Text input with validation
- **Textarea** - Multi-line input
- **Checkbox** - Checkbox with indeterminate
- **Radio** - Radio button with groups
- **Switch** - Toggle switch

### Visual Feedback (5)
- **Badge** - Status indicator
- **Spinner** - Loading indicator
- **Avatar** - User avatar with status
- **Skeleton** - Loading placeholder
- **Tag** - Removable label

### Layout (5)
- **Box** - Layout primitive
- **Stack** - Flex container
- **Divider** - Visual separator
- **Spacer** - Spacing utility
- **Progress** - Progress bar

## 🎨 Design Tokens

### Colors
- **Primary**: Blue
- **Secondary**: Purple
- **Neutral**: 11-shade gray scale
- **Semantic**: Success, Warning, Error, Info

### Spacing
`xs` (4px) → `sm` (8px) → `md` (16px) → `lg` (24px) → `xl` (32px) → `2xl` (48px)

### Typography
- **Font**: Poppins (400, 500, 600, 700)
- **Sizes**: xs (12px) → 4xl (36px)
- **Weights**: normal, medium, semibold, bold

## 🎯 Design Principles

- ✅ **Token-First** - All design values centralized
- ✅ **Variant-Driven** - Consistent API across components
- ✅ **Polymorphic** - Flexible HTML elements
- ✅ **Accessible** - WAI-ARIA compliant
- ✅ **Type-Safe** - Strict TypeScript
- ✅ **Tested** - Comprehensive test coverage
- ✅ **Documented** - Storybook stories for all components

## 📊 Statistics

- **Components**: 19
- **Tests**: 437 (100% passing)
- **Storybook Stories**: 220+
- **TypeScript**: Strict mode
- **Accessibility**: WAI-ARIA compliant

## 🧪 Testing

```bash
npm run test         # Run tests
npm run test:ui      # Tests with UI
npm run test:coverage # Coverage report
```

All components have comprehensive test coverage including:
- Component rendering
- All variants and sizes
- User interactions
- Accessibility (ARIA)
- Edge cases

## 📚 Documentation

### Storybook
```bash
npm run storybook
```

Visit http://localhost:6006 to explore:
- Interactive component playground
- All variants and sizes
- Usage examples
- Accessibility demos

### Documentation Files
- `SETUP.md` - Installation guide
- `COMPONENT_TEMPLATE.md` - Component patterns
- `TYPOGRAPHY_UNIFIED.md` - Typography system
- `FINAL_SUMMARY.md` - Complete summary
- `PROJECT_COMPLETE_FINAL.md` - Final report

## 🎨 Example

```tsx
import {
  Typography,
  Button,
  Input,
  Checkbox,
  Badge,
  Avatar,
  Box,
  Stack,
  Divider,
} from '@/components'

export default function ProfileCard() {
  return (
    <Box padding="lg" background="white" radius="md" shadow="sm">
      <Stack spacing="md">
        <Stack direction="horizontal" align="center" justify="between">
          <Stack direction="horizontal" spacing="md" align="center">
            <Avatar src="/user.jpg" status="online" />
            <div>
              <Typography variant="h4">John Doe</Typography>
              <Typography variant="small" tone="muted">
                john@example.com
              </Typography>
            </div>
          </Stack>
          <Badge tone="success">Pro</Badge>
        </Stack>

        <Divider />

        <Stack spacing="sm">
          <Input label="Email" type="email" />
          <Checkbox label="Email notifications" />
        </Stack>

        <Button variant="primary" fullWidth>
          Save Changes
        </Button>
      </Stack>
    </Box>
  )
}
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript 5** - Type safety
- **Tailwind CSS 3** - Utility-first CSS
- **Storybook 8** - Component documentation
- **Vitest** - Unit testing
- **Testing Library** - Component testing
- **ESLint + Prettier** - Code quality
- **Poppins** - Typography

## 📄 License

MIT

## 🙏 Acknowledgments

Built with modern web standards and best practices:
- Atomic Design methodology
- Token-first design system
- WAI-ARIA accessibility guidelines
- React best practices
- TypeScript strict mode

---

## 🎉 Status

**✅ PRODUCTION-READY**

- 19 components
- 437 tests passing
- 220+ Storybook stories
- Full accessibility
- Comprehensive documentation

**Ready to build amazing products!** 🚀
