import { convertCssVariables } from './convert-css-variables';

const result = [
  // shared
  '.mantine-test{--mantine-color-white: #fff;--mantine-color-black: #000;}',
  // dark
  '@media (prefers-color-scheme: dark){.mantine-test{--mantine-color-filled: red;}}',
  '.mantine-test[data-mantine-color-scheme="dark"]{--mantine-color-filled: red;}',

  // light
  '@media (prefers-color-scheme: light){.mantine-test{--mantine-color-filled: blue;}}',
  '.mantine-test[data-mantine-color-scheme="light"]{--mantine-color-filled: blue;}',
];

describe('@mantine/core/convert-css-variables', () => {
  it('converts object to css variables string', () => {
    expect(
      convertCssVariables({
        selector: '.mantine-test',
        variables: {
          '--mantine-color-white': '#fff',
          '--mantine-color-black': '#000',
        },

        dark: {
          '--mantine-color-filled': 'red',
        },

        light: {
          '--mantine-color-filled': 'blue',
        },
      })
    ).toBe(result.join(''));
  });
});
