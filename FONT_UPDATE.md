# 🔤 Font System Update - Poppins

## Changes Made

### ✅ Font Family: Poppins

**Font Weights Included:**
- 400 (Normal)
- 500 (Medium)
- 600 (Semibold)
- 700 (Bold)

---

## Implementation

### 1. Next.js Layout (`app/layout.tsx`)
```tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

// Applied to body
<body className={poppins.className}>{children}</body>
```

### 2. Global Styles (`app/globals.css`)
```css
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
    'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### 3. Tailwind Config (`tailwind.config.ts`)
```ts
fontFamily: {
  sans: ['Poppins', 'system-ui', '-apple-system', ...],
  poppins: ['Poppins', 'sans-serif'],
}
```

### 4. Storybook (`.storybook/preview.ts`)
```tsx
// Poppins font applied to all stories
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

decorators: [
  (Story) => (
    <div className={poppins.className}>
      <Story />
    </div>
  ),
]
```

---

## Font Weight Mapping

| Token | Weight | Poppins Weight |
|-------|--------|----------------|
| `font-normal` | 400 | Regular |
| `font-medium` | 500 | Medium |
| `font-semibold` | 600 | Semibold |
| `font-bold` | 700 | Bold |

---

## Typography Scale (with Poppins)

### Sizes
- **xs**: 0.75rem (12px) - Poppins
- **sm**: 0.875rem (14px) - Poppins
- **base**: 1rem (16px) - Poppins
- **lg**: 1.125rem (18px) - Poppins
- **xl**: 1.25rem (20px) - Poppins
- **2xl**: 1.5rem (24px) - Poppins

### Line Heights (Optimized for Poppins)
- **xs**: 1rem
- **sm**: 1.25rem
- **base**: 1.5rem
- **lg**: 1.75rem
- **xl**: 1.75rem
- **2xl**: 2rem

---

## Component Updates

All components now use Poppins automatically:

### Button
```tsx
<Button variant="primary">Click me</Button>
// Font: Poppins, Weight: 500 (medium)
```

### Text
```tsx
<Text size="xl" weight="bold">Heading</Text>
// Font: Poppins, Weight: 700 (bold)
```

### Input
```tsx
<Input label="Email" />
// Font: Poppins, Weight: 400 (normal)
```

---

## Benefits

✅ **Consistent Typography** - Poppins across all components  
✅ **Google Fonts** - Optimized loading with Next.js  
✅ **Font Display Swap** - No FOUT (Flash of Unstyled Text)  
✅ **Multiple Weights** - 400, 500, 600, 700 available  
✅ **Storybook Support** - Poppins in all stories  
✅ **Fallback Fonts** - System fonts as backup  

---

## Usage

### Default (Automatic)
All components use Poppins by default:
```tsx
<Text>This text uses Poppins</Text>
<Button>This button uses Poppins</Button>
```

### Custom Weight
```tsx
<Text weight="bold">Bold Poppins text</Text>
<Text weight="semibold">Semibold Poppins text</Text>
<Text weight="medium">Medium Poppins text</Text>
<Text weight="normal">Normal Poppins text</Text>
```

### Custom Size
```tsx
<Text size="2xl" weight="bold">Large heading</Text>
<Text size="sm">Small text</Text>
```

---

## Testing

All 110 tests still pass with Poppins font! ✅

```bash
npm run test
```

---

## Preview

### Next.js App
```bash
npm run dev
# Visit http://localhost:3000
```

### Storybook
```bash
npm run storybook
# Visit http://localhost:6006
```

All components now display with **Poppins font**! 🎉

---

## Font Loading

Next.js automatically:
- ✅ Optimizes font loading
- ✅ Self-hosts Google Fonts
- ✅ Eliminates external network requests
- ✅ Improves performance
- ✅ Ensures privacy

---

## Summary

✅ **Font Family**: Poppins  
✅ **Weights**: 400, 500, 600, 700  
✅ **Applied to**: All components  
✅ **Next.js**: Optimized loading  
✅ **Storybook**: Full support  
✅ **Tailwind**: Configured  
✅ **Tests**: All passing  

**Hệ thống đã được cập nhật hoàn toàn với font Poppins!** 🎨

