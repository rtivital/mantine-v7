import { Frontmatter } from '@/types';

export const MDX_OTHERS_DATA: Record<string, Frontmatter> = {
  Notifications: {
    title: 'Notifications system',
    package: '@mantine/notifications',
    slug: '/others/notifications',
    props: ['Notifications'],
    styles: ['Notifications'],
    description: 'Mantine notifications system',
    source: 'mantine-notifications/src',
    license: 'MIT',
    docs: 'others/notifications.mdx',
  },

  Spotlight: {
    title: 'Spotlight',
    package: '@mantine/spotlight',
    slug: '/others/spotlight',
    props: [
      'Spotlight',
      'SpotlightRoot',
      'SpotlightAction',
      'SpotlightActionsGroup',
      'SpotlightSearch',
    ],
    styles: ['Spotlight'],
    description: 'Command center for your application',
    source: 'mantine-spotlight/src',
    license: 'MIT',
    docs: 'others/spotlight.mdx',
  },

  Carousel: {
    title: 'Carousel',
    package: '@mantine/carousel',
    slug: '/others/carousel',
    props: ['Carousel'],
    styles: ['Carousel'],
    description: 'Embla based carousel component',
    source: 'mantine-carousel/src',
    license: 'MIT',
    docs: 'others/carousel.mdx',
  },

  Dropzone: {
    title: 'Dropzone',
    package: '@mantine/dropzone',
    slug: '/others/dropzone',
    props: ['Dropzone'],
    styles: ['Dropzone'],
    description: 'Capture files from user with drag and drop',
    source: 'mantine-dropzone/src',
    license: 'MIT',
    docs: 'others/dropzone.mdx',
  },
};
