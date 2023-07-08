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
};
