# Setup Guide

## Installation

Install all dependencies:

```bash
npm install
```

## Verify Installation

After installation, you should have:

### Dependencies
- ✅ Next.js 14 with App Router
- ✅ React 18
- ✅ TypeScript 5
- ✅ Tailwind CSS 3
- ✅ clsx & tailwind-merge (for className utilities)

### Dev Dependencies
- ✅ Storybook 8 with Next.js integration
- ✅ Vitest with React Testing Library
- ✅ ESLint with TypeScript support
- ✅ Prettier with Tailwind plugin

## Available Scripts

### Development
```bash
npm run dev          # Start Next.js dev server (http://localhost:3000)
npm run storybook    # Start Storybook (http://localhost:6006)
```

### Testing
```bash
npm run test         # Run Vitest in watch mode
npm run test:ui      # Run Vitest with UI
npm run test:coverage # Generate coverage report
```

### Linting & Formatting
```bash
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting without changes
```

### Build
```bash
npm run build              # Build Next.js for production
npm run build-storybook    # Build Storybook static site
npm run start              # Start production server
```

## Project Structure

```
/
├── .storybook/          # Storybook configuration
│   ├── main.ts
│   └── preview.ts
├── app/                 # Next.js App Router
│   ├── globals.css      # Global styles + design tokens
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # UI Components (atoms only)
│   └── index.ts         # Component exports
├── tokens/              # Design tokens
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── radius.ts
│   ├── shadows.ts
│   └── index.ts
├── utils/               # Utilities
│   ├── cn.ts            # className utility
│   ├── polymorphic.ts   # Polymorphic component types
│   └── index.ts
└── public/              # Static assets
```

## Design Tokens

All design tokens are defined as CSS variables in `app/globals.css` and can be accessed:

1. **Via Tailwind classes**: `className="bg-primary text-neutral-900"`
2. **Via TypeScript tokens**: `import { colors } from '@/tokens'`
3. **Via CSS variables**: `color: var(--color-primary)`

## Next Steps

Phase 1 is complete! ✅

You're now ready to:
- Build atomic components (Button, Text, Input, etc.)
- Add Storybook stories for each component
- Write unit tests with Vitest
- Implement runtime theming

Run `npm install` to get started!

