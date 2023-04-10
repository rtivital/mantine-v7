module.exports = {
  extends: ['mantine', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'jest/valid-title': 'off',
    'react/jsx-pascal-case': 'off',
    'newline-per-chained-call': 'off',
    'import/extensions': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-closing-bracket-location': 'off',
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
};
