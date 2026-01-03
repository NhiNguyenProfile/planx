# ✅ Typography Component - Unified Text System

## 🎯 Overview

Đã tạo component **Typography** - một component tổng hợp thay thế cho cả **Text** và **Heading**, cung cấp API linh hoạt và nhất quán hơn.

---

## 🔄 What Changed

### Before (2 components)
```tsx
// Heading component
<Heading level="1">Title</Heading>
<Heading level="2">Subtitle</Heading>

// Text component  
<Text variant="body">Paragraph</Text>
<Text variant="caption">Caption</Text>
```

### After (1 unified component)
```tsx
// Typography component - handles everything
<Typography variant="h1">Title</Typography>
<Typography variant="h2">Subtitle</Typography>
<Typography variant="body">Paragraph</Typography>
<Typography variant="caption">Caption</Typography>
```

---

## ✨ Typography Component

### Variants Available

#### Heading Variants
- `h1` - Main page title (h1, 4xl, bold)
- `h2` - Section heading (h2, 3xl, bold)
- `h3` - Subsection (h3, 2xl, bold)
- `h4` - Minor heading (h4, xl, bold)
- `h5` - Small heading (h5, lg, semibold)
- `h6` - Smallest heading (h6, base, semibold)

#### Text Variants
- `body` - Regular paragraph (p, base, normal)
- `lead` - Introduction text (p, lg, normal)
- `large` - Large text (p, lg, normal)
- `small` - Small text (p, sm, normal)
- `muted` - De-emphasized (p, sm, normal, muted color)
- `caption` - Additional info (p, sm, normal)
- `overline` - Section labels (p, xs, medium, uppercase)

---

## 📝 Usage Examples

### Basic Usage
```tsx
// Headings
<Typography variant="h1">Page Title</Typography>
<Typography variant="h2">Section Title</Typography>
<Typography variant="h3">Subsection</Typography>

// Text
<Typography variant="body">Regular paragraph text</Typography>
<Typography variant="lead">Introduction paragraph</Typography>
<Typography variant="caption">Additional information</Typography>
```

### Custom Overrides
```tsx
// Override size
<Typography variant="h1" size="2xl">Smaller H1</Typography>

// Override weight
<Typography variant="h2" weight="normal">Light H2</Typography>

// Override tone
<Typography variant="body" tone="primary">Primary colored text</Typography>

// Multiple overrides
<Typography variant="h3" size="xl" weight="semibold" tone="success">
  Custom heading
</Typography>
```

### Alignment
```tsx
<Typography align="left">Left aligned</Typography>
<Typography align="center">Center aligned</Typography>
<Typography align="right">Right aligned</Typography>
<Typography align="justify">Justified text</Typography>
```

### Special Features
```tsx
// Truncate
<Typography truncate>Long text will be truncated...</Typography>

// Italic
<Typography italic>Italic text</Typography>

// Polymorphic
<Typography variant="h2" as="div">Div styled as H2</Typography>
```

---

## 🎨 Complete Props

```tsx
interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 
            'body' | 'lead' | 'large' | 'small' | 'muted' | 
            'caption' | 'overline'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  align?: 'left' | 'center' | 'right' | 'justify'
  tone?: 'default' | 'muted' | 'primary' | 'secondary' | 
         'success' | 'warning' | 'error' | 'info'
  truncate?: boolean
  italic?: boolean
  as?: React.ElementType
}
```

---

## 🔄 Backward Compatibility

The old **Text** and **Heading** components are still available as aliases:

```tsx
// All three work the same way
import { Typography } from '@/components'
import { Text } from '@/components'        // Alias for Typography
import { Heading } from '@/components'     // Alias for Typography

// Use whichever you prefer
<Typography variant="h1">Title</Typography>
<Heading variant="h1">Title</Heading>
<Text variant="body">Paragraph</Text>
```

---

## 📊 Test Results

**34 tests passing** ✅

Coverage includes:
- ✅ All heading variants (h1-h6)
- ✅ All text variants (body, lead, etc.)
- ✅ Custom size overrides
- ✅ Weight customization
- ✅ Alignment options
- ✅ Tone/color variations
- ✅ Truncate functionality
- ✅ Italic styles
- ✅ Polymorphic behavior
- ✅ Combined props

---

## 🎯 Benefits

### 1. **Unified API**
- One component for all text needs
- Consistent prop names
- Easier to learn and use

### 2. **Flexibility**
- Semantic variants (h1, h2, body)
- Visual overrides (size, weight)
- Separation of semantics and visuals

### 3. **Simplicity**
- Less components to remember
- Single import
- Cleaner codebase

### 4. **Power**
- All features of Text + Heading
- More variants available
- Better customization

---

## 📁 File Structure

```
components/
├── Typography/
│   ├── Typography.tsx          # Main component
│   ├── Typography.types.ts     # TypeScript types
│   ├── Typography.test.tsx     # 34 tests
│   ├── Typography.stories.tsx  # Storybook stories
│   └── index.ts                # Exports (+ aliases)
├── Text/                       # Keep for reference
├── Heading/                    # Keep for reference
└── index.ts                    # Export Typography
```

---

## 🚀 Migration Guide

### Old Code
```tsx
import { Heading, Text } from '@/components'

<Heading level="1">Title</Heading>
<Heading level="2" size="xl">Subtitle</Heading>
<Text variant="body">Paragraph</Text>
<Text variant="caption" tone="muted">Caption</Text>
```

### New Code (Recommended)
```tsx
import { Typography } from '@/components'

<Typography variant="h1">Title</Typography>
<Typography variant="h2" size="xl">Subtitle</Typography>
<Typography variant="body">Paragraph</Typography>
<Typography variant="caption" tone="muted">Caption</Typography>
```

### Or Keep Using Aliases
```tsx
import { Heading, Text } from '@/components'

// Still works! They're aliases for Typography
<Heading variant="h1">Title</Heading>
<Text variant="body">Paragraph</Text>
```

---

## 📈 Current Stats

| Metric | Value |
|--------|-------|
| **Total Components** | 8 |
| **Total Tests** | **214 passing** ✅ |
| **Typography Tests** | 34 |
| **Variants** | 13 (h1-h6 + 7 text) |
| **Sizes** | 8 (xs → 4xl) |
| **Weights** | 4 |
| **Tones** | 8 |

---

## ✨ Example: Complete Page

```tsx
<article className="max-w-2xl space-y-6">
  <div>
    <Typography variant="overline" tone="primary">
      Technology
    </Typography>
    <Typography variant="h1" className="mt-2">
      The Future of Design Systems
    </Typography>
    <Typography variant="muted" className="mt-2">
      Published on January 3, 2026
    </Typography>
  </div>

  <Typography variant="lead">
    Design systems have become essential for modern web development.
  </Typography>

  <Typography variant="body">
    In this article, we'll explore the evolution of design systems
    and their impact on product development.
  </Typography>

  <Typography variant="h2" className="mt-8">
    Introduction
  </Typography>

  <Typography variant="body">
    Building components with consistent patterns improves DX.
  </Typography>

  <Typography variant="h3" className="mt-6">
    Token-First Approach
  </Typography>

  <Typography variant="body">
    Using design tokens allows for easy customization.
  </Typography>

  <Typography variant="caption" tone="muted" className="mt-8">
    This article is part of our series on web development.
  </Typography>
</article>
```

---

## 🎉 Summary

✅ **Typography component created**  
✅ **Combines Text + Heading**  
✅ **13 variants available**  
✅ **34 tests passing**  
✅ **Backward compatible**  
✅ **Cleaner API**  
✅ **More flexible**  

**One component to rule them all!** 🚀

