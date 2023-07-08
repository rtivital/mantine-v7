import { Frontmatter, MdxPagesCategory, MdxPagesGroup } from '@/types';
import { MDX_DATA } from './mdx-data';

export const MDX_PAGES_GROUPS: MdxPagesGroup[] = [
  {
    group: 'theming',
    pages: [
      MDX_DATA.MantineProvider,
      MDX_DATA.ThemeObject,
      MDX_DATA.Colors,
      MDX_DATA.ColorSchemes,
      MDX_DATA.Typography,
      MDX_DATA.DefaultProps,
    ],
  },
  {
    group: 'styles',
    pages: [
      MDX_DATA.CSSModules,
      MDX_DATA.PostCSSPreset,
      MDX_DATA.VanillaExtract,
      MDX_DATA.GlobalStyles,
      MDX_DATA.CssVariables,
      MDX_DATA.Rem,
      MDX_DATA.StyleProp,
      MDX_DATA.ResponsiveStyles,
      MDX_DATA.StylesApi,
      MDX_DATA.DataAttributes,
      MDX_DATA.VariantsAndSizes,
      MDX_DATA.UnstyledComponents,
      MDX_DATA.StyleProps,
      MDX_DATA.ColorFunctions,
      MDX_DATA.Rtl,
      MDX_DATA.StylesPerformance,
    ],
  },
  {
    group: 'guides',
    pages: [
      MDX_DATA.Polymorphic,
      MDX_DATA.Icons,
      MDX_DATA.NextJs,
      MDX_DATA.Vite,
      MDX_DATA.Remix,
      MDX_DATA.Gatsby,
      MDX_DATA.Redwood,
      MDX_DATA.Storybook,
      MDX_DATA.TypeScript,
      MDX_DATA.JavaScript,
      MDX_DATA.Jest,
      MDX_DATA.SixToSeven,
    ],
  },
  {
    group: 'mantine-core',
    pages: [
      {
        category: 'layout',
        pages: [
          MDX_DATA.Container,
          MDX_DATA.Center,
          MDX_DATA.Group,
          MDX_DATA.Stack,
          MDX_DATA.AspectRatio,
        ],
      },
      {
        category: 'inputs',
        pages: [
          MDX_DATA.Input,
          MDX_DATA.ColorPicker,
          MDX_DATA.NativeSelect,
          MDX_DATA.SegmentedControl,
          MDX_DATA.Slider,
          MDX_DATA.Switch,
          MDX_DATA.TextInput,
          MDX_DATA.Checkbox,
          MDX_DATA.Fieldset,
        ],
      },
      {
        category: 'combobox',
        pages: [
          MDX_DATA.Combobox,
          MDX_DATA.Pill,
          MDX_DATA.PillsInput,
          MDX_DATA.Autocomplete,
          MDX_DATA.TagsInput,
          MDX_DATA.Select,
          MDX_DATA.MultiSelect,
        ],
      },
      {
        category: 'buttons',
        pages: [
          MDX_DATA.ActionIcon,
          MDX_DATA.Button,
          MDX_DATA.CloseButton,
          MDX_DATA.CopyButton,
          MDX_DATA.FileButton,
          MDX_DATA.UnstyledButton,
        ],
      },
      {
        category: 'navigation',
        pages: [MDX_DATA.Anchor, MDX_DATA.Tabs, MDX_DATA.Breadcrumbs, MDX_DATA.Burger],
      },
      { category: 'feedback', pages: [MDX_DATA.Loader, MDX_DATA.Alert, MDX_DATA.Notification] },
      {
        category: 'overlays',
        pages: [
          MDX_DATA.Popover,
          MDX_DATA.Tooltip,
          MDX_DATA.Overlay,
          MDX_DATA.Affix,
          MDX_DATA.Modal,
          MDX_DATA.Drawer,
        ],
      },
      {
        category: 'Data display',
        pages: [
          MDX_DATA.BackgroundImage,
          MDX_DATA.ColorSwatch,
          MDX_DATA.Kbd,
          MDX_DATA.Badge,
          MDX_DATA.Avatar,
          MDX_DATA.Accordion,
        ],
      },
      {
        category: 'typography',
        pages: [
          MDX_DATA.Blockquote,
          MDX_DATA.Code,
          MDX_DATA.Highlight,
          MDX_DATA.Mark,
          MDX_DATA.Table,
          MDX_DATA.Text,
          MDX_DATA.Title,
          MDX_DATA.TypographyStylesProvider,
        ],
      },
      {
        category: 'misc',
        pages: [
          MDX_DATA.Collapse,
          MDX_DATA.FocusTrap,
          MDX_DATA.Paper,
          MDX_DATA.Portal,
          MDX_DATA.ScrollArea,
          MDX_DATA.Transition,
          MDX_DATA.VisuallyHidden,
          MDX_DATA.Divider,
        ],
      },
    ],
  },
  {
    group: 'others',
    pages: [MDX_DATA.Notifications],
  },
  {
    group: 'changelog',
    pages: [MDX_DATA.Changelog700],
  },
];

export const ALL_MDX_PAGES: Frontmatter[] = MDX_PAGES_GROUPS.reduce<Frontmatter[]>((acc, group) => {
  group.pages.forEach((item) => {
    if (item.category) {
      acc.push(...(item as MdxPagesCategory).pages);
    } else {
      acc.push(item as Frontmatter);
    }
  });

  return acc;
}, []);
