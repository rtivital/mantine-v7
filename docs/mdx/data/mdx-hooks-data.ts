import { Frontmatter } from '@/types';

export const MDX_HOOKS_DATA: Record<string, Frontmatter> = {
  useClickOutside: {
    title: 'use-click-outside',
    package: '@mantine/hooks',
    slug: '/hooks/use-click-outside',
    description: 'Detects click and touch events outside of given element',
    import: "import { useClickOutside } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-click-outside/use-click-outside.ts',
    docs: 'hooks/use-click-outside.mdx',
  },

  useClipboard: {
    title: 'use-clipboard',
    package: '@mantine/hooks',
    slug: '/hooks/use-clipboard',
    description: 'Wrapper around navigator.clipboard with feedback timeout',
    import: "import { useClipboard } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-clipboard/use-clipboard.ts',
    docs: 'hooks/use-clipboard.mdx',
  },

  useColorScheme: {
    title: 'use-color-scheme',
    package: '@mantine/hooks',
    slug: '/hooks/use-color-scheme',
    description: 'Detects user system color scheme with window.matchMedia API',
    import: "import { useColorScheme } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-color-scheme/use-color-scheme.ts',
    docs: 'hooks/use-color-scheme.mdx',
  },

  useCounter: {
    title: 'use-counter',
    package: '@mantine/hooks',
    slug: '/hooks/use-counter',
    description: 'Increments/decrements state within given boundaries',
    import: "import { useCounter } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-counter/use-counter.ts',
    docs: 'hooks/use-counter.mdx',
  },

  useDebouncedState: {
    title: 'use-debounced-state',
    package: '@mantine/hooks',
    slug: '/hooks/use-debounced-state',
    description: 'Debounces value changes',
    import: "import { useDebouncedState } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-debounced-state/use-debounced-state.ts',
    docs: 'hooks/use-debounced-state.mdx',
  },

  useDebouncedValue: {
    title: 'use-debounced-value',
    package: '@mantine/hooks',
    slug: '/hooks/use-debounced-value',
    description: 'Debounces value changes',
    import: "import { useDebouncedValue } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-debounced-value/use-debounced-value.ts',
    docs: 'hooks/use-debounced-value.mdx',
  },

  useDidUpdate: {
    title: 'use-did-update',
    package: '@mantine/hooks',
    slug: '/hooks/use-did-update',
    description: 'Calls function in useEffect when value changes, but not when component mounts',
    import: "import { useDidUpdate } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-did-update/use-did-update.ts',
    docs: 'hooks/use-did-update.mdx',
  },

  useDisclosure: {
    title: 'use-disclosure',
    package: '@mantine/hooks',
    slug: '/hooks/use-disclosure',
    description: 'Manages boolean state',
    import: "import { useDisclosure } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-disclosure/use-disclosure.ts',
    docs: 'hooks/use-disclosure.mdx',
  },

  useDocumentTitle: {
    title: 'use-document-title',
    package: '@mantine/hooks',
    slug: '/hooks/use-document-title',
    description: 'Sets document.title to given string',
    import: "import { useDocumentTitle } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-document-title/use-document-title.ts',
    docs: 'hooks/use-document-title.mdx',
  },

  useDocumentVisibility: {
    title: 'use-document-visibility',
    package: '@mantine/hooks',
    slug: '/hooks/use-document-visibility',
    description: 'Detects if current tab is active',
    import: "import { useDocumentVisibility } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-document-visibility/use-document-visibility.ts',
    docs: 'hooks/use-document-visibility.mdx',
  },

  useElementSize: {
    title: 'use-element-size',
    package: '@mantine/hooks',
    slug: '/hooks/use-element-size',
    description: 'Returns element width and height and subscribe to changes',
    import: "import { useElementSize } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-element-size/use-element-size.ts',
    docs: 'hooks/use-element-size.mdx',
  },

  useEventListener: {
    title: 'use-event-listener',
    package: '@mantine/hooks',
    slug: '/hooks/use-event-listener',
    description: 'Subscribes to events with a ref',
    import: "import { useEventListener } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-event-listener/use-event-listener.ts',
    docs: 'hooks/use-event-listener.mdx',
  },

  useEyeDropper: {
    title: 'use-eye-dropper',
    package: '@mantine/hooks',
    slug: '/hooks/use-eye-dropper',
    description: 'Pick color from any pixel on the screen',
    import: "import { useEyeDropper } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-eye-dropper/use-eye-dropper.ts',
    docs: 'hooks/use-eye-dropper.mdx',
  },

  useFavicon: {
    title: 'use-favicon',
    package: '@mantine/hooks',
    slug: '/hooks/use-favicon',
    description: 'Changes favicon',
    import: "import { useFavicon } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-favicon/use-favicon.ts',
    docs: 'hooks/use-favicon.mdx',
  },

  useFocusReturn: {
    title: 'use-focus-return',
    package: '@mantine/hooks',
    slug: '/hooks/use-focus-return',
    description:
      'Captures last focused element on the page and returns focus to it once the condition is met',
    import: "import { useFocusReturn } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-focus-return/use-focus-return.ts',
    docs: 'hooks/use-focus-return.mdx',
  },

  useFocusTrap: {
    title: 'use-focus-trap',
    package: '@mantine/hooks',
    slug: '/hooks/use-focus-trap',
    description: 'Traps focus inside given node',
    import: "import { useFocusTrap } from '@mantine/hooks';",
    source: 'mantine-hooks/src/use-focus-trap/use-focus-trap.ts',
    docs: 'hooks/use-focus-trap.mdx',
  },
};
