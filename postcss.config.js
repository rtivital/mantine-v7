function colorSchemeMixin(colorScheme) {
  return {
    [`[data-mantine-color-scheme="${colorScheme}"] &`]: {
      '@mixin-content': {},
    },

    [`@media (prefers-color-scheme: ${colorScheme})`]: {
      '&': {
        '@mixin-content': {},
      },
    },
  };
}

const hoverMixin = {
  '@media (hover: hover)': {
    '&:hover': {
      '@mixin-content': {},
    },
  },
  '@media (hover: none)': {
    '&:active': {
      '@mixin-content': {},
    },
  },
};

module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-rem': {},
    'postcss-mixins': {
      mixins: {
        light: colorSchemeMixin('light'),
        dark: colorSchemeMixin('dark'),
        hover: hoverMixin,
      },
    },
  },
};
