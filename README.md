# @mykelcodes/flexkit

A modern, type-safe layout component library for React Native built with react-native-unistyles. Flexkit provides a collection of flexible, composable layout components that make building responsive UIs effortless across iOS, Android, and Web platforms.

## Features

- 🎨 **Built with react-native-unistyles** - Leverages the power of unistyles for consistent, performant styling
- 📱 **Cross-platform** - Works seamlessly on iOS, Android, and Web via Expo
- 🔧 **TypeScript first** - Full type safety and excellent developer experience
- 🧩 **Composable** - Mix and match components to create complex layouts
- ⚡ **Lightweight** - Minimal bundle size with zero dependencies
- 🎯 **Flexbox-focused** - Intuitive layout primitives based on CSS Flexbox

## Installation

```bash
npm install @mykelcodes/flexkit react-native-unistyles
# or
yarn add @mykelcodes/flexkit react-native-unistyles
# or
bun add @mykelcodes/flexkit react-native-unistyles
```

## Quick Start

```tsx
import { Box } from '@mykelcodes/flexkit';

export function App() {
  return (
    <Box bg="#f0f0f0">
      {/* Your content here */}
    </Box>
  );
}
```

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run src/index.ts
```