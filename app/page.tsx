import { Button, Text, Box, Input } from '@/components'

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8">
      <Box padding="xl" background="white" radius="lg" shadow="md" className="mx-auto max-w-4xl">
        <Text as="h1" size="2xl" weight="bold" className="mb-2">
          Design System
        </Text>
        <Text tone="muted" className="mb-8">
          Token-first, accessible UI component library
        </Text>

        {/* Button showcase */}
        <Box className="mb-8">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Buttons
          </Text>
          <Box display="flex" className="flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button tone="success">Success</Button>
            <Button tone="error">Error</Button>
            <Button loading>Loading</Button>
          </Box>
        </Box>

        {/* Text showcase */}
        <Box className="mb-8">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Typography
          </Text>
          <Box display="flex" className="flex-col gap-2">
            <Text size="2xl" weight="bold">
              Heading 2XL
            </Text>
            <Text size="xl" weight="bold">
              Heading XL
            </Text>
            <Text size="lg" weight="semibold">
              Heading LG
            </Text>
            <Text>Body text - regular paragraph content</Text>
            <Text variant="caption" tone="muted">
              Caption text for additional information
            </Text>
            <Text variant="overline">Overline Text</Text>
          </Box>
        </Box>

        {/* Box showcase */}
        <Box className="mb-8">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Layout Boxes
          </Text>
          <Box display="grid" className="grid-cols-3 gap-4">
            <Box padding="md" background="neutral-100" radius="md" shadow="sm">
              <Text weight="medium">Card 1</Text>
            </Box>
            <Box padding="md" background="neutral-100" radius="md" shadow="sm">
              <Text weight="medium">Card 2</Text>
            </Box>
            <Box padding="md" background="neutral-100" radius="md" shadow="sm">
              <Text weight="medium">Card 3</Text>
            </Box>
          </Box>
        </Box>

        {/* Input showcase */}
        <Box className="mb-8">
          <Text as="h2" size="xl" weight="semibold" className="mb-4">
            Form Inputs
          </Text>
          <Box display="flex" className="flex-col gap-4">
            <Input label="Email" type="email" placeholder="email@example.com" />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              helperText="Must be at least 8 characters"
            />
            <Input
              label="Required Field"
              required
              placeholder="This field is required"
            />
            <Input
              variant="filled"
              placeholder="Filled variant"
            />
          </Box>
        </Box>

        {/* Stats */}
        <Box
          padding="lg"
          background="primary"
          radius="lg"
          className="text-white"
        >
          <Text as="h2" size="lg" weight="semibold" className="mb-4 text-white">
            Component Stats
          </Text>
          <Box display="grid" className="grid-cols-4 gap-4 text-center">
            <Box>
              <Text size="2xl" weight="bold" className="text-white">
                4
              </Text>
              <Text size="sm" className="text-white/80">
                Components
              </Text>
            </Box>
            <Box>
              <Text size="2xl" weight="bold" className="text-white">
                110
              </Text>
              <Text size="sm" className="text-white/80">
                Tests
              </Text>
            </Box>
            <Box>
              <Text size="2xl" weight="bold" className="text-white">
                100%
              </Text>
              <Text size="sm" className="text-white/80">
                Passing
              </Text>
            </Box>
            <Box>
              <Text size="2xl" weight="bold" className="text-white">
                ✓
              </Text>
              <Text size="sm" className="text-white/80">
                Accessible
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box className="mt-8 text-center">
          <Text tone="muted" size="sm">
            Built with Next.js, TypeScript, Tailwind CSS, and ❤️
          </Text>
        </Box>
      </Box>
    </main>
  )
}

